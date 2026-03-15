const plusElements = document.querySelectorAll('.smallPlus');

plusElements.forEach(plus => {
    const randomDelay = Math.random() * 5;
    plus.style.animationDelay =  randomDelay + 's';
});