//------------------------------------------------------------- Arrays-------------------------------------------------------
class Producto {
    constructor (nombre,precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}
        const productos = [];
        productos.push(new Producto("Planner mensual",1500));
        productos.push(new Producto("Planner semanal",2500));
        productos.push(new Producto("Planner intensivo",3500));
        productos.push(new Producto("Stickers pastel",750));
        productos.push(new Producto("Washi tape pack",900));

const carrito =[]

// -------------------------------------------------------Functions------------------------------------------------------

function saludar () {
    alert ("Te damos la bienvenida a Cora Misura Digital Stationery, "+usuario)
}
function compra () {
    
    for (const compra of productos) {
        const decision = parseInt (prompt ("El producto es "+compra.nombre+" y su precio es "+compra.precio+"¿Cuántos ítems de este producto deseás llevar?"))
        const totalProducto = (compra.precio * decision)
        carrito.push(totalProducto)
      }
    
    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento, 0)
    const finalizarCompra = parseInt(prompt("El total de tu compra es "+total+". ¿Deseás llevarlo? 1. Sí. 2. No"))
        if (finalizarCompra ===1) {
            alert ("Muchas gracias por tu compra, "+usuario+". Esperamos verte pronto de nuevo por acá.")
            } else {
            alert ("Muchas gracias por pasar, "+usuario+" Esperamos verte por acá de nuevo muy pronto.")      
            }
}

// -------------------------------------------------------Proceso ------------------------------------------------------
let usuario = prompt ("¡Hola! ¿Cómo te llamás?")

saludar ();

let iniciarCompra = parseInt (prompt("¿Deseás iniciar una compra? 1.Sí. 2.No"))

if (iniciarCompra === 1) {
    compra ();  
} else {
    alert ("Muchas gracias por pasar, "+usuario+". Esperamos verte por acá de nuevo muy pronto.")
}

//------------------------------------------------------------- Búsqueda y filtrado-------------------------------------------------------
const pedirProducto = (prompt("Introducí un producto"))
const resultadoPrecio = productos.find((el) => el.nombre === pedirProducto)
alert ("El valor es $"+resultadoPrecio.precio)
console.log(resultadoPrecio)


const pedirMaximo = parseInt(prompt("Ingresá un monto máximo"))
const resultadoMaximo = productos.filter((el) => el.precio < pedirMaximo)
console.log(resultadoMaximo)