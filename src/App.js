import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [file, setFile] = useState([]);
  
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