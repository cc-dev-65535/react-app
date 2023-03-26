import './Photo.css';

function Photo(props) {
    return (
        <div className="photo">
            <span className="title-text">{props.title}</span>
            <img src={props.url} alt="random colour" />
        </div>
    );
}

export { Photo };