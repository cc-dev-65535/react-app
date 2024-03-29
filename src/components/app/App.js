import { useState, useEffect } from 'react';
import './App.css';
import { Gallery } from '../gallery/Gallery.js';
import { Button } from '../button/Button.js';
import { storePhotos } from '../../storage.js';

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
          setData(photoData);
          setLoading(false);
    })
    .catch((err) => {
          setError(true)
          setLoading(false);
    });
  }, []);

  function reorderPhotos(photoData, randomizedPhotoData) {
    if (photoData.length === 0) {
      return setData(randomizedPhotoData);
    }
    const [ aPhoto ] = photoData.splice(Math.floor(Math.random() * photoData.length), 1);
    randomizedPhotoData.push(aPhoto);
    return reorderPhotos(photoData, randomizedPhotoData);
  }

  return (
    <div className="app">
      <Gallery photoData={photoData} loading={loading} error={error} />
      <Button loading={loading} error={error} photoData={photoData} reorderPhotos={reorderPhotos} />
    </div>
  );
}

export default App;
