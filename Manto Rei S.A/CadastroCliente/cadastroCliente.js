let nome = document.getElementById("inputDadosCadastraisNome")
let senha = document.getElementById("inputDadosCadastraisSenha")
let confSenha = document.getElementById("inputDadosCadastraisConfirmarSenha")
let email = document.getElementById("inputDadosCadastraisEmail")
let cpf = document.getElementById("inputDadosCadastraisCPF")
let vetor = []

function CadastraCliente() {

    vetor = JSON.parse(localStorage.getItem('registroCliente'))

    if (vetor == null) {

        Validacadastro()

    } else {

        Validacadastro()

    }

    LimpaInputs()

    console.log(vetor)
}



function LimpaInputs() {

    nome.value = ""
    senha.value = ""
    confSenha.value = ""
    email.value = ""
    cpf.value = ""

}


function Validacadastro() {

    let podeCadastrar = 0

    if (nome.value == "" || senha.value == "" || confSenha.value == "" || email.value == "" || cpf.value == "") {
        alert("Preencha todos os campos")
    }
    else if (senha.value != confSenha.value) {

        alert("Senhas diferentes")

    }
    
    else {
        
        switch(true){

            case vetor == null:
                
                vetor = []
                
                Cadastro()

                break

            case vetor.length > 0:

                for (let i = 0; i < vetor.length; i++) {

                    if (nome.value === vetor[i].username) {
            
                        podeCadastrar = 1
                        
                    }
                    
                }
                
                if(podeCadastrar == 1){
        
                    alert("Usuario já cadastrado")
        
                }else{
        
                    Cadastro()
        
                }

                break

        }      
        
    }

}

function Cadastro() {

    let cadastroCliente = {

        username: "",
        password: "",
        confPassword: "",
        objetoEmail: "",
        objetoCPF: ""
    }

    cadastroCliente.username = nome.value
    cadastroCliente.password = senha.value
    cadastroCliente.confPassword = confSenha.value
    cadastroCliente.objetoEmail = email.value
    cadastroCliente.objetoCPF = cpf.value

    vetor.push(cadastroCliente)
    localStorage.setItem('registroCliente', JSON.stringify(vetor))

    alert("Cadastro efetuado com sucesso")

}
