import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.getElementById("form");

form.addEventListener("submit", event => {
    controller.adiciona();
    event.preventDefault();
});