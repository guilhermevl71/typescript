import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData;
    private inputQntd;
    private inputValor;

    constructor() {
        this.inputData = document.getElementById("data");
        this.inputQntd = document.getElementById("quantidade");
        this.inputValor = document.getElementById("valor");
    }

    adiciona() {
        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQntd.value,
            this.inputValor.value
        );

        console.log(negociacao);
    }
}