const backgroundMusic = document.querySelector('#backgroundMusic');
const playPauseButton = document.querySelector('#playPauseButton');
const playPausePath = document.querySelector('#playPausePath');
const dayTriangle = document.querySelector('.dayTriangle');
const githubButton = document.querySelector('#githubButton');
const maskTriangle = document.querySelector('.maskTriangle');

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