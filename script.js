const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um sistema operacional",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
    respostas: [
      "Exibir uma mensagem de alerta",
      "Registrar informações no console",
      "Iniciar uma animação na página",
    ],
    correta: 1
  },
  {
    pergunta: "Como declarar uma variável em JavaScript?",
    respostas: [
      "let myVar = 10;",
      "const myVar = 'Hello';",
      "both A e B estão corretas",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Não há diferença, ambos fazem a mesma coisa",
      "==' compara apenas valores, '===' compara valores e tipos",
      "==' compara apenas tipos, '===' compara valores e tipos",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Uma biblioteca popular de JavaScript",
      "Um modelo de objeto que representa a estrutura de uma página web",
      "Um tipo de variável em JavaScript",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "Concatenar strings",
      "Realizar uma operação lógica 'E'",
      "Realizar uma operação lógica 'OU'",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um bloco de código reutilizável",
      "Uma variável global",
    ],
    correta: 1
  },
  {
    pergunta: "Como comentar uma única linha em JavaScript?",
    respostas: [
      "// Comentário",
      "/* Comentário */",
      "# Comentário",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de criar um loop 'for' em JavaScript?",
    respostas: [
      "for (i = 0; i < 5; i++)",
      "for (let i = 1; i <= 10; i++)",
      "for (const x of array)",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Uma função de manipulação de strings",
      "Uma notação para estruturar dados no formato de objeto",
      "Uma biblioteca de gráficos",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' +perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) =>{
      const estaCorreta = event.target.value == item.correta //true or false

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
quiz.appendChild(quizItem)
}
