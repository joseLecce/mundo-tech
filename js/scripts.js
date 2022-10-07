let totalCompra = 0
let compraDescuentos = 0
let totalPagar = 0
let carrito = []
let carritoSalida = [] 
let arrayDesdeFetch = []

// aca recupero el select de mi HTML para poder manipularlo a posterior
const selector = document.getElementById ('lista')


// Traigo el array con el fetch

fetch('./productos/productos.json')
.then( (res) => res.json())
.then( (res) => { 
    arrayDesdeFetch = res}
    )



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

// Funcion para agregar productos al carrito


function agregaEnCarrito (productoParaCarrito){
    const productoSeccionado = productoParaCarrito
    carrito.push (productoSeccionado)
    return 
}

// Funcion para vaciar Variables y arrays

function borraTodo (){
    totalCompra = 0
    carrito = []
    carritoSalida = []
    arrayDesdeFetch = []
    return
}


// Funcion para traer de storage

function traeDeStorage (){
    const auxiliar =  JSON.parse(localStorage.getItem('carritoEntrada'))
    return auxiliar
}

// Funcion que lleva a storage

function llevaHaciaStorage (){
    localStorage.setItem('carritoEntrada', JSON.stringify(carrito))
    return
}

// ---------------------------- FIN DE DECLARACION DE FUNCIONES --------------------------------------


//------------------------------ INICIA CUERPO PRINICIPAL --------------------------------------------


//  Agrego productos a mi Option

fetch('./productos/productos.json')

    .then( (res) => res.json())

    .then( (res) => {

        const info = res
        info.forEach (producto => {
            const option = document.createElement ('option')
            option.innerText = `${producto.id}- ${producto.nombre}: $ ${producto.precio}`
            selector.append (option)
        })
    })


// Agrego Boton para sumar proctos a Carrito

const botonAgregar = document.createElement ('button')
botonAgregar.innerText = 'Agregar Producto'
document.body.append (botonAgregar)

// Agrego boton para finalizar compra y calcular precio

const botonFinalizar = document.createElement ('button')
botonFinalizar.innerText = 'Finalizar Compra'
document.body.append (botonFinalizar)

// Agrego Boton borrar
const botonBorrar = document.createElement ('button')
botonBorrar.innerText = 'Borrar Todo'
document.body.append (botonBorrar)


// ------------------------------ EVENTOS ------------------------------

// evento para agregar productos al carrito

botonAgregar.onclick = () => {
    
    agregaEnCarrito (arrayDesdeFetch[selector.selectedIndex])
    Toastify({

        text: "Producto Agregado",
        
        duration: 2000
        
        }).showToast();
    
}

// Evento para finalizar compra y calcular precios 


botonFinalizar.onclick = () => {
    
    llevaHaciaStorage ()

    carritoSalida = traeDeStorage ()

    carritoSalida.forEach ( (producto) =>{
        totalCompra = totalCompra + producto.precio
    })

// con este IF me aseguro que no me imprima parrafos si no hay nada comprado o si ya se compro
if (totalCompra !== 0) {

// recupero el div para mostrar el contenido del carrito

const muestraParcial = document.getElementById ('cart')

// aplico modificaciones al valor inicial

compraDescuentos = modificaPrecio (totalCompra,calculoDescuentos)


totalPagar = modificaPrecio (compraDescuentos,aplicaImpuestos)

// inyecto al div carrito los parrafos y muestro los valores que se correpsonden

muestraParcial.innerHTML = `<p class="borrar">el total de su compra sin descuentos ni impuestos es de: $${totalCompra}</p>
<p class="borrar">el total de su compra con los descuentos es de: $${compraDescuentos}<p>
<p class="borrar">el total final a pagar es de: $${totalPagar}<p>`
document.body.appendChild(muestraParcial)

// me aseguro que al finalizar la compra las variables esten a 0
borraTodo ()

}else {  
    Swal.fire({
        icon: 'warning',
        title: 'Atención..',
        text: 'No se puede realizar esta acción',
        footer: 'La compra ya esta finaliza o no has comprado nada aun'
    }) 
}


}


// --------------- EVENTO PARA BORRAR TODO --------------------
botonBorrar.onclick = () => {
    borraTodo ()
    localStorage.clear()
    let variable = document.querySelector("#cart")
    variable.innerText = ""
    Swal.fire({
        icon: 'success',
        title: 'Borrado con exito',
        showConfirmButton: false,
        timer : 3000
        }) 
    
    
}

