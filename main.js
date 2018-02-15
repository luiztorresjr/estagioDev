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

var sites = new lerSites();
sites.obterSites();