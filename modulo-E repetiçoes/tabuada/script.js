function gerar(){
    var num = document.getElementById('txtnum')
    var resultado = document.getElementById('seltab')
    if(numero == 0){
    alert('Verifique os dados e tente novamente!') //verificaçao dos dados
}else{
      var numero = Number(num.value) //converti a string para numero
      var c = 1
      resultado.innerHTML = ''
      while(c <= 10){
        var item = document.createElement('option') //COMO SE EU TIVESSE CRIADO A TAG EM HTML E COLOCADO EM UMA VARIAVEL.
        item.text = `${numero} x ${c} = ${numero*c}`
        resultado.appendChild(item)
        c++
      }
    }
}

