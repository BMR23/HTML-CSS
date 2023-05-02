let menuCss = document.getElementById('menu')
let fechaMenuCelular = document.getElementById('fechaMenuCelular')
let contador = 0

function abrirMenu(){
    contador = 1
    menu.style.display = 'block'
    fechaMenuCelular.style.display = 'block'
  }
function fecharMenu(){
    if (contador == 1){
      contador = 0
      menu.style.display = 'none'
      fechaMenuCelular.style.display = 'none'
    }
  }
function enviarMensagem(){
    var mensagemPadrao = document.querySelector('.mensagem-1')
    var cLoader = document.querySelector('.c-loader')
    var mensagemConcluido = document.querySelector('.concluido')

    mensagemPadrao.classList.remove('aparece')
    mensagemPadrao.classList.toggle('ocultar')
    cLoader.classList.remove('ocultar')
    cLoader.classList.toggle('aparece')

    setTimeout(function(){
      cLoader.classList.remove('aparece')
      cLoader.classList.toggle('ocultar')
    }, 3000)

    setTimeout(function(){
      mensagemConcluido.classList.remove('ocultar')
      mensagemConcluido.classList.toggle('aparece')
    }, 3000)
    setTimeout(function(){
      mensagemConcluido.classList.remove('aparece')
      mensagemConcluido.classList.toggle('ocultar')
      mensagemPadrao.classList.remove('ocultar')
    mensagemPadrao.classList.toggle('aparece')
    }, 6000)
}