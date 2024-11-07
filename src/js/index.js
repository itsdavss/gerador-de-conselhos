const botaoGerarConselho = document.getElementById('botao')

async function gerarConselho() {
    const dadosConselho = await conectarApi()
    preencherConselho(dadosConselho)
}

async function conectarApi() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    if (resposta.status != 200) return
    const objetoConselho = await resposta.json()
    return objetoConselho
}

async function preencherConselho(dadosConselho) {
    document.getElementById('numero-conselho').innerText = `advice #${dadosConselho.slip.id}`
    document.getElementById('descricao-conselho').innerText = `"${dadosConselho.slip.advice}"`
}

botaoGerarConselho.addEventListener('click', gerarConselho)
gerarConselho()