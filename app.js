/*<script>
let x = 5;
let y = 2;
let z = x + y;
document.getElementById("demo").innerHTML = z;
A innerText
propriedade define ou retorna o conteúdo de 
texto de um elemento.
</script>*/
/*
/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
      3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"

/*console.log(médiaDoAluno(array));

 function médiaDoAluno(notas){
    let soma=0;
    for(let nota of notas)
        (soma+= nota); 
    !!!!Esta função foi trocada por outra 
    com array, pois deixa o código mais limpo!!!
    }
    
    Nova função denominada genérica
    function médiaDoAluno(notas);*/


/* const x = function (a, b) {return a * b};
const somar= num1soma + num2Soma
const subtrair= num1Sub + num2Sub
const multiplicar=num1mult + num2mult
const dividir= num1div + num2div*/

/*parseFloat análise flutuante
function parseFloat(string: string): number
Converts a string to a floating-point number.

@param string — A string that contains a floating-point number.*
const resultado document.createElement<b>, <strong>*/


//Projeto 1



const p= document.getElementById("resultadosoma")
const resulatdo= document.createElement(strong)
'resultado'
function somar(soma) {
  const soma = num1soma + num2soma
  const num1soma = parseFloat(document.querySelector("#num1soma").value)
  const num2soma = parseFloat(document.querySelector("#num2soma").value)
  document.getElementById('#resultadosoma').setAttribute('id', 'resultado')
  const p= document.getElementById("resultadosoma")
  const resulatdo= document.createElement(strong)
  return 'resultado'; innerHtml=total
}
buttoncalc.addEventListener('onclick', 'resultadosoma')

function subtrair(subtrair) {
  const subtrair = num1sub - num2sub
  const num1sub = parseFloat(document.querySelector("#num1sub").value)
  const num2sub = parseFloat(document.querySelector("#num2sub").value)
  document.getElementById('#resultadosub').setAttribute('id', 'resultado')
  return
};

function multiplicar(multiplicar) {
  const multiplicar = num1mult * num2mult
  const num1mult = parseFloat(document.querySelector("#num1mult").value)
  const num2mult = parseFloat(document.querySelector("#num2mult").value)
  document.getElementById('#resultadomult').setAttribute('id', 'resultado')
  return num1mult * num2mult
};


function dividir(dividir) {
  const dividir = num1div + num2div
  const num1div = parseFloat(document.querySelector("#num1div").value)
  const num2div = parseFloat(document.querySelector("#num2div").value)
  document.getElementById('#resultadodiv').setAttribute('id', 'resultado')
  return num1div / num2div
}
;


//projeto 2


let res = document.querySelector('div#resultado')
let a = (document.getElementById('aluno').value)
let b = (document.getElementById('matricula').value)
let c = (document.getElementById('turma').value)

const array_media = [nota1, nota2, nota3, nota4];




function mediaDoAluno() {
  if (media <= 0) return "Infelizmente você zerou a prova"
  if (media <= 3) return "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
  if (media <= 5.9) return "Você obteve media {nota}! Falta pouco para a média."
  if (media <= 7) return "Você está na média com {nota}"
  if (media <= 9.9) return "Notão! Sua média é {nota}!"
  if (media <= 10) return "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
}

