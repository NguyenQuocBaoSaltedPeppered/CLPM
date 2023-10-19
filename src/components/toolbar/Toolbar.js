import Button from "../button/Button";
import './style.css';

export default function Toolbar({ onPlayMovie, onUploadImage}){
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={onPlayMovie}>Play Movie</Button>
            <Button onClick={onUploadImage}>Upload Image</Button>
        </div>
    );
}