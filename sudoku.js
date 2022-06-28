

function resolver(tabuleiro) {
    
    if (resolvido(tabuleiro)) {
        return tabuleiro;
    } else {
        const possibilidades = proximosTabuleiros(tabuleiro);
        
        const tabuleirosValidos = mantemOsValidos(possibilidades);
        return buscaSolucao(tabuleirosValidos);
    }
}

function buscaSolucao(tabuleiros) {
    if (tabuleiros.length < 1) {
        return false;
    } else {
        var primeiro = tabuleiros.shift();
        const testaCaminho = resolver(primeiro);
        if (testaCaminho != false) {
            return testaCaminho;
        } else {
            return buscaSolucao(tabuleiros);
        }
    }
}

function resolvido(tabuleiro) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (tabuleiro[i][j] === null) {
                return false;
            }
        }
    }
    return true;
}

function proximosTabuleiros(tabuleiro) {
    var res = [];
    const primeiroVazio = encontraEspacoVazio(tabuleiro);
    if (primeiroVazio != undefined) {
        const y = primeiroVazio[0];
        const x = primeiroVazio[1];
        for (var i = 1; i <= 9; i++) {
            var novoTabuleiro = [...tabuleiro];
            var linha = [...novoTabuleiro[y]];
            linha[x] = i;
            novoTabuleiro[y] = linha;
            res.push(novoTabuleiro);
        }
    }
    return res;
}

function encontraEspacoVazio(tabuleiro) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (tabuleiro[i][j] == null) {
                return [i, j];
            }
        }
    }
}

function mantemOsValidos(tabuleiros) {
    return tabuleiros.filter(v => tabuleiroValido(v));
}

function tabuleiroValido(tabuleiro) {
    return linhaBoa(tabuleiro) && colunaBoa(tabuleiro) && caixasBoas(tabuleiro);
}

function linhaBoa(tabuleiro) {
    for (var i = 0; i < 9; i++) {
        var cur = [];
        for (var j = 0; j < 9; j++) {
            if (cur.includes(tabuleiro[i][j])) {
                return false;
            } else if (tabuleiro[i][j] != null) {
                cur.push(tabuleiro[i][j]);
            }
        }
    }
    return true;
}

function colunaBoa(tabuleiro) {
    for (var i = 0; i < 9; i++) {
        var cur = [];
        for (var j = 0; j < 9; j++) {
            if (cur.includes(tabuleiro[j][i])) {
                return false;
            } else if (tabuleiro[j][i] != null) {
                cur.push(tabuleiro[j][i]);
            }
        }
    }
    return true;
}


function caixasBoas(tabuleiro) {
    const coodenadasCaixa = [
        [0, 0], [0, 1], [0, 2], 
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2]
    ];

    for (var y = 0; y < 9; y += 3) {
        for (var x = 0; x < 9; x += 3) {
            var cur = [];
            for (var i = 0; i < 9; i++) {
                var coordenadas = [...coodenadasCaixa[i]];
                coordenadas[0] += y;
                coordenadas[1] += x;
                if (cur.includes(tabuleiro[coordenadas[0]][coordenadas[1]])) {
                    return false;
                } else if (tabuleiro[coordenadas[0]][coordenadas[1]] != null) {
                    cur.push(tabuleiro[coordenadas[0]][coordenadas[1]]);
                }
            }
        }
    }
    return true;
}
