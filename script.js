/*document.addEventListener('mousemove', function(event) {
    console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
});*/

const height = window.innerHeight;
const width = window.innerWidth;

function noClick(){

    fetch("https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => { const ip = data;
        console.log(ip.ip);
        
        //let newURL = "https://ipapi.co/" + ip.ip + "/json/";
        let newURL="https://ip-api.com/json/"+ip.ip;
        console.log(newURL);

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            console.log(this.responseText);
           let data = JSON.parse(this.responseText);
           
           let newHTML = '<h1 class="header_text">You have been hacked</h1>\n\n';

           newHTML = newHTML + '<div><img src ="https://i.pinimg.com/originals/02/e9/43/02e943d3a936334cfc94aca64dc333e1.gif"><\div>'

            newHTML = newHTML + '<p>ip: ' + data.query + '</p>\n';
            newHTML = newHTML + '<p>country: ' + data.country + '</p>\n';
            newHTML = newHTML + '<p>region: ' + data.regionName + '</p>\n';
            newHTML = newHTML + '<p>city: ' + data.city + '</p>\n';
            newHTML = newHTML + '<p>lat: ' + data.lat + ' N</p>\n';
            newHTML = newHTML + '<p>lon: ' + data.lon + ' W</p>\n';

            console.log(newHTML);

            document.getElementById("container").innerHTML=newHTML;
        };
        xhr.open('GET', newURL, true);
        xhr.send();
        
    }
    )
    .catch("ERROR");    
}

function yesClick(){
    window.location.href="yes.html";
}

function yesPage(){
    window.location.href="nevermind.html";
}

var nNoButtonClicked = 0;
var myWindow;
var openedWindows=[];

function noValentineClick(){
    var x, y = 0;
    if (nNoButtonClicked<=3){
        var button = document.getElementById("yesButtonValentine");

        var styleButton = window.getComputedStyle(button);

        var paddingButton = styleButton.padding;
        var fontSizeButton = styleButton.fontSize;

        var partsPadding = paddingButton.split(" ");
        var partsFont = fontSizeButton.split("px");

        var paddingTopBottom = parseFloat(partsPadding[0]);
        var paddingRighLeft = parseFloat(partsPadding[1]);
        var fontNumber = parseFloat(partsFont[0]);

        paddingTopBottom = paddingTopBottom + 5;
        paddingRighLeft = paddingRighLeft + 10;
        fontNumber = fontNumber + 10;

        document.getElementById("yesButtonValentine").style.paddingLeft = paddingRighLeft + "px";
        document.getElementById("yesButtonValentine").style.paddingRight = paddingRighLeft + "px";
        document.getElementById("yesButtonValentine").style.paddingTop = paddingTopBottom + "px";
        document.getElementById("yesButtonValentine").style.paddingBottom = paddingTopBottom + "px";
        document.getElementById("yesButtonValentine").style.fontSize = fontNumber + "px";

        nNoButtonClicked++;

    }
    else{
        do{
            x = this.width * 0.8 * Math.random();
        }while(x>this.width)
    
        do{
            y = this.height * 0.8 * Math.random();
        }while(y>this.height)

        buttonId="yesButtonValentine"+(nNoButtonClicked-3);

        newButton = '<button class="button" onclick="yesValentineClick()" id="'+buttonId+'">Yes</button>';

        console.log(newButton)

        document.getElementById("newButtons").innerHTML+=newButton;

        document.getElementById(buttonId).style.position = "absolute";
        document.getElementById(buttonId).style.left = x + "px";
        document.getElementById(buttonId).style.top= y + "px";
        nNoButtonClicked++;
    }
}

function yesValentineClick(){
    nNoButtonClicked=0;
    window.location.href="yes.html";
}