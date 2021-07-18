function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer , 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const twoMinutes = 120,
        display = document.getElementById('time');
    startTimer(twoMinutes, display);
};