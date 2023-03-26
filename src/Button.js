import './Button.css';

function Button(props) {
    if (props.loading) {
        return (
            <div>
            </div>
        );
    } else if (props.error) {
        return (
            <div>
            </div>
        );
    } else {
        return (
            <button type="button" className="reorder-button" onClick={() => { props.reorderPhotos(props.photoData, []) }}>Reorder</button>
        );
    }
}

export { Button };