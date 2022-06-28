const v = null;
let resolverEntrada = () => {
    const tabuleiro = [
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v],
        [v, v, v, v, v, v, v, v, v]
    ];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let linha = document.getElementsByClassName("row" + i)[0];
            let elemento = linha.cells[j].querySelector('input').value;

            if (elemento) {
                if (Number.isInteger(parseInt(elemento))|| elemento == "") {
                    tabuleiro[i][j] = parseInt(elemento);
                }
                else {
                    return window.alert("Não é possível resolver, existem elementos não numéricos");
                }
            }

        }
    }
    let tabuleiroResolvido = resolver(tabuleiro);

    if (tabuleiroResolvido) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let linha = document.getElementsByClassName("row" + i)[0];
                let elemento = linha.cells[j].querySelector('input').value = tabuleiroResolvido[i][j];
            }
        }
    }
    else {
        window.alert("Não é possível resolver, existem números conflitantes");
    }

}

let limparEntrada = () => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let linha = document.getElementsByClassName("row" + i)[0];
            let elemento = linha.cells[j].querySelector('input').value = null;
        }
    }
}


const botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", () => {
    limparEntrada()
});



const botaoResolver = document.getElementById("resolver");
botaoResolver.addEventListener("click", () => {
    resolverEntrada()
});
