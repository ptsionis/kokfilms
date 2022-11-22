"use strict";

//A list that contains all video objects from section 2
const musicVideoList = document.querySelectorAll(".music-video");

window.addEventListener('load', () => {
    //When document finishes loading, display page and fade out preloader. After 500ms do not display preloader.
    document.getElementById("fullpage-wrapper").style.display = "block";
    document.getElementById("preloader").classList.add("preloader-finish");
    document.querySelector("#fp-nav").style.display = "block";
    setTimeout(() => {
        document.getElementById("preloader").style.display = 'none';
    }, 500);

    if (!musicVideoList.length==0) {
        musicVideoList[0].play();
    }
});

let musicVideoOrder = 0;

document.querySelector(".fp-arrow.fp-prev").addEventListener('click', function() {prevMusicSlide()});
document.querySelector(".fp-arrow.fp-next").addEventListener('click', function() {nextMusicSlide()});
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        prevMusicSlide();
    }
    else if (e.keyCode == 39) {
        nextMusicSlide();
    }
});

function prevMusicSlide() {
    musicVideoList.forEach(element => {
        element.pause();
    });

    musicVideoOrder--;
    if (musicVideoOrder < 0) {
        musicVideoList[musicVideoList.length-1].load();
        musicVideoList[musicVideoList.length-1].play();
        musicVideoOrder = 2;
    }
    else {
        musicVideoList[musicVideoOrder].load();
        musicVideoList[musicVideoOrder].play();
    }
}

function nextMusicSlide() {
    musicVideoList.forEach(element => {
        element.pause();
    });

    musicVideoOrder++;
    if (musicVideoOrder < 0) {
        musicVideoList[0].play();
        musicVideoOrder = 0;
    }
    else {
        musicVideoList[musicVideoOrder].play();
    }
}