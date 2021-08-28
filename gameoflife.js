function board() {

    width = window.innerWidth;
    height = window.innerHeight;
    topp = .3*width;
    left = .3*width;
    width-=2*left;
    width/=40;
    height-=2*topp;
    height/=40;
    document.getElementById("infolink").innerHTML = document.getElementById("stylemain").href;

    for (y = 0; y<40; y++) {
        for (x = 0; x<40; x++) {
            document.getElementById("board").innerHTML += "<rect onclick = 'update(" + y + "," + x + ")' id = '" + y + "," + x + "' style = 'position: absolute; padding: " + width + "px " + width + "px; left: " +  left + "px; top: " + topp + "px; ' class = 'gameOfLifeButton'></rect>";
            left+=width;
        }
        left = .3*window.innerWidth;
        topp+=width;


    }

}

function update(y, x) {

    current = document.getElementById(y.toString()+","+x.toString()).style.background;

    if (current === "black" && document.getElementById("stylemain").href.endsWith("dark.css")) {
        document.getElementById(y.toString()+","+x.toString()).style.background = "red";
    } else if (current === "red" && document.getElementById("stylemain").href.endsWith("dark.css")) {
        document.getElementById(y.toString()+","+x.toString()).style.background = "black";
    } else {
        document.getElementById(y.toString()+","+x.toString()).style.background = "red";
    }

}