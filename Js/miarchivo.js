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
    inputProducto.value='';
    // Agregando informacion al front
    const listaIngresos = document.querySelector ('#lista')
    const _registros = localStorage.getItem('registros')
    const registrosParse = JSON.parse(_registros)
    console.log (_registros)

    // Recorrer el array "registros" 

    registrosParse.forEach((_registros) => {
    const tr = document.createElement ('tr')
    tr.innerHTML = ` 
        <th scope="row" class="table-success">${_registros.Nombre}</th>
        <td class="table-success">${_registros.Producto}</td>
        <td class="table-success">${_registros.Cantidad}</td>
        <td class="table-success">${_registros.Precio}</td>
        `
    listaIngresos.append(tr) 
})   
};


localStorage.removeItem('registros')
btnCargar.addEventListener ('click',() => {
    Swal.fire ({
        title: 'Confirma el ingreso?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    denyButtonText: `No confirmar`,
    }).then((result) => {
  /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        Swal.fire('Confirmado', '', 'success')
        cargarRegistro()
    } else if (result.isDenied) {
        Swal.fire('No se guardaron los cambios', '', 'info')
    }
    })
})






























































