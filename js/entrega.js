// import *as dataProductos from './data.js';
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
// const preciosTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// const preciosTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(preciosTotal)
// console.dir(document.body);

//sweet alert // Alerta Procuto eliminado
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


// Nodos

let tituloPagina = document.getElementById('pageTitle')
tituloPagina.className = "pageTitle"
tituloPagina.innerHTML = "VENTA DE TORTAS"





let carrito = [];

fetch('/js/data.json')

    .then((res) => res.json())
    .then(() => {
        for (const producto of productos) {

            const container = document.getElementById('container');
            const cardCinco = document.createElement('div');
            const botonComprar = document.createElement('button');
            const botonEliminar = document.createElement('button');
            const img = `<img src="${producto.img}" alt="" class="main__card--img"</img>`;
            const precio = `<h3>$${producto.precio}</h3>`;


            cardCinco.className = "main__card card m-3";
            botonComprar.className = 'btn btn-primary m-3';
            botonComprar.id = producto.id;
            botonEliminar.className = 'btn btn-outline-danger m-3';
            botonEliminar.id = 'e' + producto.id;

            // botonEliminar.innerHTML = botonEliminar
            cardCinco.innerHTML = img;
            cardCinco.innerHTML += `<h5>${producto.producto}</h5>`;
            cardCinco.innerHTML += precio;


            botonEliminar.append('eliminar')
            botonComprar.append('comprar');
            container.append(cardCinco);
            cardCinco.append(botonComprar)
            cardCinco.append(botonEliminar)


            botonComprar.onclick = () => {

                let productoComprado = productos.find(producto => producto.id === botonComprar.id);
                productoComprado = carrito.push({ id: producto.id, producto: producto.producto, precio: producto.precio });

                console.log(carrito)


                Toast.fire({
                    icon: 'success',
                    title: 'Articulo Agregado'
                })


            }


            botonEliminar.onclick = async () => {


                let productoEliminado = carrito.findIndex(producto => 'e' + producto.id === botonEliminar.id);
                console.log(productoEliminado)
                if (productoEliminado !== -1) {
                    carrito.splice(productoEliminado, 1)



                    Toast.fire({
                        icon: 'success',
                        title: 'Articulo Eliminado'
                    })


                }
                else {

                    Toast.fire({
                        icon: 'error',
                        title: 'Articulo Inexistente'
                    })

                }


                localStorage.setItem("productos", JSON.stringify(carrito))
                console.log(localStorage.getItem('productos'))





                console.log(carrito)




            }

        }

    })




async function traerProductos() {
    const request = await fetch('/js/data.json');
    const response = await request.json();
    const productos = response.data


}

traerProductos()

function mostrarProductos(productos) {

}






// for (const producto of productos) {

//     const container = document.getElementById('container');
//     const cardCinco = document.createElement('div');
//     const botonComprar = document.createElement('button');
//     const botonEliminar = document.createElement('button');
//     const img = `<img src="${producto.img}" alt="" class="main__card--img"</img>`;
//     const precio = `<h3>$${producto.precio}</h3>`;


//     cardCinco.className = "main__card card m-3";
//     botonComprar.className = 'btn btn-primary m-3';
//     botonComprar.id = producto.id;
//     botonEliminar.className = 'btn btn-outline-danger m-3';
//     botonEliminar.id = 'e' + producto.id;

//     // botonEliminar.innerHTML = botonEliminar
//     cardCinco.innerHTML = img;
//     cardCinco.innerHTML += `<h5>${producto.producto}</h5>`;
//     cardCinco.innerHTML += precio;


//     botonEliminar.append('eliminar')
//     botonComprar.append('comprar');
//     container.append(cardCinco);
//     cardCinco.append(botonComprar)
//     cardCinco.append(botonEliminar)


//     botonComprar.onclick = () => {

//         let productoComprado = productos.find(producto => producto.id === botonComprar.id);
//         productoComprado = carrito.push({ id: producto.id, producto: producto.producto, precio: producto.precio });

//         console.log(carrito)


//         Toast.fire({
//             icon: 'success',
//             title: 'Articulo Agregado'
//         })


//     }


//     botonEliminar.onclick = async () => {


//         let productoEliminado = carrito.findIndex(producto => 'e' + producto.id === botonEliminar.id);
//         console.log(productoEliminado)
//         if (productoEliminado !== -1) {
//             carrito.splice(productoEliminado, 1)



//             Toast.fire({
//                 icon: 'success',
//                 title: 'Articulo Eliminado'
//             })


//         }
//         else {

//             Toast.fire({
//                 icon: 'error',
//                 title: 'Articulo Inexistente'
//             })

//         }


//         localStorage.setItem("productos", JSON.stringify(carrito))
//         console.log(localStorage.getItem('productos'))





//         console.log(carrito)




//     }

// }

const botonTotal = document.getElementById('button')
botonTotal.className = 'btn btn-outline-success m-4 d-flex justify-content-center';
botonTotal.innerHTML = 'Mostrar Pedido';





const tableBody = document.querySelector("#table-contenedor");

botonTotal.onclick = () => {

    carrito.map(producto => {
        // console.log(producto)
        return { id: producto.id, producto: producto.producto, precio: producto.precio }


    })
    console.log('carrito: ', carrito)

    tableBody.innerHTML = [];


    carrito.forEach((producto) => {
        const tr = document.createElement("tr");
        tr.className = "table-primary";
        tr.innerHTML = `
        <td >${producto.producto}</td>
        <td >$${producto.precio}</td>
        `;
        tableBody.appendChild(tr);

    });

    Swal.fire(
        'Confirmado',
        'En pantalla tendras los productos',
        'success'
    )
}


const botonConfirmar = document.getElementById('btnConfirmar')
botonConfirmar.className += 'btn btn-outline-success m-4 d-flex justify-content-center';



let url = 'https://jsonplaceholder.typicode.com/posts';
let data = carrito;

botonConfirmar.onclick = () => {
    if (data.length > 0) {
        postAPI()

    }
    else {
        Toast.fire({
            icon: 'error',
            title: 'No tienes Productos en el Carrito'

        })
    }

}


const postAPI = async () => fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => {
    res.json()
    console.log('Success:', res)
    Toast.fire({
        icon: 'success',
        title: 'Carrito Confirmado'

    })
    console.log(data)
    console.log('https://jsonplaceholder.typicode.com/posts')

})
    .catch(error => {
        console.error('Error:', error)
        Toast.fire({
            icon: 'error',
            title: 'Internal Server Error'

        })
    })
