let numerosSorteados = [];
let numeroMaximo = 3;
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

function IntentoUsuario() {
  intentos++;
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número secreto! en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      } `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario < numeroSecreto) {
    asignarTextoElemento("p", "El número secreto es mayor");
  } else asignarTextoElemento("p", "El número secreto es menor");
  LimpiarCaja();
  return;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

asignarTextoElemento("h1", "Juego del número Secreto");
asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if (numerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    return;
  } else {
    if (numerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      numerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function LimpiarCaja() {
  document.getElementById("valorUsuario").value = null;
}

function ReiniciarJuego() {
  LimpiarCaja();
  condicionesIniciales();
  console.log(numeroSecreto);
  console.log(numerosSorteados);
  return;
}

function condicionesIniciales() {
  numeroSecreto = generarNumeroSecreto();
  intentos = 0;
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  document.getElementById("reiniciar").setAttribute("disabled", true);
  //Implementando listas para evitar repetir numero secreto
}
