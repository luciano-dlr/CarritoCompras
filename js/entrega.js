const productos = [
    { tipo: "simple", producto: "chocotorta", precio: 450 },
    { tipo: "simple", producto: "cheesecake", precio: 550 },
    { tipo: "alta", producto: "matilda", precio: 625 },
    { tipo: "alta", producto: "oreo", precio: 600 },
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
tituloPagina.innerHTML = "VENTA DE TORTAS"

// Nodos

for (const producto of productos) {

    const container = document.getElementById('container');
    const cardCinco = document.createElement('div');
    cardCinco.className = "main__card card"
    cardCinco.innerHTML = "<h5> nueva torta </h5>";
    container.appendChild(cardCinco)
    console.log(cardCinco)

}








// const contenedorTienda = document.getElementById('contenedorTienda');
// const contenedorCarrito = document.getElementById('contenedorCarrito');
// const carrito = []
// for (const producto of productos) {

//     //Creamos los elementos HTML
//     const divProducto = document.createElement('div');
//     const imgProducto = document.createElement('img');
//     const nombreProducto = document.createElement('h2');
//     const precioProducto = document.createElement('h3');
//     const botonComprar = document.createElement('button');

//     //Les agregamos los estilos asignandoles clases de css
//     divProducto.className = 'card';
//     imgProducto.className = 'card-img-top';
//     nombreProducto.className = 'nombre-producto';
//     precioProducto.className = 'card-precio';
//     botonComprar.className = 'btn btn-primary';

//     //Le agregamos el contenido a los elementos creados y el id a los que vamos a necesitar despues
//     imgProducto.src = producto.img;
//     nombreProducto.append(producto.modelo);
//     precioProducto.append(`$${producto.precio}`);
//     botonComprar.append('Comprar');
//     botonComprar.id = `${producto.id}`;

//     botonComprar.onclick = () => {
//         const productoComprado = productos.find(producto => producto.id === botonComprar.id);
//         carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio })
//     }
//     //Agregamos los elementos creados a su elemento contenedor que es divProducto
//     divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
//     //Le agregamos al contenedor de la tienda cada uno de los divProducto
//     contenedorTienda.append(divProducto);

// }

// const mostrarCarrito = () => {

//     for (const producto of carrito) {
//         const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
//         const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
//         contenedorCarrito.innerHTML += nombreProducto
//         contenedorCarrito.innerHTML += precioProducto
//     }

//     const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
//     contenedorCarrito.append(`Total Compra :  ${total}`)

// }

// let botonCarrito = document.getElementById("btnCarrito")
// botonCarrito.onclick = mostrarCarrito;

