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

function noClick(){

    fetch("https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => { const ip = data;
        console.log(ip.ip);
        
        //let newURL = "https://ipapi.co/" + ip.ip + "/json/";
        //let newURL="https://ip-api.com/json/"+ip.ip;
        let newURL="https://ipapi.co/"+ip.ip+"/json/"
        console.log(newURL);

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            
            let newHTML = '<h1 class="header_text">You have been hacked</h1>\n\n';

            newHTML = newHTML + '<div><img src ="https://i.pinimg.com/originals/02/e9/43/02e943d3a936334cfc94aca64dc333e1.gif"></div>'

            newHTML = newHTML + '<p>ip: ' + data.ip + '</p>\n';
            newHTML = newHTML + '<p>country: ' + data.country_name + '</p>\n';
            newHTML = newHTML + '<p>region: ' + data.region + '</p>\n';
            newHTML = newHTML + '<p>city: ' + data.city + '</p>\n';
            newHTML = newHTML + '<p>lat: ' + data.latitude + ' N</p>\n';
            newHTML = newHTML + '<p>lon: ' + data.longitude + ' W</p>\n';

            console.log(newHTML);

            document.getElementById("container").innerHTML=newHTML;
            if (screen.height<screen.width) {
                if (screen.height>450){
                    document.getElementById("container").style.transform = 'scale(0.6)';
                    console.log("AHHH");
                }
                else{
                    document.getElementById("container").style.transform = 'scale(0.5)';

                }
            } 

        };

        xhr.onerror = function() {            
            let newHTML = '<h1 class="header_text">You have been hacked</h1>\n\n';

            newHTML = newHTML + '<div><img src ="https://i.pinimg.com/originals/02/e9/43/02e943d3a936334cfc94aca64dc333e1.gif"><\div>'

            let nose = 'no se';
            newHTML = newHTML + '<p>ip: ' + nose + '</p>\n';
            newHTML = newHTML + '<p>country: ' + nose + '</p>\n';
            newHTML = newHTML + '<p>region: ' + nose + '</p>\n';
            newHTML = newHTML + '<p>city: ' + nose + '</p>\n';
            newHTML = newHTML + '<p>lat: ' + nose + '</p>\n';
            newHTML = newHTML + '<p>lon: ' + nose + '</p>\n';

            let newStyle = 'scale(0.5)'
            console.log(newHTML);

            document.getElementById("container").innerHTML=newHTML;
            if (screen.height<screen.width) {
                if (screen.height>450){
                    document.getElementById("container").style.transform = 'scale(0.6)';
                    console.log("AHHH");
                }
                else{
                    document.getElementById("container").style.transform = 'scale(0.5)';

                }
            }        
        };

        xhr.open('GET', newURL, true);
        xhr.send();
    }
    )
    .catch(console.log("ERROR"));    
}