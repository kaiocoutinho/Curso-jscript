function verificar(){
  var data = new Date()
  var ano = data.getFullYear() /*  VAI PEGAR O ANO COM OS 4 NUMEROS  */
  var fano = document.getElementById('txt1')
  var res = document.getElementById('res')
  if(fano.value.length == 0 || Number(fano.value) > ano){
    alert('Verifique os dados!')
     
}else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if(fsex[0].checked)//SE FOR MARCADO HOMEM
   {
    genero = 'Homem'
    if(idade >= 0 && idade < 5 ){
    img.setAttribute('src','Imagens/bebe-homem.png')
    }
    else if(idade <= 13){
      img.setAttribute('src', 'Imagens/criança-homem.png')
    }else if (idade <= 22){
      img.setAttribute('src', 'Imagens/jovem-homem.png')
    }else if (idade <= 45){
      img.setAttribute('src', 'Imagens/homem-adulto.png')
    }else{
      img.setAttribute('src', 'Imagens/homem-idoso.png')
    }

   }else if (fsex[1].checked)//SE FOR MARCADO MULHER
   {
    genero = 'Mulher'
    if(idade >= 0 && idade <5){
      img.setAttribute('src', 'Imagens/bebe-mulher.png')
    }
   else if(idade <= 13){
    img.setAttribute('src', 'Imagens/criança-mulher.png')
  }else if (idade <= 22){
    img.setAttribute('src', 'Imagens/jovem-mulher.png')
  }else if (idade <= 45){
    img.setAttribute('src', 'Imagens/mulher-adulta.png')
  }else{
    img.setAttribute('src', 'Imagens/idosa-mulher.png')
  }
}
   res.style.textAlign = 'center';
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}