$(function(){
    //cargar noticias
    $.getJSON( "../json/articulo1.json", function( jsonObject ) {
        ponerNoticias( jsonObject );
    });

});

function ponerNoticias(json){
     $.each( json, function( i, articulo1 ) {
         $("#leerJson").append( "<h3 id='" + i + "'>" + articulo1.title + "</h3>" + "<p>" + articulo1.description + "</p>" );
     }); 
}