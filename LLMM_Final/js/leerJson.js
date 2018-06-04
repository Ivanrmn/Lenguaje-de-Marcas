var contador = 2;
let i = 1;

$(document).ready(function () {
    $('#leerJson').on('click', function () {
        switch (i) {
            case 1:
                $.getJSON("https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo1.json", function (jsonObject) {
                    console.log(jsonObject)
                    imprimirJson(jsonObject);
                    i++;
                    console.log(i)
                });
                break;
            case 2:
                $.getJSON("https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo2.json", function (jsonObject) {
                    console.log(jsonObject)
                    imprimirJson(jsonObject);
                    i++;
                });
                $("#leerJson").hide();
                break;
            default:
        }
    });

    function imprimirJson(json) {
        $.each(json, function (i, noticia) {
            $("#cargarJson").append("<div class='Box-noticia'>" + "<h3 id='" + i + "'>" + noticia.title + "</h3>" +
                "<img class='rounded' src='" + noticia.img + "'>" + "<p>" + noticia.description + "</p>" +
                "<div class='form-control' <p>" + noticia.datetime + "</p>" + "</div>" + "</div>");
        });
    }
});



/*$("#noticia1").click(function() {
    window.location.href = "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/html/news1.html"
});
$("#noticia2").click(function() {
    window.location.href = "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/html/news2.html"
});*/


/*$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height()-$(window).height()){
        $.getJSON( "https://rawgit.com/Ivanrmn/Lenguaje-de-Marcas/master/LLMM_Final/json/articulo1.json", function( jsonObject ) {
			imprimirJson( jsonObject );
    }
});
});*/