/*********Registro de los usuarios *********/

const formRegistro = document.querySelector('#formRegistrarse');

let socios = [];

const actulizarStorage = () => {
    localStorage.setItem('socios', JSON.stringify(socios))
}

const welcome = () => {
    location.href = "inicio.html"
}

const verResultados = () => {
    location.href = "misPesajes.html"
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
        Usuario: usuario,
        Email: email,
        Password: password
    }

    socios.push(socio)
    actulizarStorage()
    welcome()
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


    let usuario = socios.find(socio => socio.Email === emailIngresado)


    if(usuario) {
       if(usuario.Password === passwordIngresada){
        welcome()
        formInicioSesion.reset()
       }else{
        alert("mal")
       }
       }else{
        alert("mal")
       }
    }

 

if(formInicioSesion){
    formInicioSesion.addEventListener('submit', inicioSesion);
}


/***************Ingreso de datos  ********************/


const formMisDatos = document.querySelector('#formMisDatos')


const ingresoDatos = (evt) => {
    evt.preventDefault()

    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let usuario = nombre + " " + apellido
    let edad = document.querySelector('#edad').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let genero = document.querySelector('#genero').value

    const sociosDatos = {
        Edad: edad,
        Peso: peso,
        Altura: altura,
        Genero: genero
    }


        
}

if(formMisDatos){
    formMisDatos.addEventListener('submit', ingresoDatos);
}

/**************Pesajes y calculos****************/

