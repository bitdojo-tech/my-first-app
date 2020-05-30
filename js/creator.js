var desenharElemento = function(name){
    var elemento = document.getElementById(name);
    elemento.style.visibility = 'visible';
};

var corDeFundoPrincipal = function(color){

    var body = document.getElementsByTagName('body')[0];
    body.style.background = 'url("img/moldura_color.png") repeat 0 0';
    body.style.backgroundRepeat = 'no-repeat';
}

var inverterIcone = function(name){
    var imagem = document.getElementById('search-bar');
    imagem.src = 'img/search-bar-invert.png';
}

var reorganizarIcones = function(){
    const imageContainer = document.getElementById("logo-container");
    imageContainer.innerHTML = 
    '<img src="img/locker.png" id="locker">'+
    '<img src="img/calendar.png" id="calendar">'+
    '<img src="img/settings.png" id="settings">'+
    '<img src="img/unisanta.jpg" id="unisanta">';

    document.getElementById('calendar').style.paddingLeft = '2px';
    document.getElementById('unisanta').style.paddingLeft = '120px';
    desenharElemento('calendar');
    desenharElemento('unisanta');
    desenharElemento('locker');

}

var mudarCorDoTexto = function(name, color){
    document.getElementById(name).style.color = color;
}