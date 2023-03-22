// PASSOS 1 e 2

class Aluno { //criação de objeto
    constructor (nome, nFaltas, notas){
        this.nome = nome
        this.nFaltas = nFaltas
        this.notas = notas
    }
    calcMedia () { //criação método calcMedia
        let nota = 0;

        for (let i = 0; i < (this.notas).length; i++) {
            nota += (this.notas)[i];
        }
        return(nota / (this.notas).length).toFixed(1);
    }
    faltas () { // criação método faltas+1
        return this.nFaltas += 1;
    }
}

const aluno1 = new Aluno('André', 3, [9, 5, 10]); //criação de alunos
const aluno2 = new Aluno('Juliana', 1, [8, 8, 8]);
const aluno3 = new Aluno('Claudia', 5, [7.3, 10, 10]);
const alunos = [];

alunos.push(aluno1,aluno2,aluno3)

console.log(aluno1)

aluno1.faltas() //faltas do aluno1
console.log(aluno1)

console.log(aluno3.calcMedia()) //calc média do aluno1


const curso = { // PASSO 3
    curso: 'CTD',
    notaAprovacao: 6,
    maxFaltas: 5,
    listaAlunos: alunos,

    addAluno(nome, nFaltas, notas) { // PASSO 4
        let novoAluno = new Aluno(nome, nFaltas, notas);
        this.listaAlunos.push(novoAluno)
    },

    aprovacao (aluno) { // PASSO 5
        let nota = aluno.calcMedia()
        if (aluno.nFaltas == curso.maxFaltas && nota >= curso.notaAprovacao * 1.1) {
            let aprovado = true
            return aprovado
        } else if (aluno.nFaltas < curso.maxFaltas && nota >= curso.notaAprovacao) {
        return true
        } else{
        return false
        }
    },

    resultadoAlunos(){ // PASSO 6
        let resultado = [];
        this.listaAlunos.forEach((alunos, index) =>{
          resultado[index] = this.aprovacao(alunos);
          return resultado
        });
        return resultado 
      }
}

curso.addAluno('Jonas', 7, [5.3,9,7])

console.log(curso.aprovacao(aluno3))
console.log(curso.listaAlunos)

console.log(curso.resultadoAlunos())