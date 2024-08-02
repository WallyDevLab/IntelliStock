import React, { useEffect, useState } from 'react';
import CSVReader from 'react-csv-reader';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import axios from 'axios';

function App() {
  const [file, setFile] = useState([]);
  const [recent, setRecent] = useState(1);
  const [data, setData] = useState();
  const [headers, setHeaders] = useState([]);
  // Map headers to desired headers
  // const headerMapping = {
  //   'sales_date': 'sales_date',
  //   'volume': 'volume',
  //   'rel_promo_price': 'rel_promo_price',
  //   'is_promo': 'is_promo',
  //   'is_single_price_promo': 'is_single_price_promo',
  //   'is_multibuy_promo': 'is_multibuy_promo',
  //   'rsp': 'rsp',
  //   'planned_promo_vol': 'planned_promo_vol',
  //   'product_code': 'product_code',
  //   'sale_date': 'sale_date',
  // };
//uncomment once csv created

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => 
      header.toLowerCase().replace(/\W/g, '_')
  };

  useEffect(() => {
    if (data != null) {
      handleForce(data)

    }
  }, [recent])

  function handleForce(data) {
    //cap data to read last 30
    const cappedData = data.slice(-(data.length * (recent/100)));
    const csvHeaders = cappedData.length > 0 ? Object.keys(cappedData[0]) : [];
    setHeaders(csvHeaders);
    setFile(cappedData);
  }

  const sendCSVtoServer = async (file) => {
    await axios.post('https://nerd-biz-bot.vercel.app/csv', {
      file
    })
    .then((res) => console.log(res))
    .catch((err) => console.warn(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>IntelliStock</h1>
      </header>
      <div>
        <CSVReader
          cssClass="csv-reader-input"
          label="Select CSV with business data"
          onFileLoaded={async(e) => {
            handleForce(e);
            setData(e);
            // sendCSVtoServer(e);
          }}
          onError={(error) => console.error(error)}
          parserOptions={papaparseOptions}
          inputId="CSVInput"
          inputName="CSVInput"
          inputStyle={{ color: 'red' }}
        />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center my-3'>
        <label for="customRange1" class="form-label d-block mt-3">Recent data range</label>
        <input value={recent} onChange={(e) => {
          setRecent(e.target.value)
        }} type="range" class="form-range w-25" id="customRange1"/>
      </div>
      {recent}%
      
      <Dashboard csvData={file} />
    </div>
  );
}

export default App;