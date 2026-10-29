/* =========================================================
   LOGIN — o JavaScript da página de entrar (aulas 5 e 6)
   aula 5 · 20/10 — o login mora no portfólio e, quando a
                    conta confere, troca para o index.html
   aula 6 · 28/10 — várias contas: uma lista de fichas e um
                    for que procura a conta certa

   Usado só no login.html, depois do layout.js. Os ids são os
   mesmos do login da aula 4, e as cores dos avisos estão no
   fim do style.css.

   É um login de mentira: as contas ficam aqui mesmo, só para
   treinar a lógica. Qualquer pessoa vê as senhas no F12, e
   pode digitar index.html no endereço. Proteger de verdade é
   trabalho do servidor (back-end).

   Contas de teste:  aluno · bootcamp2026
                     ana   · ana123
                     bruno · bruno123
   ========================================================= */


/* ---------------------------------------------------------
   1. AS CONTAS "CADASTRADAS" — uma lista de fichas (aula 6)
   É a lista de projetos da aula 5, agora com contas. Cada
   ficha tem o usuário, a senha e o nome da pessoa.
   Conta nova? Mais uma ficha no fim (vírgula antes).
   --------------------------------------------------------- */

const contas = [
  { usuario: "aluno", senha: "bootcamp2026", nome: "Aluno" },
  { usuario: "ana", senha: "ana123", nome: "Ana" },
  { usuario: "bruno", senha: "bruno123", nome: "Bruno" }
];


/* ---------------------------------------------------------
   2. AS PEÇAS DA PÁGINA
   --------------------------------------------------------- */

const formulario = document.querySelector("#form-login");
const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const aviso = document.querySelector("#aviso");


/* ---------------------------------------------------------
   3. CONFERIR OS CAMPOS (igual à aula 4)
   --------------------------------------------------------- */

function validarUsuario(usuario) {
  if (usuario === "") {
    return "Digite o seu usuário.";
  } else if (usuario.length < 3) {
    return "O usuário precisa ter pelo menos 3 letras.";
  } else if (usuario.includes(" ")) {
    return "O usuário não pode ter espaço.";
  } else {
    return "";
  }
}

function validarSenha(senha) {
  if (senha === "") {
    return "Digite a sua senha.";
  } else if (senha.length < 6) {
    return "A senha precisa ter pelo menos 6 caracteres.";
  } else {
    return "";
  }
}

function mostrarAviso(texto, tipo) {
  aviso.textContent = texto;
  aviso.classList.remove("erro");
  aviso.classList.remove("certo");
  aviso.classList.add(tipo);
}


/* ---------------------------------------------------------
   4. PROCURAR A CONTA — a novidade da aula 6
   No lugar da conferirConta (que só sabia UMA conta). É a
   receita 3 do for, ESCOLHER: passa por todas as fichas, e o
   if decide qual é a certa.

   Achou → return conta: devolve a FICHA inteira. O return
           para o for na hora.
   Não achou nenhuma → return null, DEPOIS do for.
   null = "nenhuma ficha", vazio de propósito.

   CUIDADO: o return null NÃO pode ficar dentro do for, num
   else. Se ficar, ele desiste na PRIMEIRA ficha e só a conta
   "aluno" funciona (o mesmo cuidado do exercício 10, temItem).
   --------------------------------------------------------- */

function procurarConta(usuario, senha) {
  for (const conta of contas) {
    if (conta.usuario === usuario && conta.senha === senha) {
      return conta;
    }
  }

  return null;
}


/* ---------------------------------------------------------
   5. TROCAR DE PÁGINA — a novidade da aula 5
   window          → a janela do navegador
   location        → o endereço que está na barra lá em cima
   location.href   → trocar o endereço = ir para outra página,
                     como se a pessoa clicasse num link

   "index.html" é o nome do arquivo, na MESMA pasta. Nome
   errado dá "arquivo não encontrado".

   Link (<a href>)        → a PESSOA clica e vai
   window.location.href   → o JAVASCRIPT decide quando ir
                            (aqui: só se a conta conferir)
   --------------------------------------------------------- */

function irParaInicio() {
  window.location.href = "index.html";
}

function entrar(evento) {
  evento.preventDefault();

  const usuario = campoUsuario.value.trim();
  const senha = campoSenha.value;

  const erroUsuario = validarUsuario(usuario);
  const erroSenha = validarSenha(senha);
  const conta = procurarConta(usuario, senha);

  if (erroUsuario !== "") {
    mostrarAviso(erroUsuario, "erro");
  } else if (erroSenha !== "") {
    mostrarAviso(erroSenha, "erro");
  } else if (conta === null) {
    mostrarAviso("Usuário ou senha incorretos.", "erro");
  } else {
    irParaInicio();
  }
}

formulario.addEventListener("submit", entrar);


/* =========================================================
   DESAFIOS DO LOGIN
   1) Antes de trocar de página, mostre "Bem-vindo, Ana!
      Entrando..." e espere 1,5 segundo.
      Dica: conta.nome e setTimeout(irParaInicio, 1500);
   2) No contato.js: depois de "Mensagem enviada!", volte para
      o index.html em 2 segundos.
   ========================================================= */
