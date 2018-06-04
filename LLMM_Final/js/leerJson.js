/*var contador = 2;

function load() {
	for (i = 1; i <= contador; i++) {
		$('#leerJson').on('click',function(){
			$.getJSON("https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo" + i + ".json", function (jsonObject) {
				imprimirJson(jsonObject);
		});
		});
	$('#leerJson').hide();
};
};

function imprimirJson(json){
    $.each( json, function( i, noticia ) {
        $("#cargarJson").append( "<div class='Box-noticia'>" + "<h3 id='" + i + "'>" + noticia.title + "</h3>" + 
		"<img class='rounded' src='" + noticia.img + "'>" + "<p>" + noticia1.description + "</p>" + 
		"<div class='form-control' <input class='form-control' type='datetime-local' value='" + noticia.datetime + "'>" + "</div>" + "</div>");
         }); 
        };*/

		
$(document).ready(function(){ 
   $('#leerJson').on('click',function(){
        $.getJSON( "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo1.json", function( jsonObject ) {
			console.log(jsonObject);
            imprimirJson( jsonObject );
			$('#leerJson').hide();
        });

        function imprimirJson(json){
         $.each( json, function( i, noticia1 ) {
          $("#cargarJson").append( "<div class='Box-noticia'>" + "<h3 id='" + i + "'>" + noticia1.title + "</h3>" + 
		  "<img class='rounded' src='" + noticia1.img + "'>" + "<p>" + noticia1.description + "</p>" + 
		  "<div class='form-control' <input class='form-control' type='datetime-local' value='" + noticia1.datetime + "'>" + "</div>" + "</div>");
         }); 
        }
   });
});
		
/*$("#noticia1").click(function() {
    window.location.href = "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/html/news1.html"
});
$("#noticia2").click(function() {
    window.location.href = "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/html/news2.html"
});*/
