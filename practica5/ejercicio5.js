function cambiarcolorcelda_over(celda){
	celda.style.backgroundColor="#32BDB0" 
}

function cambiarcolorcelda_out(celda){ 
	celda.style.backgroundColor="#ECE2E0" 
}

function Click(celda){
    for (var i = 1; i < 7; i++){
        document.getElementById((i).toString()).style.display = "none";
            }
        document.getElementById(celda.attributes["class"].value).style.display = "block";
        }