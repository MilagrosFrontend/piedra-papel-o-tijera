// Iniciar el juego 
alert ("¡Iniciar el juego!")
alert ("Elegi tu ataque")

//Elegir el ataque de los jugadores
let jugador = prompt ("Escribe 0 para piedra, 1 para papel, 2 para tijera")
if (jugador == 0){
    alert ("Elegiste piedra")
}
else if (jugador == 1){
    alert ("Elegiste papel")
}
else if (jugador == 2){
    alert("Elegiste tijera")
}

//Elegir ataque aleatorio del enemigo (pc)
let enemigo = Math.round(Math.random() * 2)
if (enemigo == 0){
    alert ("El enemigo eligió piedra")
}
else if (enemigo == 1){
    alert ("El enemigo eligió papel")
}
else if (enemigo == 2){
    alert("El enemigo eligió tijera")
}

//Mostrar el resultado
if (jugador == enemigo){
    alert("¡EMPATASTE!")
}
else if (jugador == 0 && enemigo == 2){
    alert ("¡GANASTE!")
}
else if (jugador == 1 && enemigo == 2){
    alert ("¡GANASTE!")
}
else if (jugador == 2 && enemigo == 1){
    alert ("¡GANASTE!")
}
else {
    alert("¡PERDISTE! Vuelve a intentarlo")
}
// cosas a mejorar: agregar cuando el jugador pone un numero que no corresponde. 