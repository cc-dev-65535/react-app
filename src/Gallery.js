import { useState, useEffect } from 'react';
import './Gallery.css';

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
            setData(photoData);
            setLoading(false);
      })
      .catch((err) => {
            setError(true)
            setLoading(false);
      });
    }, []);

    return (
        <div className="Gallery">
            {photoData.map((photo, i) => {
                return <Photo {... photo} />
            })}            
        </div>
    );
}

export { Gallery };