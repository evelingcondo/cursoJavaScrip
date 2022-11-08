//function contarvocales(texto){retur cantidadvocale
let texto='eucalipto'
let contador=0
for(let i=0;i<texto.length;i++){
    switch(texto[i]){
        case 'a' :case'e':case'i':case'o':case'u':
            ++contador
    }
}
console.log(contador)

    
    


//function calculadora(num1,num2,operacion){retur total}
//calculadora(45,12,'resta')//33

function calcular (num1,num2,operacion){
    if(operacion=="suma"){
        total=num1+num2
    }
    if(operacion=="resta"){
        total=num1-num2
    }
    if(operacion=="multiplicar"){
        total=num1*num2
    }
    if (operacion=="divicion"){
        total=num1/num2
    }
    return total
}
console.log(calcular(45,12,"divicion"))

