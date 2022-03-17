const productos = [
    { id: 0, tipo: "simple", producto: "chocotorta", precio: 450, img: "img/chocotorta.jpg" },
    { id: 1, tipo: "simple", producto: "cheesecake", precio: 550, img: "img/cheesecake.jpg" },
    { id: 2, tipo: "alta", producto: "matilda", precio: 625, img: "img/matilda.jpg" },
    { id: 3, tipo: "alta", producto: "oreo", precio: 600, img: "img/oreo.jpg" },
];
function consultarPrecio() {
    let pedido = prompt("Que producto desea consultar? `chocotorta``cheesecake``matilda``oreo`")
    if (pedido == "oreo") {
        alert(productos[3].precio);
    }
    else {
        if (pedido == "matilda") {
            alert(productos[2].precio);
        }
        else {
            if (pedido == "cheesecake") {
                alert(productos[1].precio);
            }
            else {
                if (pedido == "chocotorta") {
                    alert(productos[0].precio);
                }
            }
        }
    }
}

// consultarPrecio();


const productosAgregados = [];

const suma = (array) => {
    return array.reduce((acumulador, el) => acumulador + el.precio, 0);
}

const comprar = () => {
    let envio = prompt("Que producto desea comprar? inrese el `nombre` o `terminar` ");
    if (envio === "terminar") {

        alert(`Precio Final ${suma(productosAgregados)} Pesos`);
    } else {
        const productoSeleccionado = productos.find(productos => productos.producto === envio);
        productosAgregados.push(productoSeleccionado);
        console.log(productoSeleccionado);
        comprar()
    }
}

// comprar();


const tortaItem = document.getElementsByClassName('main__card--img')
// console.log(tortaItem)

const buscarProducto = productos.find(producto => producto.producto === "chocotorta");
// console.log(buscarProducto);

const buscarSimple = productos.filter(producto => producto.tipo === "simple");
const buscarAlta = productos.filter(producto => producto.tipo === "alta");

const productosConIva = productos.map(producto => {
    return { tipo: producto.tipo, producto: producto.producto, precio: producto.precio + (producto.precio * 1.21) }
})



const preciosTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);

// console.dir(document.body);

const card1 = document.getElementById('card1');
// card1.innerHTML = 'chocotorta'

// console.log(card1)

const cards = document.getElementsByClassName('main__card')
// console.log(cards)

let tituloPagina = document.getElementById('pageTitle')
tituloPagina.className = "pageTitle"
tituloPagina.innerHTML = "VENTA DE TORTAS"

// Nodos

// const contenedorCarrito = document.getElementById('contenedorCarrito');

const carrito = [];

for (const producto of productos) {

    const container = document.getElementById('container');
    const cardCinco = document.createElement('div');
    const botonComprar = document.createElement('button');
    const img = `<img src="${producto.img}" alt="" class="main__card--img"</img>`;
    const precio = `<h3>$${producto.precio}</h3>`;


    botonComprar.className = 'btn btn-primary';
    botonComprar.id = producto.id;
    botonComprar.append('comprar');

    cardCinco.className = "main__card card";
    cardCinco.innerHTML = img;
    cardCinco.innerHTML += `<h5>${producto.producto}</h5>`;
    cardCinco.innerHTML += precio;
    container.append(cardCinco);
    cardCinco.append(botonComprar)


    botonComprar.onclick = () => {
        const productoComprado = productos.find(producto => producto.id === botonComprar.id);
        carrito.push({ producto: productoComprado.producto, precio: productoComprado.precio })
        console.log(productoComprado)
    }

}
