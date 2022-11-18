let pergunta = prompt('Deseja comer uma coxinha? \n S = SIM \n N = NÃO').toLocaleLowerCase()
let conta = Number( 0 )

while(pergunta !== 'n'){
    if(pergunta === 's'){
        conta = conta + 2.50
    }else{
       console.log('valor incorreto, digite sim ou nao!')
    }
    
    pergunta = prompt('Deseja mais uma coxinha? \n S = SIM \n N = NÃO').toLocaleLowerCase()
}
console.log(`Total da sua conta é dê: R$ ${conta}`) 