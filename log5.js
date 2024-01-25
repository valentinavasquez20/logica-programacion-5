const numero = document.getElementById("numero");
const adivinar = document.getElementById("adivinar");
const resultado = document.getElementById("resultado");

let numeroSecreto = 56;

if (adivinar) {
  adivinar.addEventListener("click", () => {
    let numeroIngresado = numero.value;

    let numeroFloat = parseFloat(numeroIngresado);

    if (isNaN(numeroFloat)) {
      resultado.textContent = "El dato de entrada no es un número válido.";
      return;
    } else {
      if (numeroFloat == numeroSecreto) {
        resultado.textContent = "Felicidades, adivinaste el número secreto";
      } else {
        resultado.textContent = "Ups, el número secreto es incorrecto";
      }
    }
  });
}
