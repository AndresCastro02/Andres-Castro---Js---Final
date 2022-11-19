


function creoID() {
    return parseInt(Math.random() * 100000)
}

const bebida = ["COCA COLA", "AGUA", "POKER", "HEINIKEN", "CORONA", "JUGO EN LECHE", "SUN TEA", "AGUA SABORIZADA"]
const bebidas = []


class Bebida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarBebidas() {
    let id = creoID();
    let descripcion = prompt("Ingresa el nombre de la bebida:").toUpperCase();
    let importe = parseInt(prompt("Ingresa el importe:"));
    bebidas.push(new Bebida(id, descripcion, importe));
}

function generaBebida() {
    bebidas.push(new Bebida(01, "COCA COLA",2500))
    bebidas.push(new Bebida(02, "AGUA", 1500))
    bebidas.push(new Bebida(03, "POKER", 2500))
    bebidas.push(new Bebida(04, "HEINIKEN", 3000))
    bebidas.push(new Bebida(05, "CORONA", 5000))
    bebidas.push(new Bebida(06, "JUGO EN LECHE", 3550))
    bebidas.push(new Bebida(07, "SUN TEA", 1600))
    bebidas.push(new Bebida(08, "AGUA SABORIZADA", 1800))
}


const comida = ["HAMBURGUESA CORRAL", "HAMBURGUESA SIMPLE", "HAMBURGUESA COMPLETA", "SANGUCHE LOMITO", "RAVIOLES RICOTA", "ÑOQUIS", "SPAGUETTI", "PASTA CASERA CALABAZA"];
const comidas = []


class Comida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function generaComida() {
    comidas.push(new Comida(09, "HAMBURGUESA CORRAL", 30000))
    comidas.push(new Comida(10, "HAMBURGUESA SENCILLA", 21000))
    comidas.push(new Comida(11, "PIZZA FAMILIAR", 16000))
    comidas.push(new Comida(12, "PERRO ESPECIAL", 18000))
    comidas.push(new Comida(13, "SALCHIPAPAS", 8000))
    comidas.push(new Comida(14, "AREPA", 7000))
    comidas.push(new Comida(15, "BANDEJA PAISA", 17500))
    comidas.push(new Comida(16, "TAQUEÑOS", 3000))
}

function agregarComidas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la comida:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    comidas.push(new Comida(id, descripcion, importe))
}


const postre = ["HELADO", "BRAZO DE REINA", "POSTRE 3 LECHES", "GELATINA", "TORTA DE HELADO", "PAN CON RELLENO", "CAZACA", "SIN POSTRE"]
const postres = []


class Postre {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarPostres() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del postre:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    postres.push(new Postre(id, descripcion, importe))
}

function generaPostre() {
    postres.push(new Postre(17, "HELADO", 4000))
    postres.push(new Postre(18, "BRAZO DE REINA", 5000))
    postres.push(new Postre(19, "POSTRE 3 LECHES", 6000))
    postres.push(new Postre(20, "GELATINA", 2550))
    postres.push(new Postre(21, "TORTA DE HELADO", 10500))
    postres.push(new Postre(22, "PAN CON RELLENO", 4000))
    postres.push(new Postre(23, "CAZACA", 3550))
    postres.push(new Postre(24, "SIN POSTRE", 0))
}

const salsa = ["BOLOGNESA", "CHILE CAROLINA REAPPER", "AJI AMAZONAS", "TOMATE", "MIXTA", "CHAMPIGNONES", "PIÑA", "SIN SALSA"]
const salsas = []

class Salsa {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function generaSalsa() {
    salsas.push(new Salsa(25, "BOLOGNESA", 500))
    salsas.push(new Salsa(26, "CHILE CAROLINA REAPPER", 14000))
    salsas.push(new Salsa(27, "AJI AMAZONAS", 3000))
    salsas.push(new Salsa(28, "TOMATE", 1000))
    salsas.push(new Salsa(29, "MAYONESA", 1400))
    salsas.push(new Salsa(30, "CHAMPIGNONES", 1500))
    salsas.push(new Salsa(31, "PIÑA", 1600))
    salsas.push(new Salsa(32, "SIN SALSA", 0))
}

function agregarSalsas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la salsa:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    salsas.push(new Salsa(id, descripcion, importe))
}

generaBebida()
generaComida()
generaPostre()
generaSalsa()

const resultado = [""]

function listarBebidas() {
    for (let i = 0; i < bebidas.length; i++) {
        botonListar1.innerHTML = bebida
    }
}

function listarComidas() {
    for (let i = 0; i < comidas.length; i++) {
        botonListar2.innerHTML = comida
    }
}

function listarPostres() {
    for (let i = 0; i < postres.length; i++) {
        botonListar3.innerHTML = postre
    }
}

function listarSalsas() {
    for (let i = 0; i < salsas.length; i++) {
        botonListar4.innerHTML = salsa
    }
}




const containerDiv = document.querySelector(".containerDiv");
const containerDiv2 = document.querySelector(".containerDiv2");
const containerDiv3 = document.querySelector(".containerDiv3");
const containerDiv4 = document.querySelector(".containerDiv4");

crearCards();

function crearCards() {
    bebidas.forEach((prod) => {
        containerDiv.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Comprar</button>
            </div>`;
    });

    comidas.forEach((prod) => {
        containerDiv2.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Comprar</button>
            </div>`;
    });

    postres.forEach((prod) => {
        containerDiv3.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Comprar</button>
            </div>`;
    });

    salsas.forEach((prod) => {
        containerDiv4.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Comprar</button>
            </div>`;
    });
    agregarFuncionalidad()
}


const carritoDiv = document.querySelector(".carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarFuncionalidad() {
    bebidas.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                agregarAlCarrito(prod);
            });
    });
    comidas.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                agregarAlCarrito(prod);
            });
    });
    postres.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                agregarAlCarrito(prod);
            });
    });
    salsas.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                agregarAlCarrito(prod);
            });
    });
}

function agregarAlCarrito(prod) {
    let existe = carrito.some((productoSome) => productoSome.id === prod.id);
    if (existe === false) {
        prod.cantidad = 1;
        carrito.push(prod);
    } else {
        let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
        prodFind.cantidad++;
    }
    renderizarCarrito();
    sa("PRODUCTO AGREGADO", 'yellow');

}

function renderizarCarrito() {
    carritoDiv.innerHTML = "";
    carrito.forEach((prod) => {
        carritoDiv.innerHTML += `<div class="Card">
            <h4>${prod.nombre}</h4>
            <p>CANTIDAD: ${prod.cantidad}</p>
            <p>PRECIO: ${prod.importe}</p>
            <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
            </div>`;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    borrarProducto();
    const precioTotal = document.querySelector(".precioTotal");
    totalCarrito.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.cantidad * prod.importe, 0);

}

function borrarProducto() {
    carrito.forEach((prod) => {
        document
            .querySelector(`#btn-borrar${prod.id}`)
            .addEventListener("click", () => {
                carrito = carrito.filter(
                    (productoFilter) => productoFilter.id !== prod.id
                );
                renderizarCarrito();
                sa("PRODUCTO BORRADO", 'yellow');
            });
    });
}

renderizarCarrito();


const sa = (mensaje, fondo) => {
    Swal.fire({
        text: mensaje,
        icon: 'success',
        showConfirmButton: false,
        timer: 8000,
        background: fondo,
        color: 'black',
        timerProgressBar: true,
        imageUrl: "./images/Imagen1.png",
        imageWidth: '10em',
        imageHeight: '10em',
    })
}

const sa2 = (mensaje, fondo) => {
    Swal.fire({
        text: mensaje,
        icon: 'success',
        showConfirmButton: false,
        timer: 8000,
        background: fondo,
        color: '#e3e3e3',
        timerProgressBar: true,
        imageUrl: "./images/Imagen1.png",
        imageWidth: '10em',
        imageHeight: '10em',
    })
}

const sa3 = (mensaje, fondo) => {
    Swal.fire({
        text: mensaje,
        icon: 'success',
        showConfirmButton: false,
        timer: 2600,
        background: fondo,
        color: '#F1C40F',
        timerProgressBar: true,
        imageUrl: "./images/imagen1.png",
        imageWidth: '10em',
        imageHeight: '10em',
    })
}

const button222 = document.querySelector(".button222")
button222.addEventListener("click", obtenerValorDolar)

const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";

async function obtenerValorDolar() {
    await fetch(URLDOLAR)
        .then(response => response.json())
        .then(data => {
            button222.innerHTML = `<div>
                                            <tr>
                                                <td>VALOR DOLAR: </td>
                                                <td>Compra $${data.blue.value_buy}</td>
                                                <td>Venta $${data.blue.value_sell}</td>
                                            </tr>
                                        </div>`
            sa2("VALOR DOLAR ACTUALIZADO", '#2E4053');
        })
        .catch(error => console.log(error))
}


const borrarCarrito = document.querySelector(".borrarCarrito")
borrarCarrito.addEventListener("click", borrarCarro)

function borrarCarro(){
    carritoDiv.innerHTML = `<div>0</div>`
    carrito.length=0
    localStorage.removeItem("carrito", JSON.stringify(carrito));
    const precioTotal = document.querySelector(".precioTotal");
    totalCarrito.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.cantidad * prod.importe, 0);
    sa("CARRITO VACIO", 'yellow');
}

const comprarCarrito = document.querySelector(".comprarCarrito")
comprarCarrito.addEventListener("click", comprarCarro)

function comprarCarro(){
    carritoDiv.innerHTML = `<div>0</div>`
    carrito.length=0
    localStorage.removeItem("carrito", JSON.stringify(carrito));
    const precioTotal = document.querySelector(".precioTotal");
    totalCarrito.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.cantidad * prod.importe, 0);
    sa3("RETIRE EL PEDIDO EN LA BARRA", 'white');
}