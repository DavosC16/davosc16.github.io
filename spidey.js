function quieroQue(){
    console.log("quieroQue()");
    document.getElementById("header_text").innerText='No se...solo...';

    document.getElementById("image").innerHTML='<img src="img/spidey3.png">'
    
    let parrafo = '<p>No se, tal vez un dia...</p>';
        parrafo = parrafo + '<p>O si no podemos hacer otra cosa...</p>';
        parrafo = parrafo + '<p>o podemos si quieres...</p>';

    document.getElementById("par").innerHTML = parrafo;

    let     boton = '<button class="button" onclick="si()" id="yesButton">';
    boton = boton + '    <span class="textoBoton">Si</span>';
    boton = boton + '</button>';
    boton = boton + '<button class="button" onclick="noClick()" id="noButton">';
    boton = boton + '    <span class="textoBoton">No</span>';
    boton = boton +'</button>';
    document.getElementById("buttons").innerHTML = boton;
}

function si(){
    console.log("si()");
    document.getElementById("header_text").innerText="Si?";

    document.getElementById("image").innerHTML='<img src="img/spidey4.png">'
    
    let parrafo = '';

    document.getElementById("par").innerHTML = parrafo;

    let     boton = '<button class="button" onclick="unaDeEsas()" id="yesButton">';
    boton = boton + '    <span class="textoBoton">Una de esas</span>';
    boton = boton + '</button>';
    boton = boton + '<button class="button" onclick="noClick()" id="noButton">';
    boton = boton + '    <span class="textoBoton">No</span>';
    boton = boton +'</button>';
    document.getElementById("buttons").innerHTML = boton;
}

function unaDeEsas(){
    console.log("si()");

    let imagen = '<img src="img/spidey.gif">'
    imagen = imagen + '<style type="text/css">img{ width: 70%; height: auto;}</style>'
    document.getElementById("container").innerHTML=imagen;
}