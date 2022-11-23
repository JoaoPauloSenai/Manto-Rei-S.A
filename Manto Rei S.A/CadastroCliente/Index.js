let nome = document.getElementById("inputDadosCadastraisNome")
let senha = document.getElementById("inputDadosCadastraisSenha")
let confSenha = document.getElementById("inputDadosCadastraisConfirmarSenha")
let email = document.getElementById("inputDadosCadastraisEmail")
let cpf = document.getElementById("inputDadosCadastraisCPF")
let vetor = []

function CadastraCliente() {

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

    vetor = JSON.parse(localStorage.getItem('registroCliente'))

    if (vetor == null) {

        vetor = []

        vetor.push(cadastroCliente)
        localStorage.setItem('registroCliente', JSON.stringify(vetor))

    } else {

        vetor.push(cadastroCliente)
        localStorage.setItem('registroCliente', JSON.stringify(vetor))

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
