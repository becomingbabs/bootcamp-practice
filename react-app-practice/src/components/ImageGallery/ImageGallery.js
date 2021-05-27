import React from "react"; 
import "./ImageGallery.css"; 

export default function ImageGallery(props) {
    if (props.photos) {
        return (
            <section className="Photos" > 
                {props.photos.map(function (photo, id) {
                    return (
                    <a href={photo.src.original} target="_blank" rel="noreferrer" >
                        <img src={photo.src.landscape} key={photo.id} alt=" " />
                    </a>
                    );  
                })}
            </section>
        ); 
    } else {
        return null; 
    }
}