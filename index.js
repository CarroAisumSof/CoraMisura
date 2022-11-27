//------------------------------------------------------------- Arrays-------------------------------------------------------
class Producto {
    constructor (nombre,precio,thumbnail,id,cantidad,totalProducto) {
        this.nombre = nombre;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.id = id;
        this.cantidad =cantidad;
        this.totalProducto = totalProducto;
    }
}
        const productos = [];
        productos.push(new Producto("Planner mensual",1500,"./images/photo-1612599316791-451087c7fe15.avif",1,1,0));
        productos.push(new Producto("Planner semanal",2500,"./images/photo-1612599316791-451087c7fe15.avif",2,1,0));
        productos.push(new Producto("Planner intensivo",3500,"./images/photo-1612599316791-451087c7fe15.avif",3,1,0));
        productos.push(new Producto("Stickers pastel",750,"./images/photo-1612599316791-451087c7fe15.avif",4,1,0));
        productos.push(new Producto("Washi tape pack",900,"./images/photo-1612599316791-451087c7fe15.avif",5,1,0));

        const carrito =[];
        const valores =[];
//------------------------------------------------------------- CARDS -------------------------------------------------------

const containerCards = document.getElementById ("containerCards");

productos.forEach((productos) => {
    const productoCard = document.createElement("div");
    productoCard.innerHTML =`
        <div class="col mb-4">
        <div class="card h-100 mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
        <h4 class="my-0 fw-normal" id="producto1">${productos.nombre}</h4>
        </div>
        <div class= "mt-4">
        <img src="${productos.thumbnail}" width="90%" height="auto"></img>
        </div>
        <div class="card-body">
        <h1 class="card-title pricing-card-title" id="producto1Precio">$ ${productos.precio}</h1>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary" id="boton${productos.id}">Agregar al carrito</button>
        </div>
        </div>
        </div>`;

        containerCards.append(productoCard)

        const boton = document.getElementById(`boton${productos.id}`);
        boton.addEventListener('click', () => {
          agregarAlCarrito(productos.id);
        });
})

const contenedorCarrito = document.getElementById('carrito');
//------------------------------------------------------------- EVENTO - AGREGAR AL CARRITO -------------------------------------------------------

const agregarAlCarrito = (id) => {
    const producto = productos.find((productos) => productos.id === id);
    const productoEnCarrito = carrito.find((productos) => productos.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
  };
  console.log (carrito)
  console.log(carrito.nombre)

//------------------------------------------------------------- CARRITO ------------------------------------------------------------------------
function actualizarCarrito() {
    let actualizar = '';
    carrito.forEach((carrito) => {
        actualizar += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">${carrito.nombre}</h6>
          <small class="text-muted">Cantidad: ${carrito.cantidad}</small>
        </div>
        <span class="text-muted">$${carrito.precio*carrito.cantidad}</span>
        </li>`;
    });
    contenedorCarrito.innerHTML = actualizar;
    totalFinal();

}

const totalFinal = () => {
    let total = 0
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = "Total $"+total;
};


//------------------------------------------------------------- FINALIZAR COMPRA ------------------------------------------------------------------------

let nombreUsuario = document.getElementById ("nombreUsuario")
let direccionUsuario = document.getElementById ("direccionUsuario")
let emailUsuario = document.getElementById ("emailUsuario")

let botonEnviar = document.getElementById ("botonEnviar")
botonEnviar.addEventListener ('click',() => {
    const datosUsuario = {
        nombre: usuarioNombre.value,
        direccion: usuarioDireccion.value,
        email: usuarioEmail.value,
    }
    console.log(datosUsuario)
    localStorage.setItem ("Datos" , JSON.stringify (datosUsuario))
    let thankYou = document.createElement ("div")
    thankYou.innerHTML = `
        <h5 class="d-flex justify-content-between align-items-center mb-3">
        <p class="text-primary">¡Gracias por tu compra, ${JSON.parse(localStorage.getItem("Datos")).nombre}!</p>
        <p class="text-primary"> El comprobante te va a estar llegando en las próximas horas a ${JSON.parse(localStorage.getItem("Datos")).email}!</p>
        </h5>
    `
    const finalizarCompraDiv = document.getElementById ("finalizarCompra");
    finalizarCompraDiv.append(thankYou)
})