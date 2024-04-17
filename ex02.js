// Objeto para armazenar informações dos alunos
let alunos = {
    1: { nome: 'João', nota: 8.5 }, // Aluno com ID 1, nome João e nota 8.5
    2: { nome: 'Maria', nota: 9.0 }, // Aluno com ID 2, nome Maria e nota 9.0
    3: { nome: 'Ana', nota: 7.5 }    // Aluno com ID 3, nome Ana e nota 7.5
    // Adicione mais alunos conforme necessário
};

// Função para adicionar um novo aluno
function adicionarAluno(id, nome, nota) {
    alunos[id] = { nome, nota }; // Adiciona um novo aluno ao objeto alunos
}

// Função para buscar um aluno por id
function buscarAluno(id) {
    return alunos[id]; // Retorna o aluno correspondente ao ID fornecido
}

// Função para calcular a média das notas dos alunos
function calcularMedia() {
    let soma = 0; // Variável para armazenar a soma das notas
    let totalAlunos = 0; // Variável para armazenar o número total de alunos
    for (let id in alunos) { // Itera sobre cada aluno no objeto alunos
        soma += alunos[id].nota; // Adiciona a nota do aluno à soma
        totalAlunos++; // Incrementa o contador de alunos
    }
    return soma / totalAlunos; // Calcula e retorna a média das notas
}

// Testando as funções
adicionarAluno(4, 'Pedro', 8.0); // Adiciona o aluno Pedro com ID 4 e nota 8.0
console.log(buscarAluno(4));  // Imprime os detalhes do aluno Pedro
console.log(calcularMedia());  // Imprime a média das notas dos alunos
