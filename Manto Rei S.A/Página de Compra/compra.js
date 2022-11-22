let miniaturaUm = document.getElementById("miniatura1") 
let miniaturaDois = document.getElementById("miniatura2") 
let miniaturaTres = document.getElementById("miniatura3") 
let principalImg = document.getElementById("img-principal")

let camisaNome = document.getElementById("nome-camisa")
let camisaPrecoCortado = document.getElementById("preco-camisa-cortado")
let camisaPreco = document.getElementById("preco-camisa")
let descricaoTime = document.getElementById("descricao-time")
let descricaoMarca = document.getElementById("marca")
let descricaoMaterial = document.getElementById("material")
let descricaoGarantia = document.getElementById("garantia")
let descricaoPatrocinio = document.getElementById("patrocinio")
let descricaoCor = document.getElementById("cor-predominante")

let similares1 = document.getElementById("produtos-similares-um")
let similares2 = document.getElementById("produtos-similares-dois")
let similares3 = document.getElementById("produtos-similares-tres")
let similares4 = document.getElementById("produtos-similares-quatro")


let camisas = []
let camisaNaTela = null

carregamentoInicial()

function cadastrarCamisa(){

    camisa = { 

        miniaturaUm: `../IMG/camisa${time}1.png`,        
        miniaturaDois: `../IMG/camisa${time}2.png`,        
        miniaturaTres: `../IMG/camisa${time}3.png`,        
        principalImg: `../IMG/camisa${time}1.png`
    }


    camisa.push(camisas)
}

function carregamentoInicial(){

    let alemanha = { 

        miniaturaUm: `../IMG/camisaAlemanha1.png`,        
        miniaturaDois: `../IMG/camisaAlemanha2.png`,        
        miniaturaTres: `../IMG/camisaAlemanha3.png`,        
        principalImg: `../IMG/camisaAlemanha1.png`,

        camisaNome: "CAMISA da ALEMANHA",
        camisaPrecoCortado: "R$199,99",
        camisaPreco: "R$179,99",

        descricaoTime: "Alemanha",
        descricaoMarca: "Adidas",
        descricaoMaterial: "Poliéster",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Branco",

        similares1: "../IMG/camisaFlamengo1.png",
        similares2: "../IMG/camisaArgentina1.png",
        similares3: "../IMG/camisaInternacional1.png",
        similares4: "../IMG/camisaArgentina3.png",

        variacao: 1
    }

        camisas.push(alemanha)


    let alemanha2 = { 

        miniaturaUm: `../IMG/camisaAlemanha1.png`,        
        miniaturaDois: `../IMG/camisaAlemanha2.png`,        
        miniaturaTres: `../IMG/camisaAlemanha3.png`,        
        principalImg: `../IMG/camisaAlemanha2.png`,

        camisaNome: "CAMISA da ALEMANHA",
        camisaPrecoCortado: "R$199,99",
        camisaPreco: "R$179,99",

        descricaoTime: "Alemanha2",
        descricaoMarca: "Adidas",
        descricaoMaterial: "Poliéster",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Preto",

        similares1: "../IMG/camisaFlamengo1.png",
        similares2: "../IMG/camisaArgentina1.png",
        similares3: "../IMG/camisaInternacional1.png",
        similares4: "../IMG/camisaArgentina3.png",
        
        variacao: 2
    }

        camisas.push(alemanha2)



    let alemanha3 = { 

        miniaturaUm: `../IMG/camisaAlemanha1.png`,        
        miniaturaDois: `../IMG/camisaAlemanha2.png`,        
        miniaturaTres: `../IMG/camisaAlemanha3.png`,        
        principalImg: `../IMG/camisaAlemanha3.png`,

        camisaNome: "CAMISA da ALEMANHA",
        camisaPrecoCortado: "R$199,99",
        camisaPreco: "R$179,99",

        descricaoTime: "Alemanha3",
        descricaoMarca: "Adidas",
        descricaoMaterial: "Poliéster",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Vinho",

        similares1: "../IMG/camisaFlamengo1.png",
        similares2: "../IMG/camisaArgentina1.png",
        similares3: "../IMG/camisaInternacional1.png",
        similares4: "../IMG/camisaArgentina3.png",
        
        variacao: 3
    }

        camisas.push(alemanha3)


    let argentina = { 

        miniaturaUm: `../IMG/camisaArgentina1.png`,        
        miniaturaDois: `../IMG/camisaArgentina2.png`,        
        miniaturaTres: `../IMG/camisaArgentina3.png`,        
        principalImg: `../IMG/camisaArgentina1.png`,

        camisaNome: "CAMISA da ARGENTINA",
        camisaPrecoCortado: "R$199,99",
        camisaPreco: "R$179,99",

        descricaoTime: "Argentina",
        descricaoMarca: "Adidas",
        descricaoMaterial: "Poliéster",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Azul claro",

        similares1: "../IMG/camisaFlamengo1.png",
        similares2: "../IMG/camisaArgentina1.png",
        similares3: "../IMG/camisaInternacional1.png",
        similares4: "../IMG/camisaArgentina3.png",
        
        variacao: 1
    }

        camisas.push(argentina)

        let argentina2 = { 

            miniaturaUm: `../IMG/camisaArgentina1.png`,        
            miniaturaDois: `../IMG/camisaArgentina2.png`,        
            miniaturaTres: `../IMG/camisaArgentina3.png`,        
            principalImg: `../IMG/camisaArgentina2.png`,
    
            camisaNome: "CAMISA da ARGENTINA",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Argentina2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Azul claro",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(argentina2)

        let argentina3 = { 

            miniaturaUm: `../IMG/camisaArgentina1.png`,        
            miniaturaDois: `../IMG/camisaArgentina2.png`,        
            miniaturaTres: `../IMG/camisaArgentina3.png`,        
            principalImg: `../IMG/camisaArgentina3.png`,
    
            camisaNome: "CAMISA da ARGENTINA",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Argentina3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Azul claro",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(argentina3)

        let brasil = { 

            miniaturaUm: `../IMG/camisaBrasil1.png`,        
            miniaturaDois: `../IMG/camisaBrasil2.png`,        
            miniaturaTres: `../IMG/camisaBrasil3.png`,        
            principalImg: `../IMG/camisaBrasil1.png`,
    
            camisaNome: "CAMISA da ALEMANHA",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Brasil",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(brasil)
        
        
        let brasil2 = { 
    
            miniaturaUm: `../IMG/camisaBrasil1.png`,        
            miniaturaDois: `../IMG/camisaBrasil2.png`,        
            miniaturaTres: `../IMG/camisaBrasil3.png`,        
            principalImg: `../IMG/camisaBrasil2.png`,
    
            camisaNome: "CAMISA da Brasil",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Brasil2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(brasil2)
        
        
        
        let brasil3 = { 
    
            miniaturaUm: `../IMG/camisaBrasil1.png`,        
            miniaturaDois: `../IMG/camisaBrasil2.png`,        
            miniaturaTres: `../IMG/camisaBrasil3.png`,        
            principalImg: `../IMG/camisaBrasil3.png`,
    
            camisaNome: "CAMISA da Brasil",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Brasil3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(brasil3)

        let coreia = { 

            miniaturaUm: `../IMG/camisaCoreia1.png`,        
            miniaturaDois: `../IMG/camisaCoreia2.png`,        
            miniaturaTres: `../IMG/camisaCoreia3.png`,        
            principalImg: `../IMG/camisaCoreia1.png`,
    
            camisaNome: "CAMISA da Coreia do Sul",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Coreia",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(coreia)
        
        
        let coreia2 = { 
    
            miniaturaUm: `../IMG/camisaCoreia1.png`,        
            miniaturaDois: `../IMG/camisaCoreia2.png`,        
            miniaturaTres: `../IMG/camisaCoreia3.png`,        
            principalImg: `../IMG/camisaCoreia2.png`,
    
            camisaNome: "CAMISA da Coreia do Sul",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Coreia2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(coreia2)
        
        
        
        let coreia3 = { 
    
            miniaturaUm: `../IMG/camisaCoreia1.png`,        
            miniaturaDois: `../IMG/camisaCoreia2.png`,        
            miniaturaTres: `../IMG/camisaCoreia3.png`,        
            principalImg: `../IMG/camisaCoreia3.png`,
    
            camisaNome: "CAMISA da Coreia do Sul",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "coreia3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
        
            camisas.push(coreia3)

        let franca = { 

            miniaturaUm: `../IMG/camisaFranca1.png`,        
            miniaturaDois: `../IMG/camisaFranca2.png`,        
            miniaturaTres: `../IMG/camisaFranca3.png`,        
            principalImg: `../IMG/camisaFranca1.png`,
    
            camisaNome: "CAMISA da França",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Franca",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(franca)
        
        
        let franca2 = { 
    
            miniaturaUm: `../IMG/camisaFranca1.png`,        
            miniaturaDois: `../IMG/camisaFranca2.png`,        
            miniaturaTres: `../IMG/camisaFranca3.png`,        
            principalImg: `../IMG/camisaFranca2.png`,
    
            camisaNome: "CAMISA da França",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Franca2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(franca2)
        
        
        
        let franca3 = { 
    
            miniaturaUm: `../IMG/camisaFranca1.png`,        
            miniaturaDois: `../IMG/camisaFranca2.png`,        
            miniaturaTres: `../IMG/camisaFranca3.png`,        
            principalImg: `../IMG/camisaFranca3.png`,
    
            camisaNome: "CAMISA da França",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Franca3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(franca3)

        let holanda = { 

            miniaturaUm: `../IMG/camisaHolanda1.png`,        
            miniaturaDois: `../IMG/camisaHolanda2.png`,        
            miniaturaTres: `../IMG/camisaHolanda3.png`,        
            principalImg: `../IMG/camisaHolanda1.png`,
    
            camisaNome: "CAMISA da Holanda",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Holanda",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(holanda)
        
        
        let holanda2 = { 
    
            miniaturaUm: `../IMG/camisaHolanda1.png`,        
            miniaturaDois: `../IMG/camisaHolanda2.png`,        
            miniaturaTres: `../IMG/camisaHolanda3.png`,        
            principalImg: `../IMG/camisaHolanda2.png`,
    
            camisaNome: "CAMISA da Holanda",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Holanda2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(holanda2)
        
        
        
        let holanda3 = { 
    
            miniaturaUm: `../IMG/camisaHolanda1.png`,        
            miniaturaDois: `../IMG/camisaHolanda2.png`,        
            miniaturaTres: `../IMG/camisaHolanda3.png`,        
            principalImg: `../IMG/camisaHolanda3.png`,
    
            camisaNome: "CAMISA da Holanda",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Holanda3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(holanda3)



        let portugal = { 

            miniaturaUm: `../IMG/camisaPortugal1.png`,        
            miniaturaDois: `../IMG/camisaPortugal2.png`,        
            miniaturaTres: `../IMG/camisaPortugal3.png`,        
            principalImg: `../IMG/camisaPortugal1.png`,

            camisaNome: "CAMISA de Portugal",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "Portugal",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",

            variacao: 1
        }

            camisas.push(portugal)
        
        
        let portugal2 = { 

            miniaturaUm: `../IMG/camisaPortugal1.png`,        
            miniaturaDois: `../IMG/camisaPortugal2.png`,        
            miniaturaTres: `../IMG/camisaPortugal3.png`,        
            principalImg: `../IMG/camisaPortugal2.png`,

            camisaNome: "CAMISA de Portugal",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "Portugal2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }

            camisas.push(portugal2)
        
        
        
        let portugal3 = { 

            miniaturaUm: `../IMG/camisaPortugal1.png`,        
            miniaturaDois: `../IMG/camisaPortugal2.png`,        
            miniaturaTres: `../IMG/camisaPortugal3.png`,        
            principalImg: `../IMG/camisaPortugal3.png`,

            camisaNome: "CAMISA de Portugal",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "Portugal3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }

            camisas.push(portugal3)


        let barcelona = { 

            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
            principalImg: `../IMG/camisaBarcelona1.png`,
    
            camisaNome: "Camisa do Barcelona",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Barcelona",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(barcelona)
        
        
        let barcelona2 = { 
    
            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
            principalImg: `../IMG/camisaBarcelona1.png`,
    
            camisaNome: "Camisa do Barcelona",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Barcelona2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(barcelona2)
        
        
        
        let barcelona3 = { 
    
            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
            principalImg: `../IMG/camisaBarcelona1.png`,
    
            camisaNome: "Camisa do Barcelona",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Barcelona3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(barcelona3)


        let borussia = { 

            miniaturaUm: `../IMG/camisaBorussia1.png`,        
            miniaturaDois: `../IMG/camisaBorussia2.png`,        
            miniaturaTres: `../IMG/camisaBorussia3.png`,        
            principalImg: `../IMG/camisaBorussia1.png`,
    
            camisaNome: "Camisa do Borussia",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Borussia",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(borussia)
        
        
        let borussia2 = { 
    
            miniaturaUm: `../IMG/camisaBorussia1.png`,        
            miniaturaDois: `../IMG/camisaBorussia2.png`,        
            miniaturaTres: `../IMG/camisaBorussia3.png`,        
            principalImg: `../IMG/camisaBorussia2.png`,
    
            camisaNome: "Camisa do Borussia",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Borussia2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(barcelona2)
        
        
        
        let borussia3 = { 
    
            miniaturaUm: `../IMG/camisaBorussia1.png`,        
            miniaturaDois: `../IMG/camisaBorussia2.png`,        
            miniaturaTres: `../IMG/camisaBorussia3.png`,        
            principalImg: `../IMG/camisaBorussia1.png`,
    
            camisaNome: "Camisa do Borussia",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Borussia3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(borussia3)


        let liverpool = { 

            miniaturaUm: `../IMG/camisaLiverpool1.png`,        
            miniaturaDois: `../IMG/camisaLiverpool2.png`,        
            miniaturaTres: `../IMG/camisaLiverpool3.png`,        
            principalImg: `../IMG/camisaLiverpool1.png`,

            camisaNome: "Camisa do Liverpool",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "Liverpool",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",

            variacao: 1
        }

            camisas.push(liverpool)
        
        
        let liverpool2 = { 

            miniaturaUm: `../IMG/camisaLiverpool1.png`,        
            miniaturaDois: `../IMG/camisaLiverpool2.png`,        
            miniaturaTres: `../IMG/camisaLiverpool3.png`,        
            principalImg: `../IMG/camisaLiverpool2.png`,

            camisaNome: "Camisa do Liverpool",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "Liverpool2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }

            camisas.push(liverpool2)
        
        
        
        let livepool3 = { 

            miniaturaUm: `../IMG/camisaLiverpool1.png`,        
            miniaturaDois: `../IMG/camisaLiverpool2.png`,        
            miniaturaTres: `../IMG/camisaLiverpool3.png`,        
            principalImg: `../IMG/camisaLiverpool3.png`,

            camisaNome: "Camisa do Liverpool",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "Livepool3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }

            camisas.push(livepool3)

        let manchesterCity = { 

            miniaturaUm: `../IMG/camisaManCity1.png`,        
            miniaturaDois: `../IMG/camisaManCity2.png`,        
            miniaturaTres: `../IMG/camisaManCity3.png`,        
            principalImg: `../IMG/camisaManCity1.png`,
    
            camisaNome: "Camisa do Manchester City",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "ManchesterCity",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(manchesterCity)
        
        
        let manchesterCity2 = { 
    
            miniaturaUm: `../IMG/camisaManCity1.png`,        
            miniaturaDois: `../IMG/camisaManCity2.png`,        
            miniaturaTres: `../IMG/camisaManCity3.png`,        
            principalImg: `../IMG/camisaManCity2.png`,
    
            camisaNome: "Camisa do ManchesterCity",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "ManchesterCity2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(manchesterCity2)
        
        
        
        let manchesterCity3 = { 
    
            miniaturaUm: `../IMG/camisaManCity1.png`,        
            miniaturaDois: `../IMG/camisaManCity2.png`,        
            miniaturaTres: `../IMG/camisaManCity3.png`,        
            principalImg: `../IMG/camisaManCity3.png`,
    
            camisaNome: "Camisa do ManchesterCity",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "ManchesterCity3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(manchesterCity3)


        let milan = { 

            miniaturaUm: `../IMG/camisaMilan1.png`,        
            miniaturaDois: `../IMG/camisaMilan2.png`,        
            miniaturaTres: `../IMG/camisaMilan3.png`,        
            principalImg: `../IMG/camisaMilan1.png`,
    
            camisaNome: "Camisa do milan",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Milan",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
    
            variacao: 1
        }
    
            camisas.push(milan)
        
        
        let mila2 = { 
    
            miniaturaUm: `../IMG/camisaMilan1.png`,        
            miniaturaDois: `../IMG/camisaMilan2.png`,        
            miniaturaTres: `../IMG/camisaMilan3.png`,        
            principalImg: `../IMG/camisaMilan2.png`,
    
            camisaNome: "Camisa do milan",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Milan2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }
    
            camisas.push(mila2)
        
        
        
        let mila3 = { 
    
            miniaturaUm: `../IMG/camisaMilan1.png`,        
            miniaturaDois: `../IMG/camisaMilan2.png`,        
            miniaturaTres: `../IMG/camisaMilan3.png`,        
            principalImg: `../IMG/camisaMilan3.png`,
    
            camisaNome: "Camisa do milan",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Milan3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
    
            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }
    
            camisas.push(mila3)




        let psg = { 

            miniaturaUm: `../IMG/camisaPSG1.png`,        
            miniaturaDois: `../IMG/camisaPSG2.png`,        
            miniaturaTres: `../IMG/camisaPSG3.png`,        
            principalImg: `../IMG/camisaPSG1.png`,

            camisaNome: "Camisa do PSG",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "PSG",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",

            variacao: 1
        }

            camisas.push(psg)
        
        
        let psg2 = { 

            miniaturaUm: `../IMG/camisaPSG1.png`,        
            miniaturaDois: `../IMG/camisaPSG2.png`,        
            miniaturaTres: `../IMG/camisaPSG3.png`,        
            principalImg: `../IMG/camisaPSG2.png`,

            camisaNome: "Camisa do PSG",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "PSG2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 2
        }

            camisas.push(psg2)
        
        
        
        let psg3 = { 

            miniaturaUm: `../IMG/camisaPSG1.png`,        
            miniaturaDois: `../IMG/camisaPSG2.png`,        
            miniaturaTres: `../IMG/camisaPSG3.png`,        
            principalImg: `../IMG/camisaPSG1.png`,

            camisaNome: "Camisa do PSG",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",

            descricaoTime: "PSG3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",

            similares1: "../IMG/camisaFlamengo1.png",
            similares2: "../IMG/camisaArgentina1.png",
            similares3: "../IMG/camisaInternacional1.png",
            similares4: "../IMG/camisaArgentina3.png",
            
            variacao: 3
        }

            camisas.push(psg3)
/*

                                let barcelona = { 

                                    miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                    miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                    miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                    principalImg: `../IMG/camisaBarcelona1.png`,
                            
                                    camisaNome: "CAMISA do BARCELONA",
                                    camisaPrecoCortado: "R$199,99",
                                    camisaPreco: "R$179,99",
                            
                                    descricaoTime: "Barcelona",
                                    descricaoMarca: "Adidas",
                                    descricaoMaterial: "Poliéster",
                                    descricaoGarantia: "Contra defeito de fabricação",
                                    descricaoPatrocinio: "Nenhum",
                                    descricaoCor: "Branco",
                            
                                    similares1: "../IMG/camisaFlamengo1.png",
                                    similares2: "../IMG/camisaArgentina1.png",
                                    similares3: "../IMG/camisaInternacional1.png",
                                    similares4: "../IMG/camisaArgentina3.png",
                            
                                    variacao: 1
                                }
                            
                                    camisas.push(barcelona)
                                
                                
                                let barcelona2 = { 
                            
                                    miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                    miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                    miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                    principalImg: `../IMG/camisaBarcelona1.png`,
                            
                                    camisaNome: "CAMISA do BARCELONA",
                                    camisaPrecoCortado: "R$199,99",
                                    camisaPreco: "R$179,99",
                            
                                    descricaoTime: "Barcelona2",
                                    descricaoMarca: "Adidas",
                                    descricaoMaterial: "Poliéster",
                                    descricaoGarantia: "Contra defeito de fabricação",
                                    descricaoPatrocinio: "Nenhum",
                                    descricaoCor: "Preto",
                            
                                    similares1: "../IMG/camisaFlamengo1.png",
                                    similares2: "../IMG/camisaArgentina1.png",
                                    similares3: "../IMG/camisaInternacional1.png",
                                    similares4: "../IMG/camisaArgentina3.png",
                                    
                                    variacao: 2
                                }
                            
                                    camisas.push(barcelona2)
                                
                                
                                
                                let barcelona3 = { 
                            
                                    miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                    miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                    miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                    principalImg: `../IMG/camisaBarcelona1.png`,
                            
                                    camisaNome: "CAMISA do BARCELONA",
                                    camisaPrecoCortado: "R$199,99",
                                    camisaPreco: "R$179,99",
                            
                                    descricaoTime: "Barcelona3",
                                    descricaoMarca: "Adidas",
                                    descricaoMaterial: "Poliéster",
                                    descricaoGarantia: "Contra defeito de fabricação",
                                    descricaoPatrocinio: "Nenhum",
                                    descricaoCor: "Vinho",
                            
                                    similares1: "../IMG/camisaFlamengo1.png",
                                    similares2: "../IMG/camisaArgentina1.png",
                                    similares3: "../IMG/camisaInternacional1.png",
                                    similares4: "../IMG/camisaArgentina3.png",
                                    
                                    variacao: 3
                                }
                            
                                    camisas.push(barcelona3)


                                    let barcelona = { 

                                        miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                        miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                        miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                        principalImg: `../IMG/camisaBarcelona1.png`,
                                
                                        camisaNome: "CAMISA do BARCELONA",
                                        camisaPrecoCortado: "R$199,99",
                                        camisaPreco: "R$179,99",
                                
                                        descricaoTime: "Barcelona",
                                        descricaoMarca: "Adidas",
                                        descricaoMaterial: "Poliéster",
                                        descricaoGarantia: "Contra defeito de fabricação",
                                        descricaoPatrocinio: "Nenhum",
                                        descricaoCor: "Branco",
                                
                                        similares1: "../IMG/camisaFlamengo1.png",
                                        similares2: "../IMG/camisaArgentina1.png",
                                        similares3: "../IMG/camisaInternacional1.png",
                                        similares4: "../IMG/camisaArgentina3.png",
                                
                                        variacao: 1
                                    }
                                
                                        camisas.push(barcelona)
                                    
                                    
                                    let barcelona2 = { 
                                
                                        miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                        miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                        miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                        principalImg: `../IMG/camisaBarcelona1.png`,
                                
                                        camisaNome: "CAMISA do BARCELONA",
                                        camisaPrecoCortado: "R$199,99",
                                        camisaPreco: "R$179,99",
                                
                                        descricaoTime: "Barcelona2",
                                        descricaoMarca: "Adidas",
                                        descricaoMaterial: "Poliéster",
                                        descricaoGarantia: "Contra defeito de fabricação",
                                        descricaoPatrocinio: "Nenhum",
                                        descricaoCor: "Preto",
                                
                                        similares1: "../IMG/camisaFlamengo1.png",
                                        similares2: "../IMG/camisaArgentina1.png",
                                        similares3: "../IMG/camisaInternacional1.png",
                                        similares4: "../IMG/camisaArgentina3.png",
                                        
                                        variacao: 2
                                    }
                                
                                        camisas.push(barcelona2)
                                    
                                    
                                    
                                    let barcelona3 = { 
                                
                                        miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                        miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                        miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                        principalImg: `../IMG/camisaBarcelona1.png`,
                                
                                        camisaNome: "CAMISA do BARCELONA",
                                        camisaPrecoCortado: "R$199,99",
                                        camisaPreco: "R$179,99",
                                
                                        descricaoTime: "Barcelona3",
                                        descricaoMarca: "Adidas",
                                        descricaoMaterial: "Poliéster",
                                        descricaoGarantia: "Contra defeito de fabricação",
                                        descricaoPatrocinio: "Nenhum",
                                        descricaoCor: "Vinho",
                                
                                        similares1: "../IMG/camisaFlamengo1.png",
                                        similares2: "../IMG/camisaArgentina1.png",
                                        similares3: "../IMG/camisaInternacional1.png",
                                        similares4: "../IMG/camisaArgentina3.png",
                                        
                                        variacao: 3
                                    }
                                
                                        camisas.push(barcelona3)


                                        let barcelona = { 

                                            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                            principalImg: `../IMG/camisaBarcelona1.png`,
                                    
                                            camisaNome: "CAMISA do BARCELONA",
                                            camisaPrecoCortado: "R$199,99",
                                            camisaPreco: "R$179,99",
                                    
                                            descricaoTime: "Barcelona",
                                            descricaoMarca: "Adidas",
                                            descricaoMaterial: "Poliéster",
                                            descricaoGarantia: "Contra defeito de fabricação",
                                            descricaoPatrocinio: "Nenhum",
                                            descricaoCor: "Branco",
                                    
                                            similares1: "../IMG/camisaFlamengo1.png",
                                            similares2: "../IMG/camisaArgentina1.png",
                                            similares3: "../IMG/camisaInternacional1.png",
                                            similares4: "../IMG/camisaArgentina3.png",
                                    
                                            variacao: 1
                                        }
                                    
                                            camisas.push(barcelona)
                                        
                                        
                                        let barcelona2 = { 
                                    
                                            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                            principalImg: `../IMG/camisaBarcelona1.png`,
                                    
                                            camisaNome: "CAMISA do BARCELONA",
                                            camisaPrecoCortado: "R$199,99",
                                            camisaPreco: "R$179,99",
                                    
                                            descricaoTime: "Barcelona2",
                                            descricaoMarca: "Adidas",
                                            descricaoMaterial: "Poliéster",
                                            descricaoGarantia: "Contra defeito de fabricação",
                                            descricaoPatrocinio: "Nenhum",
                                            descricaoCor: "Preto",
                                    
                                            similares1: "../IMG/camisaFlamengo1.png",
                                            similares2: "../IMG/camisaArgentina1.png",
                                            similares3: "../IMG/camisaInternacional1.png",
                                            similares4: "../IMG/camisaArgentina3.png",
                                            
                                            variacao: 2
                                        }
                                    
                                            camisas.push(barcelona2)
                                        
                                        
                                        
                                        let barcelona3 = { 
                                    
                                            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
                                            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
                                            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
                                            principalImg: `../IMG/camisaBarcelona1.png`,
                                    
                                            camisaNome: "CAMISA do BARCELONA",
                                            camisaPrecoCortado: "R$199,99",
                                            camisaPreco: "R$179,99",
                                    
                                            descricaoTime: "Barcelona3",
                                            descricaoMarca: "Adidas",
                                            descricaoMaterial: "Poliéster",
                                            descricaoGarantia: "Contra defeito de fabricação",
                                            descricaoPatrocinio: "Nenhum",
                                            descricaoCor: "Vinho",
                                    
                                            similares1: "../IMG/camisaFlamengo1.png",
                                            similares2: "../IMG/camisaArgentina1.png",
                                            similares3: "../IMG/camisaInternacional1.png",
                                            similares4: "../IMG/camisaArgentina3.png",
                                            
                                            variacao: 3
                                        }
                                    
                                            camisas.push(barcelona3)*/
}

function mudarVariacao(nova){
    camisas[camisaNaTela].variacao = nova;
    // colocar a camisa 
    principalImg.src = `../IMG/camisa${camisas[camisaNaTela].descricaoTime}${nova}.png`

}


function carregarCamisa(time){

    for(i=0; i<camisas.length; i++){


        if(camisas[i].descricaoTime == time){

            camisaNaTela = i
            
            miniaturaUm.src = camisas[i].miniaturaUm
            miniaturaDois.src = camisas[i].miniaturaDois
            miniaturaTres.src = camisas[i].miniaturaTres
            principalImg.src = camisas[i].principalImg

            camisaNome.innerHTML = camisas[i].camisaNome
            camisaPrecoCortado.innerHTML = camisas[i].camisaPrecoCortado
            camisaPreco.innerHTML = camisas[i].camisaPreco

            descricaoTime.innerHTML = camisas[i].descricaoTime
            descricaoMarca.innerHTML = camisas[i].descricaoMarca
            descricaoMaterial.innerHTML = camisas[i].descricaoMarca
            descricaoGarantia.innerHTML = camisas[i].descricaoGarantia
            descricaoPatrocinio.innerHTML = camisas[i].descricaoPatrocinio
            descricaoCor.innerHTML = camisas[i].descricaoCor

            similares1.src = "../IMG/camisaFlamengo1.png"
            similares2.src = "../IMG/camisaArgentina1.png"
            similares3.src = "../IMG/camisaInternacional1.png"
            similares4.src = "../IMG/camisaArgentina3.png"
        }
    }


   

}



function Alemanha1(){

    // miniaturaUm.src = "../IMG/camisaAlemanha1.png"
    miniaturaUm.src = `../IMG/camisaAlmanha1.png`
    miniaturaDois.src = `../IMG/camisaAlmanha.png`
    miniaturaTres.src = `../IMG/camisaAlmanha3.png`
    principalImg.src = `../IMG/camisaAlmanha1.png`

    camisaNome.innerHTML = "CAMISA da ALEMANHA"
    camisaPrecoCortado.innerHTML = "R$199,99"
    camisaPreco.innerHTML = "R$179,99"

    descricaoTime.innerHTML = "<strong>Time:</strong>Alemanha"
    descricaoMarca.innerHTML = "<strong>Marca:</strong>Adidas"
    descricaoMaterial.innerHTML = "<strong>Material:</strong>Poliéster"
    descricaoGarantia.innerHTML = "<strong>Garantia do Fabricante:</strong>Contra defeito de fabricação"
    descricaoPatrocinio.innerHTML = "<strong>Patrocínio:</strong>Nenhum"
    descricaoCor.innerHTML = "<strong>Cor Predominante:</strong>Branco"

    similares1.src = "../IMG/camisaFlamengo1.png"
    similares2.src = "../IMG/camisaArgentina1.png"
    similares3.src = "../IMG/camisaInternacional1.png"
    similares4.src = "../IMG/camisaArgentina3.png"

}