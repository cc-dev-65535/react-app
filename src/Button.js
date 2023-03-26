//import './Button.css';
import { Photo } from './Photo.js';

function Button(props) {
    if (props.loading) {
        return (
            <div className="reorder-button">
            </div>
        );
    } else if (props.error) {
        return (
            <div className="reorder-button">
            </div>
        );
    } else {
        return (
            <button type="button" onClick={props.reorderPhotos}>Reorder</button>
        );
    }
}

export { Button };