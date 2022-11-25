let nomeCadastro = document.getElementById('inputNome')
let senhaCadastro = document.getElementById('inputSenha')

let nomeLogin = document.getElementById('loginNome')
let senhaLogin = document.getElementById('loginSenha')

let nomePerfil = document.getElementById('nomeLogado')
let senhaPerfil = document.getElementById('senhaLogado')
let fonePerfil  = document.getElementById('phoneLogado')



let vetorUsers = []
let userLogado

function Cadastrar() {
    
    let usuario = {

    username:'',
    password:'',
    phones: []

}
    usuario.username = nomeCadastro.value
    usuario.password = senhaCadastro.value

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    if(vetorUsers == null){
        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("cadastro realizado")

    }else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("cadastro realizado")

    }
        LimpaInputs()

}

function Logar(){
    
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i=0; i<vetorUsers.length; i++){

        if(nomeLogin.value == vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password){
            
            userLogado = nomeLogin.value
            localStorage.setItem('userLogado', JSON.stringify(userLogado))
            alert('Logou')
            window.location.href = "perfil.html"
        }
    }

}

function CarregaUser(){

    userLogado = JSON.parse(localStorage.getItem('userLogado'))
    document.getElementById("Olar").innerHTML = `Ola, ${userLogado}.`
    nomePerfil.value = userLogado
}

function CadastrarTel(){

    let contTel = 0
    
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))


    for(i=0; i < vetorUsers.length; i++){
        
        if(userLogado == vetorUsers[i].username && senhaPerfil.value == vetorUsers[i].password){

            vetorUsers[i].phones.push(fonePerfil.value)
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("Telefone cadastrado")
        
        }else{
        contTel++
    }
}
    if(contTel == vetorUsers.length){
        alert('Senha Incorreta')
    }
}


function LimpaInputs(){

    nomeCadastro.value = ''
    senhaCadastro.value = ''

}