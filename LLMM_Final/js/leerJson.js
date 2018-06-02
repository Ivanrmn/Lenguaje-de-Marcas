$(function(){
    //cargar noticias
    $.getJSON( "./json/articulo1.json", function( jsonObject ) {
        ponerNoticias( jsonObject );
    });

    //onclick en verinfo
    $("#verinfo").click(function() {
        var v=$("#noticias").val();
        if (v!=0) window.location = "/articulo1/"+$("#noticias").val();
    });
});

function ponerNoticias(json){
     $.each( json, function( i, articulo1 ) {
         //dos formas de hacer lo mismo, la segunda es más adecuada.
         $("#noticias").append( "<h3 value='" + articulo1.titulo + "'>" + "</h3>" + "<p>" + articulo1.descripcion + "</p>" );
         //$('#noticias').append($('<option>', { value: noticia.slug, text : noticia.comunidad }));
         //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
     }); 
}