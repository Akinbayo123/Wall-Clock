const secondshand = document.querySelector(".seconds");
const minuteshand = document.querySelector(".mins");
const hourshand = document.querySelector(".hour");

function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondshand.style.transform = `rotate(${secondsDegree}deg)`;
    const minutes = now.getMinutes();
    const minutesDegree = (minutes / 60) * 360;
    minuteshand.style.transform = `rotate(${minutesDegree}deg)`;
    const hour = now.getHours();
    const hoursDegre = (hour / 12) * 360;
    hourshand.style.transform = `rotate(${hoursDegre}deg)`;
}
setTime();
setInterval(setTime, 1000);