let menuVisble=false;

//ocaulta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisble) {
        document.getElementById("nav").classList="";
        menuVisble=false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisble=true;
    }
}

function seleccionar(){
    // oculta el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisble=false;
}
function efectoHabilidades(){
    var habilidades=document.getElementById("habilidades")
    var distancia_habilidades=window.innerHeight - habilidades.getBoundingClientRect().top
    if(distancia_habilidades>=300){
        let habilidades =document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Comunicacion")
        habilidades[1].classList.add("trabajo")
        habilidades[2].classList.add("Creatividad")
        habilidades[3].classList.add("Dedidicacion")
        habilidades[4].classList.add("gesstionproyectos")


    }


}

window.onscroll=function(){
    efectoHabilidades();
}