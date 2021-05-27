import React from "react"; 
import "./Title.css";
import Instalogo from "../../imgs/instagram-logo.png"; 

export default function Title() {
    return (
        <div className="page-title">
            <img src={Instalogo} alt="Old Insta Logo" />
            <h1 className="title-text"> 
                <em>
                    Groovy Gallery
                </em>
            </h1>
        </div>
    )
}