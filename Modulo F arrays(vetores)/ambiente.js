var num = [5, 8 , 9 ,3]
num[3]= 6  //COLOCA O VALOR 6 NA POSIÇÃO 3, LEMBRANDO QUE AS POSIÇÕES COMEÇAM DO 0.
num.push(7) // O JS CRIA MAIS UM ELEMENTO E ADICIONA O NUMERO QUE EU QUERO. SEMPRE O ULTIMO
var n1 = num.length // ATRIBUTO PARA VERMOS OS COMPRIMENTO DO ARRAY.
num.sort() // PEGA OS ELEMENTOS E COLOCA EM ORDEM CRESCENTE.
console.log(num)
console.log(`vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é  ${num[0]}`)
var pos = num.indexOf(5)  //para buscar um valor dentro do array / vetor
if (pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}
