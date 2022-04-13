
// TOAST (ALERT)

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


// TITULO
let tituloPagina = document.getElementById('pageTitle')
tituloPagina.className = "pageTitle"
tituloPagina.innerHTML = "VENTA DE TORTAS"

// CARRITO VACIO 
let carrito = [];

// GET POR FETCH A JSON
fetch('/js/data.json')
    //FOR OF DE PRODUCTOS POR PROMESA UTILIZANDO EL ARCHIVO JSON 
    .then((res) => res.json())
    .then((productos) => {
        //FOR OF DE PRODUCTOS
        for (const producto of productos) {

            //NODOS
            const container = document.getElementById('container');
            const cardCinco = document.createElement('div');
            const botonComprar = document.createElement('button');
            const botonEliminar = document.createElement('button');
            const img = `<img src="${producto.img}" alt="" class="main__card--img"</img>`;
            const precio = `<h3>$${producto.precio}</h3>`;

            //NODOS CLASS
            cardCinco.className = "main__card card m-3";
            botonComprar.className = 'btn btn-primary m-3';
            botonComprar.id = producto.id;
            botonEliminar.className = 'btn btn-outline-danger m-3';
            botonEliminar.id = 'e' + producto.id;

            //NODOS .INERHTML
            cardCinco.innerHTML = img;
            cardCinco.innerHTML += `<h5>${producto.producto}</h5>`;
            cardCinco.innerHTML += precio;

            //NODOS APPEND
            botonEliminar.append('eliminar')
            botonComprar.append('comprar');
            container.append(cardCinco);
            cardCinco.append(botonComprar)
            cardCinco.append(botonEliminar)

            //BOTON COMPRAR
            botonComprar.onclick = () => {
                //FIND DE PRODUCTO COMPRADO SEGUN ID DE BOTON Y NODO
                let productoComprado = productos.find(producto => producto.id === botonComprar.id);
                //PUSH A CARRITO SEGUN LO COMPRADO
                productoComprado = carrito.push({ id: producto.id, producto: producto.producto, precio: producto.precio });

                console.log(carrito)

                //TOAST (ALERT)
                Toast.fire({
                    icon: 'success',
                    title: 'Articulo Agregado'
                })
            }

            //BOTON ELIMINAR
            botonEliminar.onclick = async () => {

                //FIND DE PRODUCTO ELIMINADO SEGUN ID DE BOTON Y NODO
                let productoEliminado = carrito.findIndex(producto => 'e' + producto.id === botonEliminar.id);
                console.log(productoEliminado)

                //SI PORDUCTO ELIMINADO ES DIFERENTE DE -1 POR METODO PSLICE, PRODUCTO ELIMINADO DEL CARRITO
                if (productoEliminado !== -1) {
                    carrito.splice(productoEliminado, 1)
                    //TOAST (ALERT)
                    Toast.fire({
                        icon: 'success',
                        title: 'Articulo Eliminado'
                    })

                }
                //SI ENCUENTRA -1,NO BORRA PRODUCTO, SALTA UN TOAST (ALERT)
                else {
                    Toast.fire({
                        icon: 'error',
                        title: 'Articulo Inexistente'
                    })
                }
                //LOCALSTORAGE DE CARRITO 
                localStorage.setItem("productos", JSON.stringify(carrito))
                console.log(localStorage.getItem('productos'))
                console.log(carrito)
            }
        }
    })

//BOTON MOSTRAR PEDIDO
const botonTotal = document.getElementById('button')
botonTotal.className = 'btn btn-outline-success m-4 d-flex justify-content-center';
botonTotal.innerHTML = 'Mostrar Pedido';

// CREANDO LA TABLA PARA MOSTRAR PEDIDO
const tableBody = document.querySelector("#table-contenedor");

//BOTON MOSTRAR PEDIDO (EVENTO.ONCLICK)
botonTotal.onclick = () => {

    //MAP DE CARRITO PARA MOSTRAR EN TABLA LOS PRODUCTOS Y SUS PRECIOS
    carrito.map(producto => {
        return { id: producto.id, producto: producto.producto, precio: producto.precio }
    })
    console.log('carrito: ', carrito)

    //FUNCION PRECIO TOTAL 
    const sumaPrecio = (arr) => {
        return arr.reduce((acc, el) => acc + el.precio, 0);
    }

    //NODO PRECIO FINAL
    const precioFinal = document.getElementById('precioFinal')
    precioFinal.innerHTML = `$${sumaPrecio(carrito)}`
    console.log(`$${sumaPrecio(carrito)}`, 'precio actual del carrito')

    //VALOR INICIAL DE LA TABLA POR INNER.HTML
    tableBody.innerHTML = [];

    //.FOREACH DE CARRITO PARA LLENAR LA TABLA CON PRODUCTO Y PRECIO 
    carrito.forEach((producto) => {
        const tr = document.createElement("tr");
        tr.className = "table-primary";
        tr.innerHTML = `
        <td >${producto.producto}</td>
        <td >$${producto.precio}</td>
        `;
        tableBody.appendChild(tr);

    });
    // TOAST (ALERT)
    Swal.fire(
        'Confirmado',
        'En pantalla tendras los productos',
        'success'
    )
}

//BOTON CONFIRMAR
const botonConfirmar = document.getElementById('btnConfirmar')
botonConfirmar.className += 'btn btn-outline-success m-4 d-flex justify-content-center';

//DIRECCION DE LA API PARA POST
let url = 'https://jsonplaceholder.typicode.com/posts';

//DATA DE POST
let data = carrito;

//BOTON CONFIRMAR (EVENTO.ONCLICK)
botonConfirmar.onclick = () => {
    //SI NO TIENE VALOR DATA SALTA AL ELSE
    if (data.length > 0) {
        // FUNCION POST 
        postAPI()

    }
    else {
        Toast.fire({
            icon: 'error',
            title: 'No tienes Productos en el Carrito'
        })
    }
}

// FUNCION POST DE FECH POR PROMESA
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
    console.log('https://jsonplaceholder.typicode.com/posts', 'carrito enviado')

})
    .catch(error => {
        console.error('Error:', error)
        Toast.fire({
            icon: 'error',
            title: 'Internal Server Error'

        })
    })