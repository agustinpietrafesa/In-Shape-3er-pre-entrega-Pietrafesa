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
        Swal.fire('Usuario o contraseña equivocado')
       }
       }else{
        Swal.fire('Usuario o contraseña equivocado')
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
    }
    
 })


const ingresoDatos = (evt) => {
    evt.preventDefault()

    let fecha = new Date()
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let sexo = parseInt(document.querySelector("input[name='genero']:checked").value)
    let edad = document.querySelector('#edad').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let genero 
    let grasa
    let masaOsea
    let masaMusc


    if(sexo == 1){
        genero = "Femenino"
    }else{
        genero = "Masculino"
    }
    
    /********Realizar formulas **********/


        function calculoImc(){
            return ((peso/((altura/100)*(altura/100)))).toFixed(2);
         }
          
         let imc = calculoImc();
         
          
         function grasaMujer() {
            return ((1.2 * imc) + (0.23 * edad) - 5.4).toFixed(2)
         }
         function grasaHombre() {
            return ((1.2 * imc) + (0.23 * edad) - 10.8 - 5.4).toFixed(2)
         }
         function masaOseaMujer() {
            return (peso * 0.14).toFixed(2)
         }
         function masaOseaHombre() {
            return (peso * 0.15).toFixed(2)
         }
         function masaMuscular() {
            return (peso - (peso * (grasa / 100)) - masaOsea).toFixed(2)
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

    /**********Resultados de los indices corporales *************/
let resultadoImc

if(imc <= 18.5){
    resultadoImc = "Según el IMC, tu peso es normal"
}else if((imc > 18.5) && (imc <= 25)){
    resultadoImc = "Según el IMC, tu peso es normal"
}else if((imc > 25.1) && (imc <= 29.9)){
    resultadoImc = "Según el IMC, tu peso es superior a lo normal"
}else{
    resultadoImc = "Según el IMC, tu indice se encuentra dentro de la franja de obesidad."
}



    /******Guardar datos del socio ******/
    const socio = {
        Usuario: nombre + " " + apellido,
        Fecha: fecha.toLocaleDateString(),
        Edad: parseInt(document.querySelector('#edad').value),
        Peso: parseInt(document.querySelector('#peso').value),
        Altura: parseInt(document.querySelector('#altura').value),
        Genero: genero,
        IMC: imc,
        Resultado: resultadoImc,
        Grasa: grasa,
        MasaOsea: masaOsea,
        MasaMusc: masaMusc
    }


    /************Funciones **********/        

       
        datosUsuarios.push(socio)
        actulizarStorageDatos()
        formMisDatos.reset()
        verResultados()
}

if(formMisDatos){
    formMisDatos.addEventListener('submit', ingresoDatos)
}


let nuestrosUsuarios = JSON.parse(localStorage.getItem('datosUsuarios'))
let ultimoUsuario 

if(nuestrosUsuarios == null){
    ultimoUsuario = ""
}else{
    ultimoUsuario = (nuestrosUsuarios.length - 1)
}



    /*******Mostrar en el html  *********/
    
const formCalcular = document.querySelector('#formCalcular')

const realizarCalculos = (evt) => {
    evt.preventDefault()

    function ingresaDatos() {
        if(nuestrosUsuarios == null){
            Swal.fire('Primero ingresa tus datos')
        }else{
            alHtml()
        }
    }

    function alHtml() {
        const resultados = document.querySelector('#resultados');

        resultados.innerHTML = `<h2 class="resultadosTitulo">Resultados</h2>
                   <h3>${nuestrosUsuarios[ultimoUsuario].Usuario}</h3>
                   <h4>Fecha del test: ${nuestrosUsuarios[ultimoUsuario].Fecha}</h4>
                   <h4>Edad: ${nuestrosUsuarios[ultimoUsuario].Edad}</h4>
                   <h4>Sexo: ${nuestrosUsuarios[ultimoUsuario].Genero}</h4>
                   <h4>Peso: ${nuestrosUsuarios[ultimoUsuario].Peso} </h4>
                     <h4>Altura: ${nuestrosUsuarios[ultimoUsuario].Altura} Cm</h4>
                     <h4>Indice de Masa Corporal: ${nuestrosUsuarios[ultimoUsuario].IMC}</h4>
                     <h5>${nuestrosUsuarios[ultimoUsuario].Resultado}</h5>
                     <h4>Porcentaje de grasa corporal: ${nuestrosUsuarios[ultimoUsuario].Grasa}%</h4>
                     <h4>Peso de la masa ósea y orgánica: ${nuestrosUsuarios[ultimoUsuario].MasaOsea} Kg</h4>
                     <h4>Peso de la masa muscular: ${nuestrosUsuarios[ultimoUsuario].MasaMusc} Kg</h4>`;
   
            
    }

    ingresaDatos()

}



if(formCalcular){
    formCalcular.addEventListener('submit', realizarCalculos)
}

























/***  let alHtml = () => { 
    
     const resultados = document.querySelector('#resultados');

     resultados.innerHTML = `<h2 class="resultadosTitulo">Resultados</h2>
                <h3>${nuestrosUsuarios[ultimoUsuario].Usuario}</h3>
                <h4>Fecha del test: ${nuestrosUsuarios[ultimoUsuario].Fecha}</h4>
                <h4>Edad: ${nuestrosUsuarios[ultimoUsuario].Edad}</h4>
                <h4>Sexo: ${nuestrosUsuarios[ultimoUsuario].Genero}</h4>
                <h4>Peso: ${nuestrosUsuarios[ultimoUsuario].Peso} </h4>
                  <h4>Altura: ${nuestrosUsuarios[ultimoUsuario].Altura} Cm</h4>
                  <h4>Indice de Masa Corporal: ${nuestrosUsuarios[ultimoUsuario].IMC}</h4>
                  <h4>Porcentaje de grasa corporal: ${nuestrosUsuarios[ultimoUsuario].Grasa}%</h4>
                  <h4>Peso de la masa ósea y orgánica: ${nuestrosUsuarios[ultimoUsuario].MasaOsea} Kg</h4>
                  <h4>Peso de la masa muscular: ${nuestrosUsuarios[ultimoUsuario].MasaMusc} Kg</h4>`;

           }


 alHtml()
***/
