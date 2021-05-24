// 1. Crear una Promesa que resuelva ( resolve() ) con el nombre de ustedes.

const myFirstPromise = new Promise(function(resolve, reject) {
    resolve("It's Barbara!");
 });

 console.log(myFirstPromise); 

// 2. Crear una Promesa que resuelva con el nombre de ustedes luego de 5 segundos (usar setTimeout)

const mySecondPromise = new Promise(function(resolve, reject) {
    setTimeout(afterFiveSeconds = () => {
        resolve("It's Barbara again!");
      }, 5000)
 });

 mySecondPromise.then((resolve) => console.log(resolve));
 
// 3. Crear una funcion esNumeroPar que reciba un numero, verifique si es par o no, y retorne una promesa, 
// la promesa debe resolver con true o false segun la verificacion.

const esNumeroPar = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero % 2  == 0) {
            resolve("Number is EVEN!");  
        } else {
            reject("Number is odd. :-("); 
        }
    })
 }

 console.log(esNumeroPar(4)); 

// 4. A la funcion anterior, modificarla para que la promesa se rechaze ( reject() ) con el error: 
// 'Valor Invalido' si el valor enviado por parametro no es un numero.

const esNumero = (numero) => {
    return new Promise((resolve, reject) => {
        if (typeof(numero) === "number") {
            resolve("It's a Number!");  
        } else {
            reject("Valor Invalido!"); 
        }
    })
 }

 console.log(esNumero(7));

// 5. Crear un arreglo de 10 objetos productos, con la forma { nombre, precio, estaVendido }, 
// crear una funcion filtrarPorPrecio que reciba un precio (numero) y retorne una promesa, 
// la promesa debe filtrar el arreglo de productos y crear uno nuevo con  
// los productos cuyos precios sean iguales o menores que el numero recibido,   
// la promesa debe resolver, luego de 5 segundos, con el arreglo de productos filtrados. 
// En este ejercicio usar async/await al momento de consumir la funcion

const products = [
    {
        nombre: "Tree of Life ring", 
        precio: 5.99, 
        estaVendido: false
    },
    {
        nombre: "Mousepad", 
        precio: 4.50, 
        estaVendido: true  
    },
    {
        nombre: "iPhone X", 
        precio: 600, 
        estaVendido: true 
    },
    {
        nombre: "bluetooth keyboard", 
        precio: 12.99, 
        estaVendido: true 
    },
    {
        nombre: "New York T-shirt", 
        precio: 10, 
        estaVendido: false 
    },
    {
        nombre: "Neoprene Water Bottle", 
        precio: 5.25, 
        estaVendido: false 
    },
    {
        nombre: "Fannie Pack", 
        precio: 3.25, 
        estaVendido: true 
    },
    {
        nombre: "N64", 
        precio: 101, 
        estaVendido: false 
    },
    {
        nombre: "PS5", 
        precio: 650, 
        estaVendido: false 
    },
    {
        nombre: "Ukelele", 
        precio: 73.50, 
        estaVendido: false 
    } 
]; 



const filtrarPorPrecio = async (numero) => {

    const bougeeMe = new Promise((resolve, reject) => {
    setTimeout(afterFiveSeconds = () => {
            const noBougee = products.filter(({precio}) => {
                return precio <= numero; 
            });
            resolve(noBougee); 
        }, 5000)
    }); 

    let result = await bougeeMe; 
    return result;  
}

filtrarPorPrecio(75).then(result => console.log(result)); 