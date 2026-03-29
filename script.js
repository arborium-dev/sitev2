const plusElements = document.querySelectorAll('.smallPlus');
const currentTimeElement = document.querySelector('.timeText');
const currrentDateElement = document.querySelector('.dateText');
const dayTriangle = document.querySelector('.dayTriangle');
const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const playPausePath = document.getElementById('playPausePath');
const coolCircle = document.querySelector('.coolCircle');
const currentlyPlaying = document.querySelector('.currentlyPlaying');

function updateIcon() {
    if (backgroundMusic.paused) {
        playPausePath.setAttribute('stroke', '#fc0b69');
    } else {
        playPausePath.setAttribute('stroke', '#004db3');
    }
}

function updateCircleAnimation() {
    if (backgroundMusic.paused) {
        coolCircle.classList.add('paused');
    } else {
        coolCircle.classList.remove('paused');
    }
}

function updatePlusAnimations() {
    if (backgroundMusic.paused) {
        plusElements.forEach(plus => {
            plus.classList.add('paused');
        });
    } else {
        plusElements.forEach(plus => {
            plus.classList.remove('paused');
        });
    }
}

function updateCurrentlyPlaying() {
    if (backgroundMusic.paused) {
        currentlyPlaying.classList.add('paused');
    } else {
        currentlyPlaying.classList.remove('paused');
    }
}

playPauseButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

// update icon and animation when audio plays/pauses
backgroundMusic.addEventListener('play', () => {
    updateIcon();
    updateCircleAnimation();
    updatePlusAnimations();
    updateCurrentlyPlaying();
});
backgroundMusic.addEventListener('pause', () => {
    updateIcon();
    updateCircleAnimation();
    updatePlusAnimations();
    updateCurrentlyPlaying();
});

// set initial states on page load
updateIcon();
updateCircleAnimation();
updatePlusAnimations();
updateCurrentlyPlaying();

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



dayTriangle.addEventListener('click', () => {
     window.location.href = 'overseer.html'; 
});

const maskTriangle = document.querySelector('.maskTriangle');

dayTriangle.addEventListener('mouseenter', () => {
    maskTriangle.style.animation = 'maskCoverDayTriangle 0.15s ease-out forwards';
});

dayTriangle.addEventListener('mouseleave', () => {
    maskTriangle.style.animation = 'maskUncoverDayTriangle 0.15s ease-out forwards';
});


