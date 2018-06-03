/*$(document).ready(function(){ 
   $('#leerJson').on('click',function(){
        $.getJSON( "../json/articulo1.json", function( jsonObject ) {
			console.log(jsonObject);
            imprimirJson( jsonObject );
        });

        function imprimirJson(json){
         $.each( json, function( i, noticia1 ) {
          $("#cargarJson").append( "<h3 id='" + i + "'>" + noticia1.title + "</h3>" + "<p>" + "<img class='img-fluid float-left img-thumbnail mr-4' src='" + noticia1.img + "'>" + noticia1.description + "</p>" + "<div class='form-control'>" + noticia1.datetime + "</div>");
         }); 
        }
   });
});*/

$.getJSON( "../json/articulo1.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

$("#noticia1").click(function () {
    window.location.href = "../html/news1.html"
});
$("#noticia2").click(function () {
    window.location.href = "../html/news2.html"
});