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