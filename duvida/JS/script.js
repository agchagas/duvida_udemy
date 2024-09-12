
/* SOMENTE NÚMERO INTEIRO NO CAMPO Qtd */

document.getElementById('Qtd').addEventListener('input', function (event) {
    // Remove qualquer caractere fazendo usuario digitar somente número inteiro
    this.value = this.value.replace(/[^0-9]/g, '');
});




/* CÁLCULO  */

let Qtd = document.getElementById("Qtd");

Qtd.addEventListener('blur', function () {

    let Qtd = document.getElementById("Qtd").value;
    let ValorUnitario = document.getElementById('ValorUnitario').value;

    if (ValorUnitario !== "") {
        let linha1Total = 0;
        Total = ValorUnitario * Qtd;
        document.getElementById("Total").value = linha1Total;
    }
});

let txtValorUnitario = document.getElementById("ValorUnitario");

ValorUnitario.addEventListener('blur', function () {

    let Qtd = document.getElementById("Qtd").value;
    let ValorUnitario = document.getElementById('ValorUnitario').value;


    let ValorUnitarioTruncado = ValorUnitario;
    document.getElementById("ValorUnitario").value = ValorUnitarioTruncado;

    if (Qtd !== "") {
        let Total = 0;
        Total = parseFloat(ValorUnitarioTruncado * Qtd).toFixed(2);
        document.getElementById("Total").value = Total;
    }

});

let txtTotalLinha = document.getElementById("Total");

txtTotalLinha.addEventListener('blur', function () {

    let Qtd = document.getElementById("Qtd").value;
    let ValorUnitario = document.getElementById('ValorUnitario').value;

    if (txtQtd !== "" && ValorUnitario !== "") {
        let linha1Total = 0;
        linha1Total = ValorUnitario * txtQtd;
        document.getElementById("Total").value = linha1Total;
    }
});