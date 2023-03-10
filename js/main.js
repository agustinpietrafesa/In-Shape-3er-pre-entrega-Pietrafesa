/*********Datos de los usuarios *********/

const formRegistro = document.querySelector('#formRegistrarse');

let socios = [];

const actulizarStorage = () => {
    localStorage.setItem('socios', JSON.stringify(socios))
}

document.addEventListener('DOMContentLoaded', () => {
   if(JSON.parse(localStorage.getItem('socios')) != null){
    socios = JSON.parse(localStorage.getItem('socios'))
   }
})


const crearSocio = (evt) => {
    evt.preventDefault()
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let usuario = nombre + " " + apellido
    let email = document.querySelector('#email').value
    let password =  document.querySelector('#password').value

    
    const socio = {
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Password: password
    }

    socios.push(socio)
    actulizarStorage()
    formRegistro.reset()
}

formRegistro.addEventListener('submit', crearSocio);



