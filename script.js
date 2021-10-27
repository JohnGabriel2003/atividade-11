function rendimento() {
    const juro = 0.52;

    let valor = parseFloat(prompt("Digite o valor que irá aplicar: "));
    let meses = parseInt(prompt("Digite a quantidade de meses a aplicar: "));

    let rend = (valor * juro) * meses;

    alert("Seus R$",valor," ao longo de ",meses,"meses renderam R$",rend);
}