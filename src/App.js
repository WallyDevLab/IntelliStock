/**
 * Import necessary dependencies
 */
import React, { useEffect, useState } from 'react';
import CSVReader from 'react-csv-reader';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import axios from 'axios';

/**
 * Define the App component
 */
function App() {
  /**
   * State variables
   */
  const [file, setFile] = useState([]); // stores the parsed CSV data
  const [recent, setRecent] = useState(1); // stores the recent data range value
  const [data, setData] = useState(); // stores the original CSV data
  const [headers, setHeaders] = useState([]); // stores the CSV headers

  /**
   * Papa Parse options
   */
  const papaparseOptions = {
    header: true, // use the first row as headers
    dynamicTyping: true, // automatically detect data types
    skipEmptyLines: true, // skip empty lines
    transformHeader: header => 
      header.toLowerCase().replace(/\W/g, '_') // transform headers to lowercase and replace non-word characters with underscores
  };

  /**
   * Effect hook to handle changes to the recent data range value
   */
  useEffect(() => {
    if (data != null) {
      handleForce(data)
    }
  }, [recent])

  /**
   * Function to handle parsing and capping of CSV data
   * @param {Array} data - the original CSV data
   */
  function handleForce(data) {
    // cap data to read last 30
    const cappedData = data.slice(-(data.length * (recent/100)));
    const csvHeaders = cappedData.length > 0 ? Object.keys(cappedData[0]) : [];
    setHeaders(csvHeaders);
    setFile(cappedData);
  }

  /**
   * Function to send CSV data to the server
   * @param {Array} file - the parsed CSV data
   */
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