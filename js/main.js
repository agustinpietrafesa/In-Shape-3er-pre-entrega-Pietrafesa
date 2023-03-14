/*********Registro de los usuarios *********/

const formRegistro = document.querySelector('#formRegistrarse');

let socios = [];

const actulizarStorage = () => {
    localStorage.setItem('socios', JSON.stringify(socios))
}

const actulizarStorageDatos = () => {
    localStorage.setItem('datosUsuarios', JSON.stringify(datosUsuarios))
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

let datosUsuarios = []



document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(localStorage.getItem('datosUsuarios')) != null){
    datosUsuarios = JSON.parse(localStorage.getItem('datosUsuarios'));
    console.log(datosUsuarios)
    }
    
 })

 if(formMisDatos){

 let nombre = document.querySelector('#nombre').value
 let apellido = document.querySelector('#apellido').value
 let usuario = nombre + " " + apellido
 let edad = document.querySelector('#edad').value
 let peso = document.querySelector('#peso').value
 let altura = document.querySelector('#altura').value
 let sexo 

}

const ingresoDatos = (evt) => {
    evt.preventDefault()


    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let sexo = parseInt(document.querySelector("input[name='genero']:checked").value)
    let genero 

    if(sexo == 1){
        genero = "Femenino"
    }else{
        genero = "Masculino"
    }


    console.log(sexo)
    console.log(typeof sexo)
    console.log(genero)

    const socio = {
        Usuario: nombre + " " + apellido,
        Edad: parseInt(document.querySelector('#edad').value),
        Peso: parseInt(document.querySelector('#peso').value),
        Altura: parseInt(document.querySelector('#altura').value),
        Genero: genero
    }

    datosUsuarios.push(socio)
    actulizarStorageDatos()
    formMisDatos.reset()

}

if(formMisDatos){
    formMisDatos.addEventListener('submit', ingresoDatos);
}





/********Formulas y funciones ***************/
// let peso = datosUsuarios.peso
// let altura
// let edad
// let grasa

// console.log(peso)



// function calculoImc(){
//     return (peso/((altura/100)*(altura/100)));
//  }
 
//  let imc = calculoImc();

 
//  function grasaMujer() {
//     return (1.2 * imc) + (0.23 * edad) - 5.4
//  }
//  function grasaHombre() {
//     return (1.2 * imc) + (0.23 * edad) - 10.8 - 5.4
//  }
//  function masaOseaMujer() {
//     return peso * 0.14
//  }
//  function masaOseaHombre() {
//     return peso * 0.15
//  }
//  function masaMuscular() {
//     return peso - (peso * (grasa / 100)) - masaOsea
//  }
 
