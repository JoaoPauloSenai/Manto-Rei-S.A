let imagemCompra = document.getElementById("img-miniatura-compra")
let nomeCompra = document.getElementById("compra-nome")
let tamanhoCompra = document.getElementById("compra-tamanho")
let valorCompra = document.getElementById("compra-valor")
let imagemCompra2 = document.getElementById("img-miniatura-compra2")
let nomeCompra2 = document.getElementById("compra-nome2")
let tamanhoCompra2 = document.getElementById("compra-tamanho2")
let valorCompra2 = document.getElementById("compra-valor2")
let imagemCompra3 = document.getElementById("img-miniatura-compra3")
let nomeCompra3 = document.getElementById("compra-nome3")
let tamanhoCompra3 = document.getElementById("compra-tamanho3")
let valorCompra3 = document.getElementById("compra-valor3")
let imagemCompra4 = document.getElementById("img-miniatura-compra4")
let nomeCompra4 = document.getElementById("compra-nome4")
let tamanhoCompra4 = document.getElementById("compra-tamanho4")
let valorCompra4 = document.getElementById("compra-valor4")
let imagemCompra5 = document.getElementById("img-miniatura-compra5")
let nomeCompra5 = document.getElementById("compra-nome5")
let tamanhoCompra5 = document.getElementById("compra-tamanho5")
let valorCompra5 = document.getElementById("compra-valor5")
let compraResultado = document.getElementById("valorCompra")

let comprasCarrinho = []
let lista = ""
let valorTotal = 0




    comprasCarrinho = JSON.parse(localStorage.getItem("COMPRA"))
    if(comprasCarrinho == null){

        comprasCarrinho = []

    }

    let carrinho = {

        camisaObjeto: "",
        variacaoObjeto: "",
        tamanhoObjeto: "",
        valorObjeto: ""
    }



    

function compraEfetuada(){

vetorCamisa = []
vetorVariacao = []
vetorTamanho = []
vetorValor = []
    
        for (i=0; i < comprasCarrinho.length; i++) {

            vetorCamisa.push(comprasCarrinho[i].camisaObjeto)
            vetorVariacao.push(comprasCarrinho[i].variacaoObjeto)
            vetorTamanho.push(comprasCarrinho[i].tamanhoObjeto)
            vetorValor.push(comprasCarrinho[i].valorObjeto)

            

        }

        
        
        for (i=0; i < comprasCarrinho.length; i++) {
            

           switch(i) {

                case 0:
                    
                    nomeCompra.innerHTML = vetorCamisa[i]
                    tamanhoCompra.innerHTML = vetorTamanho[i]
                    valorCompra.innerHTML = vetorValor[i]
                    valorTotal = valorTotal + vetorValor[i]

                    compraResultado.innerHTML = valorTotal
                
                    for ( j = 0; j < camisas.length; j++) {
                        
                        if(vetorCamisa[i] == camisas[j].descricaoTime){

                            imagemCompra.src = camisas[j].miniaturaUm
                            
                        }
                    }

                    break

                case 1:
                    
                    nomeCompra2.innerHTML = vetorCamisa[i]
                    tamanhoCompra2.innerHTML = vetorTamanho[i]
                    valorCompra2.innerHTML = vetorValor[i]
                    valorTotal = valorTotal + vetorValor[i]

                    compraResultado.innerHTML = valorTotal
                    
                    for ( j = 0; j < camisas.length; j++) {
                        
                        if(vetorCamisa[i] == camisas[j].descricaoTime){

                            
                            imagemCompra2.src = camisas[j].miniaturaUm
                            
                        }
                    }
           
                    break

                case 2:
                    
                    nomeCompra3.innerHTML = vetorCamisa[i]
                    tamanhoCompra3.innerHTML = vetorTamanho[i]
                    valorCompra3.innerHTML = vetorValor[i]
                    valorTotal = valorTotal + vetorValor[i]
                    
                    compraResultado.innerHTML = valorTotal

                    for ( j = 0; j < camisas.length; j++) {
                        
                        if(vetorCamisa[i] == camisas[j].descricaoTime){

                            imagemCompra3.src = camisas[j].principalImg
                            
                        }
                    }

                    break

                case 3:
                   
                    nomeCompra4.innerHTML = vetorCamisa[i]
                    tamanhoCompra4.innerHTML = vetorTamanho[i]
                    valorCompra4.innerHTML = vetorValor[i]
                    valorTotal = valorTotal + vetorValor[i]
                    
                    compraResultado.innerHTML = valorTotal

                    for ( j = 0; j < camisas.length; j++) {
                        
                        if(vetorCamisa[i] == camisas[j].descricaoTime){

                            imagemCompra4.src = camisas[j].miniaturaUm
                            
                        }
                    }

                    break

                case 4:
                    
                    nomeCompra5.innerHTML = vetorCamisa[i]
                    tamanhoCompra5.innerHTML = vetorTamanho[i]
                    valorCompra5.innerHTML = vetorValor[i]
                    valorTotal = valorTotal + vetorValor[i]
                    
                    compraResultado.innerHTML = valorTotal

                    for ( j = 0; j < camisas.length; j++) {
                        
                        if(vetorCamisa[i] == camisas[j].descricaoTime){

                            imagemCompra5.src = camisas[j].miniaturaUm
                            
                        }
                    }
                    
                    break
           }
                    
        }

        

        
}

