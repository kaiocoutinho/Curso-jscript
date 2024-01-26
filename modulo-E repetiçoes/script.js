function clicar(){
    var começo = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2') 
    var passo = document.getElementById('txtn3')
    var res = document.getElementById('msg')
if(começo.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('Verifique os dados e tente novamente')
    res.innerHTML = 'Impossível contar'
}else{
    res.innerHTML = 'Contando: <br>'
    var n1 = Number(começo.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)
    if(n3 == 0){
        alert('PASSO INVÁLIDO! CONSIDERANDO PASSO 1')
        n3 = 1
    }
    if(n1 < n2){ //CONTAGEM PROGRESSIVA
    for(var c = n1; c <= n2; c += n3)
    res.innerHTML += ` ${c} \u{1F449}`
   } else{  //CONTAGEM REGRESSIVA
    for(var c = n1; c >= n2; c -= n3){
        res.innerHTML += `${c} \u{1F449}`
    }
   }
   res.innerHTML += `\u{1F3C1}`
}
   
}


 
 

  







