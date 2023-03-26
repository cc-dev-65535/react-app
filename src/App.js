import { useState, useEffect } from 'react';
import './App.css';
import { Gallery } from './Gallery.js';
import { Button } from './Button.js';

function App() {
  const url = 'http://jsonplaceholder.typicode.com/photos';
  const [ photoData, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(url)
    .then((response) => {
          return response.json();
    })
    .then((photoData) => {
          console.log(photoData[0]);
          photoData = photoData.slice(1, 100);
          setData(photoData);
          setLoading(false);
    })
    .catch((err) => {
          setError(true)
          setLoading(false);
    });
  }, []);

  return (
    <div className="app">
      <Gallery photoData={photoData} loading={loading} error={error} />
      <Button loading={loading} error={error} />
    </div>
  );
}

export default App;
