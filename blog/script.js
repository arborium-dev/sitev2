const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const playPausePath = document.getElementById('playPausePath');

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

function updateIcon() {
    if (backgroundMusic.paused) {
        playPausePath.setAttribute('stroke', 'var(--color-primary)');
    } else {
        playPausePath.setAttribute('stroke', 'var(--color-dark-primary)');
    }
}


// set initial states on page load
updateIcon();

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