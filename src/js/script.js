// Variáveis para armazenar os dados dos vinhos
let vinhosCadastrados = 0;
let vinhosEstoqueBaixo = 0;
let vinhoMaisAntigo = "";
let vinhoMaisAntigoIdade = 0;

// Função verificarVinho() para classificar o vinho com base na idade e verificar a quantidade em estoque.
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

// Se o Vinho é Antigo, então o sistem deve usar a função pegarVinhoAntigo() para comparar a idade do vinho atual com o vinho mais antigo registrado, e atualizar as variáveis vinhoMaisAntigo e vinhoMaisAntigoIdade se necessário.
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