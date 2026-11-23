// Abre y cierra el menú en el móvil
const boton = document.getElementById("menu-boton");
const enlaces = document.getElementById("menu-enlaces");

boton.addEventListener("click", () => {
  const abierto = enlaces.classList.toggle("abierto");
  boton.setAttribute("aria-expanded", abierto);
});
