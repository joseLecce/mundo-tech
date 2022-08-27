let totalCompra = 0

alert ("Bienvenidos a Mundo-Tech, Ofrecemos los mejores precios y descuentos")

// aca ingreso codigo de producto, uso el valor "5" como codigo de salida

let producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))

// validación del codigo de producto, asegurando que este dentro de los parametros esperados, puede mejorarse para que no sea una validación que se aplique una sola vez

if (producto !== 1 && producto !== 2 && producto !== 3 && producto !== 4 && producto !== 5){
    alert ("Codigo no reconocido, por favor, vuelva a intentar")
    producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))
}

// en este while acumulo los valores de los productos pedidos
while (producto < 5){
    if (producto == 1){
        totalCompra = totalCompra + 200
    } else if( producto ==2) {
        totalCompra = totalCompra + 500
    } else if ( producto == 3){
        totalCompra = totalCompra + 150
    } else if (producto === 4) {
        totalCompra = totalCompra + 300
    }

// al finalizar el ciclo, vuelvo a pedir producto y validar el mismo. Corre con la misma dinamica y posiblidad de mejorar que el ingreso inicial.

    producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))

    if (producto !== 1 && producto !== 2 && producto !== 3 && producto !== 4 && producto !== 5){
        alert ("Codigo no reconocido, por favor, vuelva a intentar")
        producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))
    }

}

// aca muestro el total parcial de los productos solicitados
alert ("el total de su compra sin descuentos ni impuestos es de: "+totalCompra) 

// uso estos condicionales para aplicar el descuento, pongo el alert dentro de cada if para que no me muestre mensaje duplicado en el caso que no se apliquen descuentos
if (totalCompra >= 500 && totalCompra <= 1000){
    totalCompra = totalCompra - (totalCompra* 0.10)
    alert ("el total de su compra con descuento es de: "+totalCompra) 
} else if (totalCompra > 1000 && totalCompra <= 2000) {
    totalCompra = totalCompra - (totalCompra* 0.15)
    alert ("el total de su compra con descuento es de: "+totalCompra) 
} else if (totalCompra > 2000 ) {
    totalCompra = totalCompra - (totalCompra* 0.20)
    alert ("el total de su compra con descuento es de: "+totalCompra) 
}

// aplico impuestos y muestro el total a pagar por el cliente

totalCompra = totalCompra * 1.25

alert ("el total final a pagar es de: "+totalCompra) 

