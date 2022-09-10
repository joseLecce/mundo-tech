let totalCompra = 0
let carrito = []

// aca recupero el select de mi HTML para poder manipularlo a posterior
const selector = document.getElementById ('lista')

// el array lo manejo de esta manera para que me sea mas comodo manipularlo a futuro
const arrayProductos = [{id:1,nombre:'Memoria',precio:200},
                        {id:2,nombre:'Tarjeta Grafica',precio:500},
                        {id:3,nombre:'Almacenamiento',precio:150},
                        {id:4,nombre:'Micro-Procesador',precio:300}]



// ------------------------ INICIO DE DELCARACION DE  FUNCIONES ----------------------------

// Funcion para el calculo de descuentos
function calculoDescuentos (compra){
    if (compra >= 500 && compra <= 1000){

        return   compra - (compra * 0.10)
        } else if (compra > 1000 && compra <= 2000) {
        
        return compra - (compra * 0.15)
    } else if (compra > 2000 ) {
        
        return compra - (compra * 0.20)
        } else {
            return compra
        }
    
}

// Funcion para aplicar impuestos
function aplicaImpuestos (compra) {
    return compra * 1.25
}

// Funcion de Grado superior que aplica modificadores al valor bruto de la compra
function modificaPrecio (compra, modificante){
    return modificante (compra)
}
// ---------------------------- FIN DE DECLARACION DE FUNCIONES --------------------------------------


//------------------------------ INICIA CUERPO PRINICIPAL --------------------------------------------


//  Agrego productos a mi Option

arrayProductos.forEach (producto => {
    const option = document.createElement ('option')
    option.innerText = `${producto.id}- ${producto.nombre}: $ ${producto.precio}`
    selector.append (option)
    } )

// Agrego Boton para sumar proctos a Carrito

const botonAgregar = document.createElement ('button')
botonAgregar.innerText = 'Agregar Producto'
document.body.append (botonAgregar)

// Agrego boton para finalizar compra y calcular precio

const botonFinalizar = document.createElement ('button')
botonFinalizar.innerText = 'Finalizar Compra'
document.body.append (botonFinalizar)


// ------------------------------ EVENTOS ------------------------------

// evento para agregar productos al carrito

botonAgregar.onclick = () => {
    const productoSeccionado = arrayProductos[selector.selectedIndex]
    carrito.push (productoSeccionado)
}

// Evento para finalizar compra y calcular precios 

botonFinalizar.onclick = () => {
    carrito.forEach ( (producto) =>{
        totalCompra = totalCompra + producto.precio
    })

// aca muestro el total parcial de los productos solicitados

const muestraParcial = document.createElement ('p')
muestraParcial.innerText = `el total de su compra sin descuentos ni impuestos es de: $${totalCompra}`
document.body.append (muestraParcial)

// Aca calculo y muestro el valor de la compra con los descuentos calculados

totalCompra = modificaPrecio (totalCompra,calculoDescuentos)
const muestraConDescuentos = document.createElement ('p')
muestraConDescuentos.innerText = `el total de su compra con los descuentos es de: $${totalCompra}`
document.body.append (muestraConDescuentos)

// aplico impuestos y muestro el total a pagar por el cliente

totalCompra = modificaPrecio (totalCompra,aplicaImpuestos)
const muestraPrecioFinal = document.createElement ('p')
muestraPrecioFinal.innerText = `el total final a pagar es de: $${totalCompra}`
document.body.append (muestraPrecioFinal)



}
