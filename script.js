const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const formHora = document.getElementById('formHora');

let relogioInterval;

function atualizarRelogio() {
    const dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

function mudarHorario(event) {
    event.preventDefault();

    const novaHora = parseInt(document.getElementById('novaHora').value);
    const novoMinuto = parseInt(document.getElementById('novoMinuto').value);
    const novoSegundo = parseInt(document.getElementById('novoSegundo').value);

    
    if (novaHora >= 0 && novaHora <= 23 && novoMinuto >= 0 && novoMinuto <= 59 && novoSegundo >= 0 && novoSegundo <= 59) {
        clearInterval(relogioInterval); 
        horas.textContent = novaHora < 10 ? '0' + novaHora : novaHora;
        minutos.textContent = novoMinuto < 10 ? '0' + novoMinuto : novoMinuto;
        segundos.textContent = novoSegundo < 10 ? '0' + novoSegundo : novoSegundo;
    }

    
    relogioInterval = setInterval(atualizarRelogio, 1000);
}


atualizarRelogio();

formHora.addEventListener('submit', mudarHorario);
