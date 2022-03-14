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

// const contenedorTienda = document.getElementById('contenedorTienda');
// const contenedorCarrito = document.getElementById('contenedorCarrito');
// const carrito = []

