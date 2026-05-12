let vinhosCadastrados = 0;
let vinhosEstoqueBaixo = 0;
let vinhoMaisAntigo = "";
let vinhoMaisAntigoIdade = 0;

function verificarVinho(nome, quantidade, idade) {
    if (quantidade < 5) {
        vinhosEstoqueBaixo++;
    }
    
    let vinhoClassificacao = "";
    
    if (idade <= 2) {
        vinhoClassificacao = "Jovem";
    } else if (idade <= 6) {
        vinhoClassificacao = "Amadurecido";
    } else {
        vinhoClassificacao = "Antigo";
    }
    
    alert(`O vinho ${nome} é classificado como ${vinhoClassificacao}. Quantidade em estoque: ${quantidade}`);
    
    pegarVinhoAntigo(nome, idade);
}

function pegarVinhoAntigo(nomeVinho, idadeVinho) {
    if (vinhoMaisAntigo === "" || idadeVinho > vinhoMaisAntigoIdade) {
        vinhoMaisAntigo = nomeVinho;
        vinhoMaisAntigoIdade = idadeVinho;
    }
}

// TODO: Exibir os dados: (Quantos cadastros totais), (Vinhos estoque baixo) e (Vinho mais antigo), 
// só dar um prompt()
function exibirDadosFinais() {

}

while (true) {
    nomeVinho = prompt("Cadastre o nome do vinho: ");
    quantidadeVinho = prompt("Insira a quantidade de vinho(s): ");
    idadeVinho = prompt("Insira a idade do vinho: ");
    
    verificarVinho(nomeVinho, quantidadeVinho, idadeVinho)
    vinhosCadastrados++;
    
    let continuar = prompt("Deseja cadastrar outro vinho? (S/N)").trim();
    if (continuar.toUpperCase() === "N") break;
}

exibirDadosFinais();