//Capturar informacion del formulario

const inputNombre = document.querySelector ('#nombre')
const inputProducto = document.querySelector ('#producto')
const inputCantidad = document.querySelector ('#cantidad')
const inputPrecio = document.querySelector ('#precio')
const btnCargar = document.querySelector ('#btn-guardar')

let registros = []

const registrosEnLs = JSON.parse(localStorage.getItem('registros'))
if(registrosEnLs){
    registros = registrosEnLs
}

const cargarRegistro = () => {
    const valueNombre = inputNombre.value
    const valueProducto = inputProducto.value
    const valueCantidad = inputCantidad.value
    const valuePrecio = inputPrecio.value 

    registros.push ({
        Nombre: valueNombre,
        Producto: valueProducto,
        Cantidad: valueCantidad,
        Precio: valuePrecio
    })
    console.log (registros)
    // Enviar info al Local.
    localStorage.setItem ('registros',JSON.stringify(registros))
    inputNombre.value=''
    inputCantidad.value=''
    inputPrecio.value=''
    inputProducto.value=''

    // Agregando informacion al front

    const listaIngresos = document.querySelector ('#lista')
    const _registros = localStorage.getItem('registros')
    const registrosParse = JSON.parse(_registros)
    console.log (_registros)

// Recorrer el array "registros" 

    registrosParse.forEach((_registros) => {
      const li = document.createElement ('li')
      li.innerHTML = `
      <h4>Nombre:${_registros.Nombre}<h4>
      <h4>Producto:${_registros.Producto}<h4>
      <h4>Cantidad:${_registros.Cantidad}<h4>
      <h4>Precio:${_registros.Precio}<h4>`
      listaIngresos.append(li) 
});   


}

btnCargar.addEventListener ('click',cargarRegistro)
localStorage.removeItem('registros')






































// // Funcion constructora
// class Ingresos {
//     constructor (material,precio,cantidad) {
//         this.material =material;
//         this.precio =precio;
//         this.cantidad =cantidad;
//     }
// }

// // Array de precios

// let precios = [
//     {material: "Fibra de vidrio", precio: "10"},
//     {material: "Resina", precio: "15"},
//     {material: "Catalizador", precio: "12"},
//     {material: "Gelcoat", precio: "70"},
// ]

// function cargarIngresos () {
//     let material = prompt ("Ingrese el material a registrar")
//     let precio = prompt ("Ingrese el precio")
//     let cantidad= prompt ("Ingrese cantidad")

//     const nuevoIngreso = new Ingresos (material,precio,cantidad);
//     arrayRegistro.push(nuevoIngreso);
//     alert("Ingreso agregado");
// }

// let arrayRegistro = []

// function verRegistro() {
//     arrayRegistro.forEach((elemento)=> {
//         alert ( `Se registro el ingreso de ${elemento.material} por un precio de ${elemento.precio} en la cantidad aprox de ${elemento.cantidad}`)
//     })
// }


// let opcion = prompt ("Ingrese una opcion: \n 1: Cargar ingreso \n 2:Ver registros \n 3: finalizar") ;

// // bucle while, mientras que..

// while (opcion !== "3") {
//     if (opcion === "1") {
//         cargarIngresos(arrayRegistro);
//     }
//     if (opcion ==="2") {
//         verRegistro();
//     }
//     opcion = prompt ("Ingrese una opcion: \n 1: Vuelve a Cargar ingreso \n 2:Ver registros \n 3: finalizar")
// }


























