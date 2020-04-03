let num = [5,8,2,9,3]
num.sort()
console.log(`Nosso vetor é o  ${num}`)
console.log(`o vetor tem ${num.length} elementos.`)
console.log(num[0])

// para adicionar mais um elemento
let a =[5,8,4]
console.log(a)
a[3] = 6 // [3] é a quarta posição, pois inicia no 0.
// para adicionar sem se preocupar como a ultima posição
a.push(7)
 console.log(a)

 // para saber o comprimento do vetor
 num.length
 // para ordenar os elementos 
 num.sort()
 
 let pos = num.indexOf(8)
 console.log(pos)