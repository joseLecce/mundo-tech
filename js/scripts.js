let totalCompra = 0
let arrayProductos = [200,500,150,300]

// ------------------------ INICIO DE DELCARACION DE  FUNCIONES ----------------------------

// Funcion para la  validación del codigo de producto, asegurando que este dentro de los parametros esperados
function validaCodigo (codigo){
    if (codigo !== 1 && codigo !== 2 && codigo !== 3 && codigo !== 4 && codigo !== 5){
        return true
    } else {
        return false
    }
}


// Funcion para el calculo de descuentos
function calculoDescuentos (compra){
    if (compra >= 500 && compra <= 1000){
        return  compra - (compra* 0.10)
        } else if (compra > 1000 && compra <= 2000) {
        return compra - (compra* 0.15) 
    } else if (compra > 2000 ) {
        return compra - (compra* 0.20)
        }
    
}

// Funcion para aplicar impuestos
function aplicaImpuestos (compra) {
    return compra * 1.25
}

// ---------------------------- FIN DE DECLARACION DE FUNCIONES --------------------------------------




alert ("Bienvenidos a Mundo-Tech, Ofrecemos los mejores precios y descuentos")

// aca ingreso codigo de producto, uso el valor "5" como codigo de salida

let producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))


// uso el valor true para seguir valiando, hasta que un false me haga salir del while y pueda seguir cargando codigos

while (validaCodigo(producto)){
    alert ("Codigo no reconocido, por favor, vuelva a intentar")
    producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))
}

// en este while acumulo los valores de los productos pedidos
while (producto < 5){
    if (producto == 1){
        totalCompra = totalCompra + arrayProductos[producto-1]
    } else if( producto ==2) {
        totalCompra = totalCompra + arrayProductos[producto-1]
    } else if ( producto == 3){
        totalCompra = totalCompra + arrayProductos[producto-1]
    } else if (producto === 4) {
        totalCompra = totalCompra + arrayProductos[producto-1]
    }

// al finalizar el ciclo, vuelvo a pedir producto y validar el mismo.

    producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))

    while (validaCodigo(producto)){
        alert ("Codigo no reconocido, por favor, vuelva a intentar")
        producto = parseInt(prompt ("ingrese su Producto: 1- Memoria, 2- Tarjeta Grafica, 3- Almacenamiento, 4-Micro Procesador, 5- Salir"))
    }
}

// aca muestro el total parcial de los productos solicitados

alert ("el total de su compra sin descuentos ni impuestos es de: "+totalCompra) 

// Aca calculo y muestro el valor de la compra con los descuentos calculados

totalCompra = calculoDescuentos (totalCompra)
alert ("el total de su compra con descuento es de: "+totalCompra) 


// aplico impuestos y muestro el total a pagar por el cliente

totalCompra = aplicaImpuestos (totalCompra)

alert ("el total final a pagar es de: "+totalCompra) 

