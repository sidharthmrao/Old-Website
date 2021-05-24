function replace(style, logo) {
    document.getElementById("stylemain").href = style;
    document.getElementById("logo").src = logo;
}

function start() {
    light = false;
}

function run() {
    if (light) {
        replace("dark.css", "Assets/logo.png");
        light = false;
    } else {
        replace("light.css", "Assets/logo-light.png")
        light = true;
    }
}
