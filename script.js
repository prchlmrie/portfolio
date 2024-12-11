const backgroundMusic = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

let isPlaying = false;
let firstClick = false;

// Play music on first click anywhere on the page
document.addEventListener("click", () => {
    if (!firstClick) {
        backgroundMusic.play();
        isPlaying = true;
        firstClick = true;
    }
});

// Toggle music on/off when the music icon is clicked
musicToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering the first click handler
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove("playing");
    } else {
        backgroundMusic.play();
        musicToggle.classList.add("playing");
    }
    isPlaying = !isPlaying;
});
    
document.addEventListener('DOMContentLoaded', function () {
const letter = document.getElementById('hogwarts-letter');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

letter.addEventListener('click', function () {
letter.style.animation = 'zoomOut 1s forwards';
setTimeout(function () {
    splashScreen.style.display = 'none';
    mainContent.style.display = 'block';
}, 1000); // Wait for the animation to finish
});
});
