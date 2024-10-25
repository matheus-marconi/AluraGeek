import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.criaProduto(titulo, valor, imagem);
        window.location.href = "../index.html";
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));