var agora = new Date()
var hora = agora.getHours() //COMO PEGAR A HORA ATUAL DO SISTEMA
console.log(`Agora sao ${hora} Horas.`)
if (hora <= 12 && hora >= 6){
    console.log('Bom dia')
}else if (hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}