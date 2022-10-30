// -------------------------------------------------------Función de la compra

function laCompra () {
    let producto = parseInt(prompt("Escogé un Producto: 1.Planner mensual 2.Planner semanal 3.Planner intensivo 4.Set de stickers pastel 5.Set de stickers fotográficos 6.Washi tape pack 0.Ninguno"
    )
  )
  let totalCompra = 0
  let seguirComprando = true
  let decision

  while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 1500
    } else if (producto === 2) {
        totalCompra = totalCompra + 2500
    } else if (producto === 3) {
        totalCompra = totalCompra + 3500
    } else if (producto === 4) {
        totalCompra = totalCompra + 750
    } else if (producto === 5) {
        totalCompra = totalCompra + 800
    } else if (producto === 6) {
        totalCompra = totalCompra + 950
    } else if (producto === 0) {
        totalCompra = totalCompra + 0
    } else {
        producto = parseInt(prompt("Ese producto no está habilitad. Escogé otro producto 1.Planner mensual 2.Planner semanal 3.Planner intensivo 4.Set de stickers pastel 5.Set de stickers fotográficos 6.Washi tape pack"))
    continue
  }

    decision = parseInt(prompt("Querés seguir comprando? 1.Si - 2.No"))
    if (decision === 1) {
      producto = parseInt(prompt("Escogé un Producto: 1.Planner mensual 2.Planner semanal 3.Planner intensivo 4.Set de stickers pastel 5.Set de stickers fotográficos 6.Washi tape pack"))
    } else {
      seguirComprando = false
    }
  }  
    alert(`El total de tu compra es $${totalCompra}`)
    
    
    if (totalCompra === 0) {
        alert ("Gracias por pasar. ¡Esperamos que vuelvas pronto!")
    }else {
        alert ("Gracias por tu compra. Esperamos que la disfrutes y vuelvas pronto.")}
}


// -------------------------------------------------------Bienvenida

let nombre = prompt ("¡Hola! ¿Cómo te llamás?")

alert ("Te damos la bienvenida a Cora Misura Digital Stationery, "+nombre)

let queHacer = parseInt (prompt("¿Qué te gustaría hacer? 1.Quiero ver los precios. 2. Quiero comprar"))
if (queHacer === 1) {
    alert ("Los valores son: 1.Planner mensual $1500; 2.Planner semanal $2500; 3.Planner intensivo $3500; 4.Set de stickers pastel $750; 5.Set de stickers fotográficos $800; 6.Washi tape pack $900")
    let queHacer2 = parseInt (prompt ("¿Querés comprar? 1.No 2.Sí"))
        if (queHacer2 ===1) {
        alert ("Gracias por pasar. Esperamos verte pronto.")
        }else {
        laCompra();
        }
}else {
    laCompra();
}