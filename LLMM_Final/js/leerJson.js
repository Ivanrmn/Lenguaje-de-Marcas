var contador = 1;

/*$(document).ready(function(){ 
	for (var i = 1; i <= contador; i++
		$.getJSON( "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo" + i + ".json", function( jsonObject ) {
			imprimirJson(jsonObject);
		});
		        function imprimirJson(json){
         $.each( json, function( i, noticia1 ) {
          $("#cargarJson").append( "<h3 id='" + i + "'>" + noticia1.title + "</h3>" + 
		  "<img class='rounded' src='" + noticia1.img + "'>" + "<p>" + noticia1.description + "</p>" + 
		  "<div class='form-control' <input class='form-control' type='datetime-local' value='" + noticia1.datetime + "'>" + "</div>");
         }); 
        }
	};*/
/*function contar() {
    if (contador <= 2) {
        $.getJSON("https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo" + contador + ".json", function (jsonObject) {
            imprimirJson(jsonObject);
        }); 
		contador++;
		if (contador > 2) {
			$("#leerJson").html("No hay más noticias");
		}
    }
};*/
		
		
$(document).ready(function(){ 
   $('#leerJson').on('click',function(){
        $.getJSON( "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo1.json", function( jsonObject ) {
			console.log(jsonObject);
            imprimirJson( jsonObject );
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


$("#noticia1").click(function () {
    window.location.href = "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/html/news1.html"
});
$("#noticia2").click(function () {
    window.location.href = "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/html/news2.html"
});
