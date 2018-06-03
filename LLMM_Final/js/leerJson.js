var contador = 1;

/*function contar() {
	if (contador <= 2) {
		$.getJSON( "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo" + contador + ".json", function( jsonObject ) {
			addrow(jsonObject);
		});
		contador++;
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
          $("#cargarJson").append( "<h3 id='" + i + "'>" + noticia1.title + "</h3>" + 
		  "<img class='rounded' src='" + noticia1.img + "'>" + "<p>" + noticia1.description + "</p>" + 
		  "<div class='form-control' <input class='form-control' type='datetime-local' value='" + noticia1.datetime + "'>" + "</div>");
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
