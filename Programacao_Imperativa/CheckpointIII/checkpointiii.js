/*Passo 1 (1,5 pontos) -> Na linha 8
Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
Passo 2 (1,5 pontos) -> Na linha 14
Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora. 
*/
class Aluno {
    constructor (nome, qtdFaltas, notas){
      this.nome = nome
      this.qtdFaltas = qtdFaltas
      this.notas = notas
    }
    calcularMedia () {
        let nota = 0;

        for (let i = 0; i < (this.notas).length; i++) {
        nota += (this.notas)[i]; 
       }
        return (nota / (this.notas).length).toFixed(1);
    }
    faltas () {
    return this.qtdFaltas += 1;
    }
}

const aluno1 = new Aluno('Selena', 1, [8, 9, 10])
const aluno2 = new Aluno('Márcia', 4, [5, 10, 8])
const aluno3 = new Aluno('Marina', 2, [7, 8, 2])
const aluno4 = new Aluno('Milena', 5, [2, 4, 2])
const alunos = [];

alunos.push(aluno1,aluno2,aluno3,aluno4)

console.log(aluno1)
aluno1.faltas()  //adicionando faltas no aluno1
console.log(aluno1)

console.log(aluno3.calcularMedia()) //calculando média do aluno3


/* Passo 3 (1,5 pontos)
Crie o objeto literal curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) 
e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
*/

// Passo 3
const curso = {
    nomeDoCurso: 'DH',
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: alunos, // array contendo lista de alunos criada na linha 31 e alunos adicionados na linha 33


/*Passo 4 (1,5 pontos)
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, 
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.*/
// Passo 5 (2 pontos)
// Crie um método para o objeto curso que receba um aluno (como parâmetro) 
// e retorne true se ele aprovou no curso ou false em caso de reprovação. 
// Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação 
// e ter menos faltas que faltas máximas. 
//  Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
/*Passo 6 (2 pontos)
Crie um método para o objeto curso que percorra a lista de estudantes 
e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */

// Passo 4
adicionarAluno(nome, qtdFaltas, notas) {
    let novoAluno = new Aluno(nome, qtdFaltas, notas);
    this.listaEstudantes.push(novoAluno)
}, 

// Passo 5
aprovacao (aluno) {
  let nota = aluno.calcularMedia()
  if (aluno.qtdFaltas == curso.faltasMaximas && nota >= curso.notaDeAprovacao * 1.1) {
    let aprovado = true
    return aprovado
  } else if (aluno.qtdFaltas < curso.faltasMaximas && nota >= curso.notaDeAprovacao) {
    return true
  } return false
  
},

// Passo 6
aprovadosReprovados(){
  let situacao = [];
  this.listaEstudantes.forEach((alunos, index) =>{
    situacao[index] = this.aprovacao(alunos);
    return situacao
  });
  return situacao 
}
}


curso.adicionarAluno('Carla', 1, [4,5,9])

console.log(curso.aprovacao(aluno1)) // Testando a aprovação 
console.log(curso.listaEstudantes) // Testando a lista de estudantes

console.log(curso.aprovadosReprovados()) //Testando a aprovação de todos os alunos