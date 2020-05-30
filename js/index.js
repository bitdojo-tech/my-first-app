var criarAplicativo = function(){
	mudarCorDoTexto('hello-world','pink');

	desenharCalendario();
	
	desenharCadeado();
	
	desenharBarraDeBusca();
	
	desenharSubtitiulo();

	desenharUnisanta();







	corDeFundoPrincipal('light-blue');
    
}

var corDeFundo = function(){

}

var desenharCalendario = function(){
    desenharElemento('calendar');
}

var desenharCadeado = function(){
	desenharElemento('locker');
}

var desenharBarraDeBusca = function(){
	desenharElemento('search-bar');
}


var desenharSubtitiulo = function(){
    desenharElemento('subtitulo');
}

var desenharUnisanta = function(){
	desenharElemento('unisanta');
}