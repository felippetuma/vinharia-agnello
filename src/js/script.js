// Variáveis para armazenar os dados dos vinhos
let vinhosCadastrados = 0;
let vinhosEstoqueBaixo = 0;
let vinhoMaisAntigo = "";
let vinhoMaisAntigoIdade = 0;
// Função para validar entradas de texto, garantindo que o usuário insira um valor não vazio e significativo.
function validarTextos(entrada) {
    if (!entrada || entrada.trim() === "") {
        alert("O campo de texto não pode estar vazio. Por favor, insira um valor válido.");
        return false;
    }
    return true;
}
// Função para validar entradas numéricas, garantindo que o usuário insira um valor numérico válido e positivo.
function validarNumeros(entrada) {
    if (!entrada || entrada.trim() === "") {
        alert("O campo de número deve conter um valor numérico válido. Por favor, insira um número.");
        return false;
    }

    if (isNaN(Number(entrada)) || Number(entrada) < 0) {
        alert("O número deve ser positivo. Por favor, insira um número válido.");
        return false;
    }

    return true;
}
// Função para verificar o estoque disponível, considerando que um estoque baixo é definido como menos de 5 unidades.
function verificarEstoque(quantidade) {
    return quantidade < 5;
}

// Função classificarVinho() para classificar o vinho com base na idade e verificar a quantidade em estoque.
function classificarVinho(idade) {
    if (idade <= 2) {
        return "Jovem";
    } else if (idade <= 6) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

function emitirMensagens(mensagem) {
    console.log(mensagem);
    alert(mensagem);
}

// Função verificarVinho() para classificar o vinho com base na idade e verificar a quantidade em estoque.
function verificarVinho(nome, quantidade, idade) {
    if (verificarEstoque(quantidade)) {
        vinhosEstoqueBaixo++;
    }

    let vinhoClassificacao = classificarVinho(idade);
    
    emitirMensagens(`O vinho ${nome} é classificado como ${vinhoClassificacao}. Quantidade em estoque: ${quantidade}`);
    
    pegarVinhoAntigo(nome, idade);
}

// Se o Vinho é Antigo, então o sistem deve usar a função pegarVinhoAntigo() para comparar a idade do vinho atual com o vinho mais antigo registrado, e atualizar as variáveis vinhoMaisAntigo e vinhoMaisAntigoIdade se necessário.
function pegarVinhoAntigo(nomeVinho, idadeVinho) {
    if (vinhoMaisAntigo === "" || idadeVinho > vinhoMaisAntigoIdade) {
        vinhoMaisAntigo = nomeVinho;
        vinhoMaisAntigoIdade = idadeVinho;
    }
}

// exibibe os dados finais que o usuario forneceu 
function exibirDadosFinais() {
    const mensagemRelatorio = `Relatório Final:\n\nTotal de vinhos cadastrados: ${vinhosCadastrados}\nVinhos com estoque baixo: ${vinhosEstoqueBaixo}\nVinho mais antigo: ${vinhoMaisAntigo} (${vinhoMaisAntigoIdade} anos)`;
    emitirMensagens(mensagemRelatorio);
}

// inicia um processo para recolher os dados para o inventário de vinhos, repetindo o cadastro até que o utilizador decida parar.
while (true) {
    let nomeVinho = prompt("Cadastre o nome do vinho: ");
    if (!validarTextos(nomeVinho)) continue;
    
    let quantidadeVinho = prompt("Insira a quantidade de vinho(s): ");
    if (!validarNumeros(quantidadeVinho)) continue;
    
    let idadeVinho = prompt("Insira a idade do vinho: ");
    if (!validarNumeros(idadeVinho)) continue;
    
    verificarVinho(nomeVinho, Number(quantidadeVinho), Number(idadeVinho));
    vinhosCadastrados++;
    
    let continuar = prompt("Deseja cadastrar outro vinho? (S/N)");
    if (!continuar || continuar.trim().toUpperCase() === "N") break;
}

exibirDadosFinais();