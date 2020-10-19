console.log(`Trabalhando com Listas`);

const listaDeItens = new Array (
    `Mouse`,
    `Teclado`,
    `Monitor`
);

listaDeItens.push(`oculos vr`);

console.log(listaDeItens);

listaDeItens.splice(0,1);

console.log(listaDeItens);
console.log(listaDeItens[2]);