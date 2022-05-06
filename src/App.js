import { useEffect, useState } from 'react';
import papa from 'papaparse';
import './App.css';

function App() {
  const [cars, setCars] = useState([])
  const prepareData = data => {
    const json = data.map((line, index) => {
      if (index > 0) {
        let obj = {};
        data[0].forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
        return obj;
      }
    })
    json.shift();
    setCars(json)
  }
  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTDwbHakl1R61Lba_U6N-5Yh6ovQx_MzBXqG9LWNRkT3nPkx1ZRWNbI8poP4lWqcO_cNd5PZyvOeFTj/pub?output=csv')
      .then(result => result.text())
      .then(text => papa.parse(text))
      .then(data => prepareData(data.data))
  }, [])
  return (
    <div className="App">
      <h1>Google Data</h1>
      {cars.length > 0 && cars.map(car => <h6 key={car.id}>{car.company_name}</h6>)}
    </div>
  );
}

export default App;
