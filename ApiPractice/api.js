// Api constants
const accessKey = 'alnv-wznrHrmqB2BrkKqwNsBOvaWmxf5mGfnd-mToD4';
const api = 'https://api.unsplash.com';

// Global state
let allowRequest = true;
let page = 1;

// Elements
const gallery = document.getElementById('gallery');
const button = document.querySelector(".search-button"); 

const renderImage = (photo) => {
    const newImage = document.createElement('img');
    newImage.className = 'imagen';
    newImage.src = photo.urls.regular;
    gallery.appendChild(newImage);
}

const fetchImages = (keyword) => {
    if(allowRequest) {
        // Bloqueamos la request para que no siga pidiendo datos 
        // si el usuario sigue scrolleando mientra esperamos la respuesta:
        allowRequest = false;

        // Pedimos los datos
        fetch(`${api}/search/photos?client_id=${accessKey}&page=${page}&per_page=30&query=${keyword}`)
        .then(response => response.json())
        .then(data => {
            // Siguiente página:
            page++;

            // Ya obtuvimos respuesta, desbloqueamos la request:
            allowRequest = true;
            
            // Renderizamos cada imagen:
            data.forEach(element => {
                renderImage(element);
            });
        })
        .catch(e => console.log(e));
    }
}

const wordEntered = (event) => {
    event.preventDefault();  
    let keyword = document.querySelector("#photo-search").value;  

  fetchImages(keyword);
}

const scrolled = (e) => {
    const myDiv = document.getElementById('gallery');
    if (myDiv.offsetHeight + myDiv.scrollTop + 100 >= myDiv.scrollHeight) {
        fetchImages();
    }
}

gallery.addEventListener('scroll', scrolled);
button.addEventListener("click", wordEntered); 

// First page
fetchImages();