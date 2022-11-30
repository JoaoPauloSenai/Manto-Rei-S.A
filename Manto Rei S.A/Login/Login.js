let nome = document.getElementById("inputDadosCadastraisNome")
let senha = document.getElementById("inputDadosCadastraisSenha")
let nomeLogado = document.getElementById("nomeUsuario")

function entrar() {

    vetor = JSON.parse(localStorage.getItem('registroCliente'))

    for (let i = 0; i < vetor.length; i++) {

        if (nome.value == vetor[i].username && senha.value == vetor[i].password) {

            alert("Logou!")

            nomeLogado.innerHTML = vetor[i].username

            window.location.href = "../HomePage/HomePage.html"

        }
    }
    LimpaInputs()
}

function LimpaInputs() {

    nome.value = ''
    senha.value = ''

}

