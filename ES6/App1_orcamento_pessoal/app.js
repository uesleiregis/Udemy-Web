
  class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
      this.ano = ano
      this.mes = mes
      this.dia = dia
      this.tipo = tipo
      this.descricao = descricao
      this.valor = valor
    }
  }


  function cadastrarDespesa(){
  let ano = document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo = document.getElementById('tipo')
  let descricao = document.getElementById('descricao')
  let valor = document.getElementById('valor')

  //obs: pegar a referência para o elemento em vez de pegar só o valor
  // pode ser útil caso precise de algum atributo ou método dentro do objeto posteriormente
// console.log(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

let despesa = new Despesa(ano.value,
  mes.value, 
  dia.value, 
  tipo.value, 
  descricao.value, 
  valor.value
  )

  gravar(despesa)
}

function gravar(d){
  localStorage.setItem('despesa', JSON.stringify(d))

  // retorna um objeto de manipulação do localStorage do browser
  // temos acesso a alguns métodos, como : setItem('IDENTIF. DO OBJETO ARMAZ', 'DADO JASON A ARMAZ')
  // preciso converter o objeto literal em notação JSON.


  //JSON.stringfy(): JSON é um método nativo do JS.
  // usando a função JSON.stringify(PARAMETRO A CONVERTER PARA JSON)
}


