articulo1.titulo
articulo1.descripcion

articulo1['titulo'][1]['descripcion'][2]


var requestURL = './json/articulo1';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
	var articulo1 = request.response;
	populateHeader(articulo1);
	mostrarJson(articulo1);
}

function populateHeader(jsonObj) {
	var myH3 = document.createElement('h3');
	myH3.textContent = jsonObj['titulo'];
	header.appendChild(myH3);
	
	var myPara = document.createElement('p');
	myPara.textContent = 'descripcion: ' + jsonObj['descripcion'] + ' // Formed: ' + jsonObj['formed'];
	header.appendChild(myPara);
}

function mostrarNoticias(jsonObj) {
    var myArticle = document.createElement('article');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);

    section.appendChild(myArticle);
  }
}