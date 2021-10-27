function rendimento() {
    const juro = 0.52;

    let valor = parseFloat(prompt("Digite o valor que irá aplicar: "));
    let meses = parseInt(prompt("Digite a quantidade de meses a aplicar: "));

    let rend = ((valor * juro)/100) * meses;

    alert(rend);
}