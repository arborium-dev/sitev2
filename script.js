const plusElements = document.querySelectorAll('.smallPlus');
const currentTimeElement = document.querySelector('.timeText');
const currrentDateElement = document.querySelector('.dateText');
const dayTriangle = document.querySelector('.dayTriangle');

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    if (hours >= 12) {
        currentTimeElement.textContent = `the current time is ${hours}:${minutes} PM`;
    } else {
        currentTimeElement.textContent = `the current time is ${hours}:${minutes} AM`;
    }
}

function updateDate() {
    const now = new Date();
    const day = now.getDate();
    currrentDateElement.textContent = `${day}`;
}

updateTime();
setInterval(updateTime, 60000); // Update every minute
updateDate();
setInterval(updateDate, 86400000); // Update every day


plusElements.forEach(plus => {
    const randomDelay = Math.random() * 5;
    plus.style.animationDelay =  randomDelay + 's';
});

dayTriangle.addEventListener('click', () => {
     window.location.href = 'overseer.html'; // Replace with your target URL
});

const maskTriangle = document.querySelector('.maskTriangle');

dayTriangle.addEventListener('mouseenter', () => {
    maskTriangle.style.animation = 'maskCoverDayTriangle 0.15s ease-out forwards';
});

dayTriangle.addEventListener('mouseleave', () => {
    maskTriangle.style.animation = 'maskUncoverDayTriangle 0.15s ease-out forwards';
});