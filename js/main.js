/*********Registro de los usuarios *********/

const formRegistro = document.querySelector('#formRegistrarse');

let socios = [];

const actulizarStorage = () => {
    localStorage.setItem('socios', JSON.stringify(socios))
}

const welcome = () => {
    location.href = "inicio.html"
}

document.addEventListener('DOMContentLoaded', () => {
   if(JSON.parse(localStorage.getItem('socios')) != null){
    socios = JSON.parse(localStorage.getItem('socios'));
    console.log(socios)
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



if(formRegistro){
formRegistro.addEventListener('submit', crearSocio);
}


/************Ingreso de los usuarios ************/

const formInicioSesion = document.querySelector('#formInicioSesion');

const inicioSesion = (evt) => {
    evt.preventDefault()    
    let emailIngresado = document.querySelector('#emailSesion').value
    let passwordIngresada = document.querySelector('#passwordSesion').value

    welcome()
    formInicioSesion.reset()

 }

if(formInicioSesion){
    formInicioSesion.addEventListener('submit', inicioSesion);
}


