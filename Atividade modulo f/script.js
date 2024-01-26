var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []
function isNumero (n){
   if(Number(n) >= 1 && Number(n) <= 100){
    return true
   }else{
    return false
   }
}
function inLista(n, L){
    if(L.indexOf(Number(n)) != -1){
    return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))  //adionando valores dentro do vetor.
        var item = document.createElement('option') //CRIEI A TAG OPTION PELO JS
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('Valor inválido ou já encotrado na lista.')
    }
    num.value = ''
    num.focus()  //FORMATAÇAO PARA QUANDO CLICAR EM ADICIONAR O NUMERO N FICAR NA CAIXA
}

function finalizar(){
    if(valores.length == 0 ){
        alert('Adicione valores antes de finalizar.')
    }else{
        var total = valores.length //Para saber quantos valores o vetor tem
        var maior = valores[0]
        var menor = valores [0]
        var soma =  0
        var media = 0

        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }        //ESSES DOIS IF VAO ANALISAR TODOS OS NUMEROS PARA VER QUAL O MAIO E O MENOR.
        } 
        var media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}
}