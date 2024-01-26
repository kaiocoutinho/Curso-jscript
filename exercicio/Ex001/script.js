function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >= 0 && hora < 12){
    img.src = 'imagens/dia.png'
    document.body.style.background = 'rgb(240, 233, 133)'
} 
  else if (hora >= 12 && hora <= 18){
    img.src = 'imagens/tarde.png'
    document.body.style.background = 'rgb(235, 132, 91)'
} else{
    img.src = 'imagens/noite.png'
    document.body.style.background = 'rgb(1, 2, 68)'
}
}