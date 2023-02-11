const startMinutes = 1;
let time = startMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(currentCountdown,1000);

function currentCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--
}