//  Arrays
const productos = [
    { id: 0, tipo: "simple", producto: "chocotorta", precio: 450, img: "img/chocotorta.jpg" },
    { id: 1, tipo: "simple", producto: "cheesecake", precio: 550, img: "img/cheesecake.jpg" },
    { id: 2, tipo: "alta", producto: "matilda", precio: 625, img: "img/matilda.jpg" },
    { id: 3, tipo: "alta", producto: "oreo", precio: 600, img: "img/oreo.jpg" },
];

//  Funcion Consulta precio por prompt
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


//   Traer imagenes por class
const tortaItem = document.getElementsByClassName('main__card--img')
// console.log(tortaItem)

//  Buscar un Producto especifico
const buscarProducto = productos.find(producto => producto.producto === "chocotorta");
// console.log(buscarProducto);

// filtro por Categorias de tortas
const buscarSimple = productos.filter(producto => producto.tipo === "simple");
const buscarAlta = productos.filter(producto => producto.tipo === "alta");

// Traer todos los precios con iva 
const productosConIva = productos.map(producto => {
    return { tipo: producto.tipo, producto: producto.producto, precio: producto.precio + (producto.precio * 1.21) }
})


// Precio total de todos los articulos en venta
const preciosTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.dir(document.body);


// Nodos

let tituloPagina = document.getElementById('pageTitle')
tituloPagina.className = "pageTitle"
tituloPagina.innerHTML = "VENTA DE TORTAS"



// const carrito = [];

const carrito = [];
for (const producto of productos) {

    const container = document.getElementById('container');
    const cardCinco = document.createElement('div');
    const botonComprar = document.createElement('button');
    const img = `<img src="${producto.img}" alt="" class="main__card--img"</img>`;
    const precio = `<h3>$${producto.precio}</h3>`;
    const carritoLista = document.getElementById('container2')

    cardCinco.className = "main__card card";
    botonComprar.className = 'btn btn-primary';
    botonComprar.id = producto.id;

    cardCinco.innerHTML = img;
    cardCinco.innerHTML += `<h5>${producto.producto}</h5>`;
    cardCinco.innerHTML += precio;


    botonComprar.append('comprar');
    container.append(cardCinco);
    cardCinco.append(botonComprar)


    botonComprar.onclick = () => {
        let productoComprado = productos.find(producto => producto.id === botonComprar.id);
        productoComprado = carrito.push({ producto: producto.producto, precio: producto.precio });
        // productoComprado = carrito.push({ producto: productoComprado.producto, precio: productoComprado.precio });

        // carritoLista.append(`${producto.producto}$${producto.precio}.........`)
        console.log(carrito)
    }

}

const totales = carrito


const botonTotal = document.getElementById('button')

botonTotal.className = 'btn btn-outline-danger ';
botonTotal.innerHTML = 'Mostrar Total';
botonTotal.onclick = () => {
    totales.map(producto => {
        // console.log(producto)
        return { producto: producto.producto, precio: producto.precio }

    })
    console.log(totales, 'totales')
}








