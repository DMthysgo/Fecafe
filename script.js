window.addEventListener('scroll', function () {
    var roxo = document.getElementById('roxo');
    var roxoImg = this.document.getElementById('roxoImg');
    var posY = roxoImg.getBoundingClientRect().top;
    var offSet = roxoImg.offsetTop;
    var scrolltop = this.pageYOffset || this.document.documentElement.scrolltop
    var telaAlt = this.innerHeight
    const posicaoInicial = window.scrollY;

    console.log(posY);
    console.log(telaAlt)
    console.log(offSet);
    var alturaLimite = this.innerHeight * (0.4); // Altura em pixels na qual você quer que a div pare de subir
    //window.scrollY >= alturaLimite
    if (posY <= 0) {
        roxo.classList.add('fixed');
    } else {
        roxo.classList.remove('fixed');
    }
});
