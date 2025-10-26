const btnNo = document.getElementById("no");
const btnSi = document.getElementById("si");
const inicio = document.getElementById("inicio");
const respuesta = document.getElementById("respuesta");
const regalo = document.getElementById("regalo");
const universo = document.getElementById("universo");

btnNo.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  btnNo.style.position = "absolute";
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});

btnSi.addEventListener("click", () => {
  inicio.classList.add("oculto");
  respuesta.classList.remove("oculto");
});

regalo.addEventListener("click", () => {
  respuesta.classList.add("oculto");
  universo.classList.remove("oculto");
});
