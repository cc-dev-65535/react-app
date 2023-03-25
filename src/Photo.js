import './Photo.css';

function Photo(props) {
    return (
        <div className="photo">
            <span>{props.title}</span>
            <img src={props.url} />
        </div>
    );
}

export { Photo };