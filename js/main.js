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
    verResultados()


}

if(formMisDatos){
    formMisDatos.addEventListener('submit', ingresoDatos);
}



/********Formulas y funciones ***************/

const calculos = document.querySelector('#formCalcular')

const realizarCalculos = (evt) => {
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let usuario = nombre + " " + apellido
    let edad = parseInt(document.querySelector('#edad').value);
    let peso = parseInt(document.querySelector('#peso').value);
    let altura = parseInt(document.querySelector('#altura').value),
    sexo = parseInt(document.querySelector("input[name='genero']:checked").value)
    let grasa
    let masaOsea
    let masaMusc

    function calculoImc(){
        return (peso/((altura/100)*(altura/100)));
     }
      
     let imc = calculoImc();
     
      
     function grasaMujer() {
        return (1.2 * imc) + (0.23 * edad) - 5.4
     }
     function grasaHombre() {
        return (1.2 * imc) + (0.23 * edad) - 10.8 - 5.4
     }
     function masaOseaMujer() {
        return peso * 0.14
     }
     function masaOseaHombre() {
        return peso * 0.15
     }
     function masaMuscular() {
        return peso - (peso * (grasa / 100)) - masaOsea
     }



     if (sexo == 1){
        grasa = grasaMujer()
        masaOsea = masaOseaMujer()
        masaMusc = masaMuscular()
     }else {
        grasa = grasaHombre()
        masaOsea = masaOseaHombre()
        masaMusc = masaMuscular()  
     }

     let alHtml = () => { 
        
        resultados.innerHTML = `<h2>${nombre}</h2>
                <h4>Edad: ${usuario1.edad}</h4>
                <h4>Sexo: ${usuario1.genero}</h4>
                <h4>Peso: ${usuario.peso} </h4>
                <h4>Altura: ${usuario1.altura} </h4>
                <h4>Fecha del Test: ${usuario1.primerPesaje.fecha}</h4>
                <h4>Indice de Masa Corporal: ${usuario1.primerPesaje.IMC}h4>
                <h4>Porcentaje de grasa corporal: ${usuario1.primerPesajgrasaCorporal}%</h4>
                <h4>Peso de la masa ósea y orgánica: ${usuario1.primerPesajmasaOsea} Kg</h4>
                <h4>Peso de la masa muscular: ${usuario1.primerPesajmasaMusc} Kg</h4>`;

         }

         alHtml()

}



if(calculos){
    calculos.addEventListener('input', realizarCalculos)
}


 
