import { useState, useEffect } from 'react';
import './Gallery.css';
import { Photo } from './Photo.js';

function Gallery(props) {
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

    if (loading) {
        <div className="gallery">
            <p>LOADING...</p>
        </div>
    } else {
        return (
            <div className="gallery">
                {photoData.map((photo, i) => {
                    return <Photo {... photo} key={i} />
                })}            
            </div>
        );
    }
}

export { Gallery };