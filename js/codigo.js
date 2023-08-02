let ataqueJugador
let ataqueEnemigo

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

    let mascotaAleatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else if (mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

//Funcion numero aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//funcion de eleccion de ataques del jugador
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

//Se crea la funcion aleatoria para que PC elija su ataque
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }
    crearMensaje()
}

function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + "- PENDIENTE"

    sectionMensajes.appendChild(parrafo)
}


    //Evento click del boton seleccionar mascota
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    // Evento click del los botones para seleccionar elemento
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

























