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


    let argentina1 = { 

        miniaturaUm: `../IMG/camisaArgentina1.png`,        
        miniaturaDois: `../IMG/camisaArgentina2.png`,        
        miniaturaTres: `../IMG/camisaArgentina3.png`,        
        principalImg: `../IMG/camisaArgentina3.png`,

        camisaNome: "CAMISA da ARGENTINA",
        camisaPrecoCortado: "R$199,99",
        camisaPreco: "R$179,99",

        descricaoTime: "Argentina1",
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

        camisas.push(argentina1)

        let argentina2 = { 

            miniaturaUm: `../IMG/camisaArgentina1.png`,        
            miniaturaDois: `../IMG/camisaArgentina2.png`,        
            miniaturaTres: `../IMG/camisaArgentina3.png`,        
            principalImg: `../IMG/camisaArgentina3.png`,
    
            camisaNome: "CAMISA da ARGENTINA",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Argentina1",
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
    
            camisas.push(argentina1)

        let argentina3 = { 

            miniaturaUm: `../IMG/camisaArgentina1.png`,        
            miniaturaDois: `../IMG/camisaArgentina2.png`,        
            miniaturaTres: `../IMG/camisaArgentina3.png`,        
            principalImg: `../IMG/camisaArgentina3.png`,
    
            camisaNome: "CAMISA da ARGENTINA",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: "R$179,99",
    
            descricaoTime: "Argentina1",
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
    
            camisas.push(argentina1)
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