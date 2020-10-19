console.log(`Trabalhando com condicionais`);
const idadeComprador = 15;
console.log("Destionos possíveis:");

const listaDeItens = new Array (
    `Mouse`,
    `Teclado`,
    `Monitor`
);
if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeItens.splice(1,1);
}

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeItens.splice(1,1);
}else{
    console.log("Não é maior de idade e não posso vender");
}