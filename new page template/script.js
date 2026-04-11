const backgroundMusic = document.querySelector('#backgroundMusic');
const playPauseButton = document.querySelector('#playPauseButton');
const playPausePath = document.querySelector('#playPausePath');
const dayTriangle = document.querySelector('.dayTriangle');
const githubButton = document.querySelector('#githubButton');
const maskTriangle = document.querySelector('.maskTriangle');
const currentTimeElement = document.querySelector('.timeText');
const currrentDateElement = document.querySelector('.dateText');

playPauseButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

githubButton.addEventListener('click', () => {
    window.location.href = `https://github.com/arborium-dev/`;
});


dayTriangle.addEventListener('click', () => {
     window.location.href = '../main'; 
});



dayTriangle.addEventListener('mouseenter', () => {
    maskTriangle.style.animation = 'maskCoverDayTriangle 0.15s ease-out forwards';
});

dayTriangle.addEventListener('mouseleave', () => {
    maskTriangle.style.animation = 'maskUncoverDayTriangle 0.15s ease-out forwards';
});

function updateIcon() {
    if (backgroundMusic.paused) {
        playPausePath.setAttribute('stroke', 'var(--color-primary)');
    } else {
        playPausePath.setAttribute('stroke', 'var(--color-accent-bright)');
    }
}


// set initial states on page load
updateIcon();

// update icon and animation when audio plays/pauses
backgroundMusic.addEventListener('play', () => {
    updateIcon();
});
backgroundMusic.addEventListener('pause', () => {
    updateIcon();
});

const colorPalettes = ['root', 'cyberpunk', 'sunset', 'ocean'];
let currentPaletteIndex = 0;

changePallateButton.addEventListener('click', () => {
    document.body.classList.add('palette-switching');
    currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
    const paletteName = colorPalettes[currentPaletteIndex];

    setTimeout(() => {
        // Remove all old palette classes
        document.body.classList.remove('palette-root', 'palette-cyberpunk', 'palette-sunset', 'palette-ocean');
        
        // Add new palette class if not root
        if (paletteName !== 'root') {
            document.body.classList.add(`palette-${paletteName}`);
        }
        
        document.body.classList.remove('palette-switching');
        localStorage.setItem('selectedPalette', paletteName);
    }, 300);
});


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