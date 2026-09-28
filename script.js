const reloj = document.getElementById("reloj");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");
const boton = document.getElementById("cambiarColor");
const mensaje = document.getElementById("mensaje");

const colores = ["#2563eb", "#7c3aed", "#059669", "#ea580c", "#db2777"];
let colorActual = 0;

function moverReloj() {
  const ahora = new Date();
  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours() % 12;

  const gradosSegundos = segundos * 6;
  const gradosMinutos = minutos * 6 + segundos * 0.1;
  const gradosHoras = horas * 30 + minutos * 0.5;

  segundo.style.transform = `translateX(-50%) rotate(${gradosSegundos}deg)`;
  minuto.style.transform = `translateX(-50%) rotate(${gradosMinutos}deg)`;
  hora.style.transform = `translateX(-50%) rotate(${gradosHoras}deg)`;
}

boton.addEventListener("click", () => {
  colorActual = (colorActual + 1) % colores.length;
  reloj.style.setProperty("--color-reloj", colores[colorActual]);
  mensaje.textContent = "¡El color del reloj cambió!";
});

moverReloj();
setInterval(moverReloj, 1000);