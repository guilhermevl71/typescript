import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQntd = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.crianegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparformulario();
    }
    crianegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ',')); /* replace vai substituir tudo que tem hifen(exp) por virgula */
        const quantidade = parseInt(this.inputQntd.value);
        const valor = parseFloat(this.inputValor.value);
        if (data.getDay() === 0) {
            alert("Não pode criar negociacoes aos domingo!");
            return;
        }
        return new Negociacao(data, quantidade, valor);
    }
    limparformulario() {
        this.inputData.value = '';
        this.inputQntd.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
