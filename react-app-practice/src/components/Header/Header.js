import React, { useState } from "react"; 
import "./Header.css";
import axios from "axios"; 
import ImageGallery from "../ImageGallery/ImageGallery.js";

export default function Header() {
    let [keyword, setKeyword] = useState("Love"); 
    let [loaded, setLoaded] = useState(false); 
    let [photos, setPhotos] = useState(null); 
    
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
        setKeyword("");  
    }

    function search() {
        let pexelsApiKey = "563492ad6f91700001000001f65adbcb4681495ab80b8486ebf83c2d"; 
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=15`; 
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }; 
        axios.get(pexelsApiUrl, { headers: headers })
        .then(handlePexelsResponse); 
        console.log(pexelsApiUrl); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(); 
         
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

    function load() {
        setLoaded(true); 
        search(); 
    }
    
    if (loaded) {
        return (
            <main className="container">
                 <header >
                    <form className="header-form"
                        onSubmit={handleSubmit}>
                        <div>
                            <label id="search-text"
                            htmlFor="photo-search">
                            What do you wanna see?
                            </label>
                        </div>
                        <div>
                            <input id="photo-search" 
                            type="search" 
                            placeholder="type a word"
                            value={keyword}
                            defaultValue="Love"
                            onChange={handleKeywordChange}>
                            </input>
                        </div>
                        <div>
                            <button className="search-button" 
                            type="submit" 
                            value="Search">
                                Search 
                            </button>
                        </div>
                    </form>
                </header>
                
                <ImageGallery photos={photos} /> 
            </main>
        );
    } else {
        load(); 
        return "Loading..."; 
    }
}