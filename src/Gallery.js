import { useState, useEffect } from 'react';
import './Gallery.css';
import { Photo } from './Photo.js';

function Gallery(props) {
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