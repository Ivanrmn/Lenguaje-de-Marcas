function leerArticulo1() {
    $.getJSON( "../json/articulo1.json", function( jsonObject ) {
		$.each( json, function( i, articulo1 ) {
			console.log(jsonObject);
			$("#leerJson").append( "<h3 id='" + i + "'>" + articulo1.title + "</h3>" + "<p>" + articulo1.description + "</p>" );

    });
});

};

$(#leerJson).click(function() {
	leerArticulo1();
}

$("#noticia1").click(function () {
    window.location.href = "../html/news1.html"
});
$("#noticia2").click(function () {
    window.location.href = "../html/news2.html"
});