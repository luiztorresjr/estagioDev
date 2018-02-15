//url é uma variavel global pois será usado em todos as functions e contem json
var url = "https://jsonplaceholder.typicode.com/users";

//A function lê os websites de cada usuario do json
function lerSites(){	
	lerSites.prototype.obterSites = function(){
		$.getJSON( url, function(data) {
		// each percorre cada um dos dados do json	
  		$.each( data, function(id) {
   		 $('#usuario').append( "<li>" + data[id]['website']+ "</li>" );
  		});
  	});
	}
}

//A function procura no json o email de quem tiver username igual Samantha
function lerEmail(){
	lerEmail.prototype.obterEmail = function(){
		$.getJSON( url, function(data) {
  		$.each( data, function(id) {
  			if(data[id]['username'] == 'Samantha')
  				$('#email').append( "Email: " + data[id]['email']);
  		});
  	});
	}
}

//A function usa a latitude para saber o hemisfério, pois o hemisfério sul fica em latitudes de 0 a -90
//portanto o if é para verificar se a lat é menor e igual a 0
function lerLatitude(){
	lerLatitude.prototype.obterLatitude = function(){
		var valor = 0;
		$.getJSON( url, function(data) {
  		$.each( data, function(id) {
  			//incrementa a variavel valor para cada vez que for menor ou igual a 0
			if(data[id]['address']['geo']['lat'] <= 0)
				valor++;
  		});
  		//logo ápos todo json for percorrido é colocado o texto e o valor de usuários do hemisfério sul
  		$('#total').append( "Total: "+valor);
  	});
	}
}

var sites = new lerSites();
sites.obterSites();

var email = new lerEmail();
email.obterEmail();

var latitude = new lerLatitude();
latitude.obterLatitude();