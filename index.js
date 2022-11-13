// -------------------------------------------------------Bienvenida------------------------------------------------------

let usuario = prompt ("¡Hola! ¿Cómo te llamás?")

alert ("Te damos la bienvenida a Cora Misura Digital Stationery, "+usuario)

let iniciarCompra = parseInt (prompt("¿Deseás iniciar una compra? 1.Sí. 2.No"))


// -------------------------------------------------------Compra ------------------------------------------------------
if (iniciarCompra === 1) {
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
    
    const carrito =[];
    
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
} else {
    alert ("Muchas gracias por pasar, "+usuario+" Esperamos verte por acá de nuevo muy pronto.")
}