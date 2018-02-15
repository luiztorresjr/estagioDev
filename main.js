var url = "https://jsonplaceholder.typicode.com/users";

function lerSites(){	
	lerSites.prototype.obterSites = function(){
		$.getJSON( url, function(data) {
  		$.each( data, function(id) {
   		 $('#usuario').append( "<li>" + data[id]['website']+ "</li>" );
  		});
  	});
	}
}

function lerEmail(){
	lerEmail.prototype.obterEmail = function(){
		$.getJSON( url, function(data) {
  		$.each( data, function(id) {
  			if(data[id]['username'] == 'Samantha')
  				$('#email').append( "<li>" + data[id]['email']+ "</li>" );
  		});
  	});
	}
}

function lerLatitude(){
	lerLatitude.prototype.obterLatitude = function(){
		var valor = 0;
		$.getJSON( url, function(data) {
  		$.each( data, function(id) {
			if(data[id]['address']['geo']['lat'] <= 0)
				valor++;
  		});
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