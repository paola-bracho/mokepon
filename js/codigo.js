//funcion de seleccionar mascota
function seleccionarMascotaJugador() {

    //Declaracion de variables
    let jugar = 1
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    //Comprueba Seleccion y Cambia el DOM con la mascota selecionada
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis";
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma";
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos";
    } else{
        alert("Selecciona tu mascota");
        jugar = 0
    }

    /*Esta condicion solo se cumple si el jugador selecciono una mascota, si es asi
      la PC seleccionara su mascota y comenzara el juego*/
    if (jugar == 1) {
        seleccionarMascotaEnemigo()
    }
}

//Funcion de seleccionar mascota del enemigo
function seleccionarMascotaEnemigo() {

    let ataqueAleatorio = aleatorio()
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else if (ataqueAleatorio == 6){
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

//Funcion numero aleatorio
function aleatorio(){
    return Math.ceil(Math.random()*6)
}

//Evento click del boton seleccionar mascota
let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)



























