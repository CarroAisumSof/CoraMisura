//------------------------------------------------------------- Arrays-------------------------------------------------------
        const carrito =[];
        const valores =[];
//------------------------------------------------------------- CARDS -------------------------------------------------------

const containerCards = document.getElementById ("containerCards");

fetch("../productos/productos.JSON")
      .then((res) => res.json())
      .then ( (data) => {
          data.forEach((productos) => {
            const productoCard = document.createElement("div");
            productoCard.innerHTML =`
                <div class="col mb-4">
                <div class="card h-100 mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                <h4 class="my-0 fw-normal mainFont" id="producto1">${productos.nombre}</h4>
                </div>
                <div class= "mt-4">
                <img src="${productos.thumbnail}" width="90%" height="auto"></img>
                </div>
                <div class="card-body">
                <h1 class="card-title pricing-card-title mainFont" id="producto1Precio">$ ${productos.precio}</h1>
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
          localStorage.setItem ("productos" , JSON.stringify (data))
        })


let productos = JSON.parse(localStorage.getItem("productos"))
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

//------------------------------------------------------------- CARRITO ------------------------------------------------------------------------
function actualizarCarrito() {
    let actualizar = '';
    carrito.forEach((element) => {
        actualizar += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">${element.nombre}</h6>
          <small class="text-muted">Cantidad: ${element.cantidad}</small>
        </div>
        <span class="text-muted">$${element.precio*element.cantidad}</span>
        <button type="button" class="w-20 btn btn-outline-primary" onClick = "eliminarDelCarrito(${element.id})">x</button>
        </li>`;
    });
    contenedorCarrito.innerHTML = actualizar;
    totalFinal();

  }

//------------------------------------------------------------- EVENTO - ELIMINAR DEL CARRITO -------------------------------------------------------
const eliminarDelCarrito = (id) => {
  const element = carrito.find((element) => element.id === id);
  carrito.splice(carrito.indexOf(element), 1);
  actualizarCarrito();
};

//--------------------------------------------------------------------- TOTAL COMPRA -------------------------------------------------------

const totalFinal = () => {
    let total = 0
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = "Total $"+total;
};

//------------------------------------------------------------- EVENTO - VACIAR CARRITO -------------------------------------------------------------
const vaciarCarrito = document.getElementById ("vaciarCarrito")
vaciarCarrito.addEventListener ("click", () => {
  carrito.length = 0;
  actualizarCarrito();
})

//------------------------------------------------------------- COMPLETAR FORMULARIO ------------------------------------------------------------------------

const realizarCompra = document.getElementById ("realizarCompra")
realizarCompra.addEventListener ("click",() => {
  const formulario = document.getElementById ("formulario")
  formulario.innerHTML = `
  <div class="col-2 col-md-3"></div>
  <div class="col-10 col-lg-6">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary mainFont">Datos de envío</span>
      <span class="badge bg-primary rounded-pill"></span>
    </h4>
    <div class="mb-3">
      <label for="usuarioNombre" class="form-label">Nombre</label>
      <input class="form-control" id="usuarioNombre">
    </div>
    <div class="mb-3">
    <label for="usuarioApellido" class="form-label">Apellido</label>
    <input class="form-control" id="usuarioApellido">
    </div>
    <div class="mb-3">
      <label for="usuarioEmail" class="form-label">Email</label>
      <input class="form-control" id="usuarioEmail">
      <div id="emailHelp" class="form-text">Asegurate de que el email sea el correcto ya que es la dirección de email a la que enviaremos el contenido.</div>
    </div>
    <div class="mb-3">
    <label for="usuarioEmail2" class="form-label">Repetir email</label>
    <input class="form-control" id="usuarioEmail2">
    </div>
    <button type="button"class="btn btn-primary" id="botonEnviar">Enviar</button>
  </div>
  `;

  let botonEnviar = document.getElementById ("botonEnviar")
  botonEnviar.addEventListener ('click',() => {
          const datosUsuario = {
          nombre: usuarioNombre.value,
          apellido: usuarioApellido.value,
          email: usuarioEmail.value,
          emailRepetir: usuarioEmail2.value
          }
        // ------------------------------------------------------VALIDACION DE EMAIL-------------------------------------------------------------
        const validacion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailValidacion = ("")
        if (usuarioEmail.value.match(validacion)) {
          emailValidacion = true;
        } else {
          emailValidacion = false;
        }
        // ------------------------------------------------------REPETICION DE EMAIL-------------------------------------------------------------
        let repetirEmail =("")
        if (usuarioEmail.value === usuarioEmail2.value) {
          repetirEmail = true;
        } else {
          repetirEmail = false;
        }
        // ------------------------------------------------------PROCESO DE FORMULARIO-------------------------------------------------------------
        if (emailValidacion === false) {
          Swal.fire(
            'El email no es válido',
            'Por favor verificá tu email.',
             'error')
        } else if (repetirEmail === false){
          Swal.fire(
            'El email no coincide',
            'Por favor verificá tu email.',
            'error'
            )
        } else if (usuarioNombre.value.length === 0) {
            Swal.fire(
              'El formulario está incompleto',
              'Por favor asegurate de completar todos los campos',
              'error'
              )
        }else if (usuarioApellido.value.length === 0) {
          Swal.fire(
            'El formulario está incompleto',
            'Por favor asegurate de que todos los campos estén completos.',
            'error'
            ) 
          } else {
          localStorage.setItem ("Datos" , JSON.stringify (datosUsuario))
          mainDiv.innerHTML = `
          <div class="row d-flex justify-content-between align-items-center mb-3">
          <div class="col-1"></div>
          <div class=" col-10">
          <p class="text-primary">¡Gracias por tu compra, ${JSON.parse(localStorage.getItem("Datos")).nombre} ${JSON.parse(localStorage.getItem("Datos")).apellido}!</p>
          <p class="text-primary">En las próximas horas te estará llegando la información para realizar el pago a ${JSON.parse(localStorage.getItem("Datos")).email}. Tenés 48hs para realizar el envío del comprobante.</p>
          <p class="text-primary">Una vez que recibamos el comprobante enviaremos el contenido digital a la dirección de email ingresada en el formulario.</p>
          </div>
          </div>
            `
        }
        console.log (datosUsuario)
      })
  })