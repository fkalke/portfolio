//Funcionalidade do botao voltar ao topo
let btnTop = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

//fechar menu lateral
function fecharMenu(){
    let checkBox = document.getElementById("menu-control");
    if (checkBox.checked) {
        checkBox.click();
    }
}

//forçando autoplay no video de fundo da home
document.getElementById('homeVideo').play();