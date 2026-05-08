vinhosCadastrados = 0;
vinhosEstoqueBaixo = 0;

function verificarVinho(nome, quantidade, idade) {
    if (quantidade < 5) {
        vinhosEstoqueBaixo++;
    }

    vinhoClassificacao = "";

    if (idade < 2) {
    //  vinhoClassificao = "Jovem"
    } else if (idade > 3) {
    // vinhoClassificao = "Jovem"
    } else if (idade > 6) {
    // vinhoClassificao = "Jovem"
    }

    alert(`O vinho ${nome} é classificado como ${vinhoClassificacao}`)
}

while (true) {
    nomeVinho = prompt("Cadastre o nome do vinho: ");
    quantidadeVinho = prompt("Insira a quantidade de vinho(s): ");
    idadeVinho = prompt("Insira a idade do vinho: ");


}
