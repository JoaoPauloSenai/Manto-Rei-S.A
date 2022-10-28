let nome = document.getElementById("inputDadosCadastraisNome")
let senha = document.getElementById("inputDadosCadastraisSenha")
let confSenha = document.getElementById("inputDadosCadastraisConfirmarSenha")
let email = document.getElementById("inputDadosCadastraisEmail")
let nascimento = document.getElementById("inputDadosCadastraisNascimento")
let genero = document.getElementById("inputDadosCadastraisGenero")
let cpf = document.getElementById("inputDadosCadastraisCPF")
let rg = document.getElementById("inputDadosCadastraisRG")
let telefone = document.getElementById("inputDadosCadastraisTelefone")
let endereco = document.getElementById("inputDadosCadastraisEndereco")
let cidadeEstado = document.getElementById("inputDadosCadastraisCidadeEstado")
let pais = document.getElementById("inputDadosCadastraisPais")
let vetor = []

function CadastraCliente() {

    let cadastroCliente = {

        username: "",
        password: "",
        confPassword: "",
        objetoEmail: "",
        objetoNascimento: "",
        objetoGenero: "",
        objetoCPF: "",
        objetorRG: "",
        objetoTelefone: "",
        objetoEndereco: "",
        objetoCidadeEstado: "",
        objetoPais: ""
    }

    cadastroCliente.username = nome.value
    cadastroCliente.password = senha.value
    cadastroCliente.confPassword = confSenha.value
    cadastroCliente.objetoEmail = email.value
    cadastroCliente.objetoNascimento = nascimento.value
    cadastroCliente.objetoGenero = genero.value
    cadastroCliente.objetoCPF = cpf.value
    cadastroCliente.objetorRG = rg.value
    cadastroCliente.objetoTelefone = telefone.value
    cadastroCliente.objetoEndereco = endereco.value
    cadastroCliente.objetoCidadeEstado = cidadeEstado.value
    cadastroCliente.objetoPais = pais.value
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
        nascimento.value = ""
        genero.value = ""
        cpf.value = ""
        rg.value = ""
        telefone.value = ""
        endereco.value = ""
        cidadeEstado.value = ""
        pais.value = ""

}