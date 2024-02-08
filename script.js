var height = window.innerHeight;
var width = window.innerWidth;
console.log(height, width);

function noClick(){ 
    var x;
    var y;

    do{
        x = this.width * 0.8 * Math.random();
    }while(x>this.width)

    do{
        y = this.height * 0.8 * Math.random();
    }while(y>this.height)

    document.getElementById("noButton").style.position = "absolute";
    document.getElementById("noButton").style.left = x + "px";
    document.getElementById("noButton").style.top= y + "px";
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