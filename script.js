const plusElements = document.querySelectorAll('.smallPlus');
const currentTimeElement = document.querySelector('.timeText');
const currrentDateElement = document.querySelector('.dateText');
const dayTriangle = document.querySelector('.dayTriangle');
const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const playPausePath = document.getElementById('playPausePath');
const coolCircles = document.querySelectorAll('.coolCircle');
const currentlyPlaying = document.querySelector('.currentlyPlaying');
const subTitle = document.querySelector('.subTitle');
const tempoTriangle = document.querySelector('.topLeft');
const tempoSquare = document.querySelectorAll('square');
const changePallateButton = document.getElementById('changePallateButton');

function updateIcon() {
    if (backgroundMusic.paused) {
        playPausePath.setAttribute('stroke', 'var(--color-primary)');
    } else {
        playPausePath.setAttribute('stroke', 'var(--color-accent-bright)');
    }
}

function updateTempoAnimation() {
    if (backgroundMusic.paused) {
        tempoTriangle.classList.add('paused');
        tempoSquare.forEach(square => {
            square.classList.add('paused');
        });
    } else {
        tempoTriangle.classList.remove('paused');
        tempoSquare.forEach(square => {
            square.classList.remove('paused');
        });
    }
};

function updateCircleAnimation() {
    if (backgroundMusic.paused) {
        coolCircles.forEach(circle => {
            circle.classList.add('paused');
        });
    } else {
        coolCircles.forEach(circle => {
            circle.classList.remove('paused');
        });
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

const colorPalettes = ['root', 'palette-cyberpunk', 'palette-sunset', 'palette-ocean'];
let currentPaletteIndex = 0;

changePallateButton.addEventListener('click', () => {
    currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
    document.body.className = colorPalettes[currentPaletteIndex];
});

// update icon and animation when audio plays/pauses
backgroundMusic.addEventListener('play', () => {
    updateIcon();
    updateCircleAnimation();
    updatePlusAnimations();
    updateCurrentlyPlaying();
    updateTempoAnimation();
});
backgroundMusic.addEventListener('pause', () => {
    updateIcon();
    updateCircleAnimation();
    updatePlusAnimations();
    updateCurrentlyPlaying();
    updateTempoAnimation();
});

// quote setter
const quotes = [
    "Children aren't people - Clef",
    "I'm a real asshole. Full time, always. - Beat",
    "OAOAOAOAOAOAOAOA - Spinning Top",
    "For Super Earth! - John Helldiver",
    "I'm A Potato. - GlaDOS",
    "You insignificant fuck! - Gabriel",
    "Sigh, bapanada - Iselda",
    "You, Sir, Are A Fish. - Arthur Morgan",
];

function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    subTitle.textContent = quotes[randomIndex];
}

// set initial states on page load
updateIcon();
updateCircleAnimation();
updatePlusAnimations();
updateCurrentlyPlaying();
setRandomQuote();
updateTempoAnimation();

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
setInterval(updateTime, 1000); // Update every second
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


