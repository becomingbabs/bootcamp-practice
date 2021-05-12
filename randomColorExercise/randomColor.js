
function changeBr() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    console.log(randomColor); 
    colorId.innerHTML = "#" + randomColor;
}


document.body.addEventListener('click', changeBr, true); 