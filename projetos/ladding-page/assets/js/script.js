let menuCss = document.getElementById('menu')
let fechaMenuCelular = document.getElementById('fechaMenuCelular')
let mensagem = document.getElementById('mensagem')
    mensagem = mensagem.addEventListener('click', enviarMensagem)
let links = document.getElementsByName('a');
for(let index in links){
  links.index.addEventListener('press', (e)=> links.index.style.color = 'inherit')
}

let contador = 0
let click = 0

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
  
  if (click === 0){
    click ++
    var mensagemPadrao = document.querySelector('.mensagem-1')
    var cLoader = document.querySelector('.c-loader')
    var mensagemConcluido = document.querySelector('.concluido')

    mensagemPadrao.classList.remove('aparece')
    mensagemPadrao.classList.add('ocultar')
    cLoader.classList.remove('ocultar')
    cLoader.classList.add('aparece')

    setTimeout(function(){
      cLoader.classList.remove('aparece')
      cLoader.classList.add('ocultar')
    }, 3000)

    setTimeout(function(){
      mensagemConcluido.classList.remove('ocultar')
      mensagemConcluido.classList.add('aparece')
    }, 3000)
    setTimeout(function(){
      mensagemConcluido.classList.remove('aparece')
      mensagemConcluido.classList.add('ocultar')
      mensagemPadrao.classList.remove('ocultar')
      mensagemPadrao.classList.add('aparece')
      click = 0
    }, 6000)
  }
}