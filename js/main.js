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
    //Pauses all music videos
    musicVideoList.forEach(element => {
        element.pause();
    });

    //Index of the video that should be played decrements, if it goes to -1, last video is played and index goes to length-1
    musicVideoOrder--;
    if (musicVideoOrder < 0) {
        musicVideoOrder = musicVideoList.length-1;
    }
    musicVideoList[musicVideoOrder].load();
    musicVideoList[musicVideoOrder].play();
}

function nextMusicSlide() {
    //Pauses all music videos
    musicVideoList.forEach(element => {
        element.pause();
    });

    //Index of the video that should be played increments, if it goes to length, first video is played and index goes to 0
    musicVideoOrder++;
    if (musicVideoOrder > musicVideoList.length-1) {
        musicVideoOrder = 0;
    }
    musicVideoList[musicVideoOrder].load();
    musicVideoList[musicVideoOrder].play();
}