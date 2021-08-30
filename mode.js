function replace(style, logo) {
    document.getElementById("stylemain").href = style;
    document.getElementById("logo").src = logo;
}

function start() {
    light = false;
    const isLight = window.matchMedia('(prefers-color-scheme: light)')
    if (isLight.matches) {
        replace("light.css", "Assets/logo-light.png")
        light = true;
    }
}

function run() {
    setTimeout(function() {
        if (light) {
            replace("dark.css", "Assets/logo.png");
            light = false;
        } else {
            replace("light.css", "Assets/logo-light.png")
            light = true;
        }
    }, 300);

}
