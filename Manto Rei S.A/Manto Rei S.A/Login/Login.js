let nome = document.getElementById("inputDadosCadastraisNome")
let senha = document.getElementById("inputDadosCadastraisSenha")
let vetor = []

function entrar() {

    vetor = JSON.parse(localStorage.getItem('registroCliente'))

    for (let i = 0; i < vetor.length; i++) {

        if (nome.value == vetor[i].username && senha.value == vetor[i].password) {

            window.location.href = "../HomePage/HomePage.html"

        }
    }
    LimpaInputs()
}

function LimpaInputs() {

    nome.value = ''
    senha.value = ''

}