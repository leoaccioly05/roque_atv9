// Definindo um array de alunos com suas informações
let alunos = [
    { id: 1, nome: 'João', nota: 8.5 },
    { id: 2, nome: 'Maria', nota: 9.0 },
    { id: 3, nome: 'Ana', nota: 7.5 }
];

// Função para adicionar um novo aluno ao array de alunos
function adicionarAluno(id, nome, nota) {
    alunos.push({ id, nome, nota }); // Adiciona um novo objeto aluno ao final do array
}

// Função para buscar um aluno pelo seu id
function buscarAluno(id) {
    return alunos.find(aluno => aluno.id === id); // Usa o método find para encontrar o aluno com o id correspondente
}

// Função para calcular a média das notas dos alunos
function calcularMedia() {
    // Usa o método reduce para somar todas as notas dos alunos
    let soma = alunos.reduce((total, aluno) => total + aluno.nota, 0);
    // Divide a soma pelo número total de alunos para obter a média
    return soma / alunos.length;
}

// Testando as funções

// Adiciona um novo aluno com id 4, nome Pedro e nota 8.0
adicionarAluno(4, 'Pedro', 8.0);
// Busca o aluno com id 4 e imprime suas informações
console.log(buscarAluno(4));  // Isto irá imprimir o aluno Pedro
// Calcula e imprime a média das notas dos alunos
console.log(calcularMedia());  // Isto irá imprimir a média das notas