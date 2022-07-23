
let numberCajas = document.querySelector(".numberCajas");
let iniciar = document.querySelector(".iniciar");
let selectDifficulty = document.querySelector(".selectDifficulty");
let valorDifficulty = document.querySelector(".valorDifficulty");
let containerValorDifficulty = document.querySelector(".containerValorDifficulty");
let pageBanner = document.querySelector(".page-banner");
let inputColor = document.querySelector(".inputColor");
let inputUser = document.querySelector(".inputUser");
let nameUser = document.querySelector(".nameUser");
let ContentPlay = document.querySelector(".ContentPlay");
/* var sonidoCaja = document.createElement("iframe");
sonidoCaja.setAttribute("src", "sounds/caja.mp3");
var sonido = document.createElement("iframe");
sonido.setAttribute("src", "sounds/inicio.mp3"); */
const audioInicio = new Audio("sounds/inicio.mp3");
const audioCaja = new Audio("sounds/caja.mp3");


//Evento que asigna el color de fondo del juego
inputColor.addEventListener("change", () => {
    pageBanner.style.backgroundColor = inputColor.value;
});

// evento que genera el número de cajas

iniciar.addEventListener("click", () => {




    /* let gameOver = false; let gameWin = false; const gameOverSound = new Audio("sounds/fim.wav"); const gameOverSound = new Audio("sounds/fim.wav"); const gameWinSound = new Audio("sounds/gameWin.wav"); let stopButton = document.querySelector("DivClass or DivID"); stopButton.onclik = ()=>{ gameOverSound.pause() gameWinSound.pause() } */


    function errorValidation(input, message) {

    }

    if (inputUser.value == "") {
        console.log("vacio")
    } else {
        audioInicio.play();
        console.log("no vacio")

        ContentPlay.style.display = ("none");
        selectDifficulty.style.display = ("none");
        containerValorDifficulty.style.display = "block";
        nameUser.textContent = inputUser.value;

        if (selectDifficulty.value == 6) {
            valorDifficulty.textContent = "Facil";
        } else if (selectDifficulty.value == 8) {
            valorDifficulty.textContent = "Madiana";
        } else {
            valorDifficulty.textContent = "Dificil";
        }

        numberCajas.insertAdjacentHTML("beforeend", ` <div class="col-md-12 text-center">
          <h2>Toca una caja para abrirla</h2>
        </div>`);

        for (let i = 0; i < selectDifficulty.value; i++) {

            numberCajas.insertAdjacentHTML("beforeend", `  <div class="col-md-3">
          <div class="content-caja">
            <div class="img-caja" style="position: relative;">
              <img class="caja" src="img/caja.png" alt="">
              <img class="caja-black" src="img/caja-black.png" alt="">
              <span class="numCaja h2 ">`+ [i + 1] + `</span>
            </div>
          </div>
        </div>`);
        }
    }
    let contentCaja = document.querySelectorAll(".content-caja");
    let contador = 0;

    for (let i = 0; i < contentCaja.length; i++) {
        let caja = contentCaja[i].querySelector(".img-caja");



        caja.addEventListener("click", () => {
            audioCaja.play();
        });



    }
});

let sonidoin = document.querySelector(".sonidoin");
let sonidooff = document.querySelector(".sonidooff");
let completePantalla = document.querySelector(".completePantalla");
let contraerPantalla = document.querySelector(".contraerPantalla");

let noSound = document.querySelector(".noSound");
let yesSound = document.querySelector(".yesSound");
let completa = document.querySelector(".completa");
let contraer = document.querySelector(".contraer");
noSound.addEventListener("click", () => {
    audioInicio.volume = 0;
    audioCaja.volume = 0;
    sonidoin.style.display = "none";
    sonidooff.style.display = "block";


});

yesSound.addEventListener("click", () => {
    audioInicio.volume = 1;
    audioCaja.volume = 1;
    sonidooff.style.display = "none";
    sonidoin.style.display = "block";

});

completePantalla.addEventListener("click", () => {
    var scrollCompleta = document.getElementById("scrollCompleta");
    var menuOptionsCompleta = document.querySelector(".menu-options-completa");
    var menuFooter = document.querySelector(".menu-footer");
    if (scrollCompleta.requestFullScreen) {
        scrollCompleta.requestFullScreen();
    } else if (scrollCompleta.mozRequestFullScreen) {
        scrollCompleta.mozRequestFullScreen();
    } else if (scrollCompleta.webkitRequestFullScreen) {
        scrollCompleta.webkitRequestFullScreen();
    }
    scrollCompleta.classList.add("pantalla-completa");
    menuFooter.classList.add("menus-fixed");
  //  menuOptionsCompleta.classList.add("menus-fixed");
    completa.style.display = "none";
    contraer.style.display = "block";
});

contraerPantalla.addEventListener("click", () => {
    var scrollCompleta = document.getElementById("scrollCompleta");
    var menuOptionsCompleta = document.querySelector(".menu-options-completa");
    var menuFooter = document.querySelector(".menu-footer");
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
    scrollCompleta.classList.remove("pantalla-completa");
    menuFooter.classList.remove("menus-fixed");
   // menuOptionsCompleta.classList.remove("menus-fixed");
    completa.style.display = "block";
    contraer.style.display = "none";
});


