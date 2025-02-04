const navegacao = document.getElementById("nav-bar")

function Clicar() {
    if(navegacao.style.display == 'none') {
        navegacao.style.display = 'block'
    } else {
        navegacao.style.display = 'none'
    }
}
