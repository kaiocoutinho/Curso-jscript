function clicar(){
var n1 = document.getElementById('txt1')
var numero = Number(n1.value)
if(numero <= 10){
    document.body.style.backgroundColor = 'white'
}
else if(numero <= 20){
    document.body.style.backgroundColor = 'blue'
}
else if (numero <= 30){
    document.body.style.backgroundColor = 'brown'
}
}
    
