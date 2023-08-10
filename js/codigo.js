let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionReiniciar = document.getElementById("reiniciar")
let botonMascotaJugador = document.getElementById("boton-mascota")

let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")
let botonReiniciar = document.getElementById("boton-reiniciar")

let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let inputHipodoge = document.getElementById("hipodoge")
let inputCapipepo = document.getElementById("capipepo")
let inputRatigueya = document.getElementById("ratigueya")
let inputLangostelvis = document.getElementById("langostelvis")
let inputTucapalma = document.getElementById("tucapalma")
let inputPydos = document.getElementById("pydos")
let spanMascotaJugador = document.getElementById("mascota-jugador")

let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

let spanVidasJugador = document.getElementById("vidas-jugador")
let spanVidasEnemigo = document.getElementById("vidas-enemigo")

let sectionMensajes = document.getElementById('resultado')
let ataquesDelJugador = document.getElementById('ataques-del-jugador')
let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Se uso display none para ocultar la seleccion de ataques hasta que se seleccione la mascota
sectionSeleccionarAtaque.style.display = "none"

//Se oculta el boton de reiniciar hasta que termine el juego
sectionReiniciar.style.display = "none"

//Evento click del boton seleccionar mascota
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

// Evento click del los botones para seleccionar elemento
botonFuego.addEventListener("click", ataqueFuego)
botonAgua.addEventListener("click", ataqueAgua)
botonTierra.addEventListener("click", ataqueTierra)

//Evento click del boton reiniciar
botonReiniciar.addEventListener("click", reiniciarJuego)


//funcion de seleccionar mascota
function seleccionarMascotaJugador() {

    //la eleccion de mascota se oculta luego de elegir la mascota
    sectionSeleccionarMascota.style.display = "none"

    //La eleccion de ataque aperece luego de elegir la mascota
    sectionSeleccionarAtaque.style.display = "flex"

    //Declaracion de variables
    let jugar = 1
    
    //Comprueba la seleccion y cambia el DOM con la mascota selecionada
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis";
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma";
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos";
    } else {
        alert("Selecciona tu mascota");
        jugar = 0 //La pc no hara seleccion de mascota hasta que el jugador lo haga
        reiniciarJuego()
    }
    /*Esta condicion solo se cumple si el jugador selecciono una mascota, si es asi
      la PC seleccionara su mascota y comenzara el juego*/
    if (jugar == 1) {
        seleccionarMascotaEnemigo()
    }
    //Se aplico disabled para que cuando el jugador seleccione una mascota, no le de opción de seguir cambiando
    botonMascotaJugador.disabled = true 
}

//Funcion de seleccionar mascota del enemigo
function seleccionarMascotaEnemigo() {

    let mascotaAleatorio = aleatorio(1, 6)
    
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else if (mascotaAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

//Funcion numero aleatorio para seleccion de mascota y ataque del pc
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
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

//se crea la logica para obtener el resultado del combate, restando las vidas de los participantes segun corresponda
function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" || ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" || ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    //cuando el combate termina, se llama la funcion revisarVidas que muestra el mensaje final de victoria o derrota
    revisarVidas() 
}

//una vez que la vida del jugador o del pc llega a 0 se muestra un mensaje con el resultado final del combate
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🎉")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Noooo, perdisteee 😞")
    }
}

//Una vez que se tiene el ataque del jugador y el enemigo se muestra un mensaje con el resultado de si gano o no
function crearMensaje(resultado) {
     
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//funcion que muestra el resultado final del combate en pantalla 
function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    /*Una vez que las vidas del jugador o del pc lleguen a 0, 
    se desabilitan con disabled los botones de ataques para poner fin al juego*/
    botonFuego.disabled = true   
    botonAgua.disabled = true 
    botonTierra.disabled = true

    //El boton de reiniciar aperece luego del mensaje final
    sectionReiniciar.style.display = 'block'
}

/*Se uso el metodo location.reload para recargar la pagina para volver al html inicial 
y volver a selecionar las mascotas y ataques cuando se pulse el boton reiniciar*/
function reiniciarJuego() {
    location.reload()
}

























