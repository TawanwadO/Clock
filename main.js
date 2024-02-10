clockRun();

function clockRun() {
    const date = new Date();

    const hours = date.getHours()%12;
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    const hour = hours*30;
    const min = mins*6;
    const sec = secs*6;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${min}deg)`;
    document.querySelector('.second').style.transform = `rotate(${sec}deg)`;
}

setInterval(clockRun, 1000);