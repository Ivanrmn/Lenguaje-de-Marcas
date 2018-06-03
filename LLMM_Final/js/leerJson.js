$(function(){
    //cargar noticias
    $.getJSON( "../json/articulo1.json", function( jsonObject ) {
        ponerNoticias( jsonObject );
    });

});

function ponerNoticias(json){
     $.each( json, function( i, articulo1 ) {
         $("#noticias").append( "<h3 value='" + articulo1.title + "'>" + "</h3>" + "<p>" + articulo1.description + "</p>" );
         //$('#noticias').append($('<option>', { value: noticia.slug, text : noticia.comunidad }));
     }); 
}