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
        musicVideoList[0].load();
        musicVideoList[0].play();
    }
});

let musicVideoOrder = 0;

document.querySelector(".fp-arrow.fp-prev").addEventListener('click', function() {prevMusicSlide()});
document.querySelector(".fp-arrow.fp-next").addEventListener('click', function() {nextMusicSlide()});

//If user presses left or right arrow on keyboard, change slide accordingly
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

//Detect touch swipes in section2 and changes music video accordingly
//Code from: https://www.folkstalk.com/2022/07/detect-swipe-left-right-javascript-with-code-examples.html
document.getElementById("section2").addEventListener('touchstart', handleTouchStart, false);        
document.getElementById("section2").addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            nextMusicSlide();
        } else {
            /* right swipe */
            prevMusicSlide();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

//Mobile Menu scripts
const mobileMenu = document.getElementById("nav-icon");
const mobileMenuPath = document.getElementById("menu-path");
const navWrapper = document.getElementById("nav-wrapper");
mobileMenu.addEventListener('click', toggleMenu);

let toggleMenuBool = 0;

function toggleMenu() {
    if ((window.innerHeight > window.innerWidth) || (window.innerHeight < window.innerWidth && window.innerHeight <= 500)) {
        if (toggleMenuBool == 0) {
            openMenu();
        }
        else {
            closeMenu();
        }
    }
}

function openMenu() {
    mobileMenu.style.transform = 'rotate(90deg)';
    mobileMenuPath.style.stroke = '#ff8f2e';
    navWrapper.style.display = 'block';
    toggleMenuBool = 1;
}

function closeMenu() {
    mobileMenu.style.transform = 'rotate(0deg)';
    mobileMenuPath.style.stroke = '#fafafa';
    navWrapper.style.display = 'none';
    toggleMenuBool = 0;
}