/* ---------- Modo escuro (igual à parte 12 do script.js) ---------- */

const pagina = document.querySelector("html");
const botaoTema = document.querySelector(".botao-tema");

function alternarTema() {
  pagina.classList.toggle("modo-escuro");

  if (pagina.classList.contains("modo-escuro")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
}

botaoTema.addEventListener("click", alternarTema);


/* ---------- Menu do celular (igual à parte 13 do script.js) ---------- */

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".topo nav");

function abrirMenu() {
  menu.classList.add("aberto");
  botaoMenu.textContent = "✕";
  botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  menu.classList.remove("aberto");
  botaoMenu.textContent = "☰";
  botaoMenu.setAttribute("aria-expanded", "false");
}

function alternarMenu() {
  if (menu.classList.contains("aberto")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

botaoMenu.addEventListener("click", alternarMenu);