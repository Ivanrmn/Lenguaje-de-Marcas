$(document).ready(function(){ 
   $('#leerJson').on('click',function(){
        $.getJSON( "../json/articulo1.json", function( jsonObject ) {
			console.log(jsonObject);
            imprimirJson( jsonObject );
        });

        function imprimirJson(json){
         $.each( json, function( i, noticia1 ) {
          $("#cargarJson").append( "<h3 id='" + i + "'>" + noticia1.title + "</h3>" + "<img class='img-fluid float-left img-thumbnail mr-4' src='" + noticia1.img + "'>" + "<p>" + noticia1.description + "</p>" + "<div class='form-control' <input class='form-control' type='datetime-local'>" + noticia1.datetime + "'>" + "</div>");
         }); 
        }
   });
});

$("#noticia1").click(function () {
    window.location.href = "../html/news1.html"
});
$("#noticia2").click(function () {
    window.location.href = "../html/news2.html"
});