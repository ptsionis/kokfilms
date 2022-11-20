"use strict";

const musicVideo1 = document.getElementById("music-video1");
const musicVideo2 = document.getElementById("music-video2");
const musicVideo3 = document.getElementById("music-video3");

window.addEventListener('load', () => {
    document.getElementById("fullpage-wrapper").style.display = "block";
    document.getElementById("preloader").classList.add("preloader-finish");
    document.querySelector("#fp-nav").style.display = "block";
    setTimeout(() => {
        document.getElementById("preloader").style.display = 'none';
    }, 500)
});

let musicVideoOrder = 1;

document.querySelector(".fp-arrow.fp-prev").addEventListener('click', prevMusicSlide());
document.querySelector(".fp-arrow.fp-next").addEventListener('click', nextMusicSlide());
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        prevMusicSlide();
    }
    else if (e.keyCode == 39) {
        nextMusicSlide();
    }
})

function prevMusicSlide() {
    musicVideo1.pause();
    musicVideo2.pause();
    musicVideo3.pause();

    musicVideoOrder--;
    switch (musicVideoOrder) {
        case 1:
            musicVideo1.play();
            musicVideo2.pause();
            musicVideo3.pause();
            break;
        case 2:
            musicVideo1.pause();
            musicVideo2.play();
            musicVideo3.pause();
            break;
        case 3:
            musicVideo1.pause();
            musicVideo2.pause();
            musicVideo3.play();
            break;
        default:
            musicVideo1.pause();
            musicVideo2.pause();
            musicVideo3.play();
            musicVideoOrder = 1;
            break;
    }
}

function nextMusicSlide() {
    musicVideo1.pause();
    musicVideo2.pause();
    musicVideo3.pause();

    musicVideoOrder++;
    switch (musicVideoOrder) {
        case 1:
            musicVideo1.play();
            musicVideo2.pause();
            musicVideo3.pause();
            break;
        case 2:
            musicVideo1.pause();
            musicVideo2.play();
            musicVideo3.pause();
            break;
        case 3:
            musicVideo1.pause();
            musicVideo2.pause();
            musicVideo3.play();
            break;
        default:
            musicVideo1.play();
            musicVideo2.pause();
            musicVideo3.pause();
            musicVideoOrder = 1;
            break;
    }
}