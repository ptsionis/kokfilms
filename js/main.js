"use strict";

window.addEventListener('load', () => {
    document.getElementById("fullpage-wrapper").style.display = "block";
    document.getElementById("preloader").classList.add("preloader-finish");
    document.querySelector("#fp-nav").style.display = "block";
    setTimeout(() => {
        document.getElementById("preloader").style.display = 'none';
    }, 500)
});