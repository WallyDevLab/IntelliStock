import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [file, setFile] = useState([]);
  // Map headers to desired headers
  const headerMapping = {
    'sales_date': 'sales_date',
    'volume': 'volume',
    'rel_promo_price': 'rel_promo_price',
    'is_promo': 'is_promo',
    'is_single_price_promo': 'is_single_price_promo',
    'is_multibuy_promo': 'is_multibuy_promo',
    'rsp': 'rsp',
    'planned_promo_vol': 'planned_promo_vol',
    'product_code': 'product_code',
    'sale_date': 'sale_date',
  };
//uncomment once csv created

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => 
      header
        .toLowerCase()
        .replace(/\W/g, '_')
  };

  function handleForce(data) {
    //cap data to read last 30
    const cappedData = data.slice(-30);
    setFile(cappedData);
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
          onFileLoaded={handleForce}
          onError={(error) => console.error(error)}
          parserOptions={papaparseOptions}
          inputId="CSVInput"
          inputName="CSVInput"
          inputStyle={{ color: 'red' }}
        />
      </div>
      <Dashboard csvData={file} />
    </div>
  );
}

export default App;