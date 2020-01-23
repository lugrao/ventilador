const $playPause = document.querySelector("#boton-play-pause");

const audioVentilador = document.getElementById("audio-ventilador");

function playPause() {
    if (audioVentilador.paused) {
        audioVentilador.play();
        $playPause.className = "far fa-pause-circle fa-3x boton";
    } else {
        audioVentilador.pause();
        $playPause.className = "far fa-play-circle fa-3x boton";
    }
}

$playPause.onclick = function () {
    playPause();
}