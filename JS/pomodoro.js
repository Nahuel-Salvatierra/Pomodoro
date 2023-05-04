let displayOut = document.getElementById('timer');
let contenedorPlayPause = document.getElementById('contenedor-play-pause');
let buttonPlayPause = document.getElementById('start-timer');
let timerAccumulatorWork = 0;
let timerAccumulatorRest = 0;
let secondsRemainingWork = 0;
let secondsRemainingRest = 0;
let pause = 'false';
let interval = 10;
let contador;

function addTimeWork(time) {
    timerAccumulatorWork += Number(document.getElementById('add-time-minutes-work').value);
    let second = timerAccumulatorRest + timerAccumulatorWork;
    let minutos = Math.floor(second / 60);
    second = (timerAccumulatorRest + timerAccumulatorWork) % 60
    displayOut.innerText = `${minutos}:${second < 10 ? '0' : ''}${second}`;
}

function addTimeRest(time) {
    timerAccumulatorRest += Number(document.getElementById('add-time-minutes-rest').value);
    let second = timerAccumulatorRest + timerAccumulatorWork;
    let minutos = Math.floor(second / 60);
    second = (timerAccumulatorRest + timerAccumulatorWork) % 60
    displayOut.innerText = `${minutos}:${second < 10 ? '0' : ''}${second}`;
}

function displayShow() {
    let timerTotal = timerAccumulatorRest + timerAccumulatorWork;
    let second = timerAccumulatorRest + timerAccumulatorWork;
    let minutos = Math.floor(second / 60);
    if (timerTotal<=0) {

    }
    second = (timerAccumulatorRest + timerAccumulatorWork) % 60
    displayOut.innerText = `${minutos}:${second < 10 ? '0' : ''}${second}`;
    timerAccumulatorWork > 0 ? timerAccumulatorWork-- : timerAccumulatorRest--;
    if (timerTotal <= 0) {
        clearInterval(contador)
        buttonPlayPause.innerHTML = '<i class="bi bi-play"></i>Iniciar'
}
}


contenedorPlayPause.addEventListener("click", function () {
    if (buttonPlayPause.innerText === 'Iniciar') {
        buttonPlayPause.innerHTML = '<i class="bi bi-pause"></i>Pausar'

            contador = setInterval(displayShow, interval)
    }
    else {
        clearInterval(contador)
        buttonPlayPause.innerHTML = '<i class="bi bi-play"></i>Iniciar'

    } 
});

// miBoton.addEventListener("mouseup", function() {
//   miBoton.style.backgroundColor = "blue";
// });

/* <button type="button" class="btn btn-primary" id="stop-timer">
                    <i class="bi bi-pause"></i></i>
                    Detener</button> */
