

const saudacao = document.getElementById("saudacao")

const horaMomento = new Date().getHours()
const nome = "Christian"

if (horaMomento < 12) {
    saudacao.innerText = "Bom dia"
} else if (horaMomento > 17) {
    saudacao.innerText = "Boa Noite"
} else{
    saudacao.innerText = "Boa Tarde"}

for (let i = 0; i < 10; i ++) {
    console.log(i)
}

const lista = ["Chris 1", "Chris 2", "Chris 3", "Chris 4"]

//for (let i = 0; i < lista.length; i ++) {
   // console.log(lista[i])
//}

//let i = 0;

//while (i<10){
   // console.log(i)
   // i++
//}

//let i2 = 0;

//while (i2<10){
   // console.log(i)
    //i2 = i + 2

//}

function concatenaUM (texto, index){
    alert(index+1 + "-" + texto)
}

lista.forEach(concatenaUM)