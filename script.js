const plusElements = document.querySelectorAll('.smallPlus');
const currentTimeElement = document.querySelector('.timeText');
const currrentDateElement = document.querySelector('.dateText');
const dayTriangle = document.querySelector('.dayTriangle');
const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const playPausePath = document.getElementById('playPausePath');


function updateIcon() {
    if (backgroundMusic.paused) {
        playPausePath.setAttribute('stroke', '#fc0b69');
    } else {
        playPausePath.setAttribute('stroke', '#004db3');
    }
}

playPauseButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

// Update icon when audio plays/pauses
backgroundMusic.addEventListener('play', updateIcon);
backgroundMusic.addEventListener('pause', updateIcon);

// Set initial icon on page load
updateIcon();



function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    if (hours >= 12) {
        currentTimeElement.textContent = `the current time is ${hours-12}:${minutes} PM`;
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


