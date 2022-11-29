let botaoAdicao = document.getElementById("btAdicao")
let botaoSubtracao = document.getElementById("btSubtracao")



function efetuarCompra(){

    compras = JSON.parse(localStorage.getItem("COMPRA"))
    addBotao = JSON.parse(localStorage.getItem("Tamanho"))
    time = JSON.parse(localStorage.getItem("Camisa"))
    addVariacao = JSON.parse(localStorage.getItem("VariacaoDaCamisa"))

    let carrinho = {

        camisaObjeto: "",
        variacaoObjeto: "",
        tamanhoObjeto: "",
        quantidadeObjeto: "",

    }

    carrinho.tamanhoObjeto = addBotao
    carrinho.camisaObjeto = time
    carrinho.variacaoObjeto = addVariacao



    compras.push(carrinho)
    
    alert(carrinho)

    localStorage.setItem("COMPRA", JSON.stringify(compras))
}