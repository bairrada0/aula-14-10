let idade = 16;

if (idade >= 18) {
     console.log(" maior de idade ");
} else {
    console.log(" menor de idade ");
}



let pontos = 500;
let anos_cliente = 2;

if ( pontos <= 99 ) {
    console.log(" cliente bronze ")
} else if ( pontos <= 100 && pontos <= 499){
    console.log(" cliente prata ")
} else if ( pontos <= 500 && pontos <= 999){
    console.log(" cliente ouro ")
} else if ( pontos <= 1000 && anos_cliente > 1){
    console.log(" cliente diamante ")
}



for( let i = 50; i >= 50; i--){ 
    console.log(i)
}












let numero = 4

for( let i = 0; i < 10; i++) {
    console.log(" resultado" + numero + "x" + i + "=" + numero * i);
}




let numero1 = Number(prompt("digite o primeiro numero: "))
let numero2 = Number(prompt("digite o segundo numero"))
let operaçao = prompt("informe a operaçao: \n[]")

 if (operaçao =="+"){
     alert("resultado" + numero1 + "+" + "=" + numero1 + numero2)
 }
 else if (operaçao == "-"){
     alert("resultado" + numero1 + "-" + "=" + numero1 - numero2)
 }
 else if (operçao == "*"){
     alert("resultado" + numero1 + "*" + "=" + numero1 * numero2)
 }
 else if (operaçao == "/"){
     alert( "resultado" + numero1 + "/" + "=" + numero1 / numero2)
 }