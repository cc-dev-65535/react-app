import './Gallery.css';
import { Photo } from '../photo/Photo.js';

function Gallery(props) {
    if (props.loading) {
        return (
            <div className="gallery">
                <div className="placeholder"></div>
            </div>
        );
    } else if (props.error) {
        return (
            <div className="gallery">
                <div className="placeholder"></div>
            </div>
        );
    } else {
        return (
            <div className="gallery">
                {props.photoData.map((photo, i) => {
                    return <Photo {... photo} key={i} />
                })}            
            </div>
        );
    }
}

export { Gallery };