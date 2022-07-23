


let iniciar = document.querySelector(".iniciar");
let selectDifficulty = document.querySelector(".selectDifficulty");
let valorDifficulty = document.querySelector(".valorDifficulty");
let containerValorDifficulty = document.querySelector(".containerValorDifficulty");
let pageBanner = document.querySelector(".page-banner");
let inputColor = document.querySelector(".inputColor");
let inputUser = document.querySelector(".inputUser");
let nameUser = document.querySelector(".nameUser");
let ContentPlay = document.querySelector(".ContentPlay");
const audioInicio = new Audio("sounds/inicio.mp3");
const audioCaja = new Audio("sounds/caja.mp3");
let validateName = document.querySelector(".validateName");
let addOpaco = document.querySelector(".addOpaco");
let btnOptions = document.querySelector(".btnOptions");
let btnReanudar = document.querySelector(".btnReanudar");
let reiniciarJuego = document.querySelector(".reiniciarJuego");



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
        errorSecondary(validateName, "Completa el campo");
    } else {
        reiniciarJuego.style.display = "block";
        audioInicio.play();
        console.log("no vacio")
        successSecondary(validateName);

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

        ContentPlay.insertAdjacentHTML("afterend", `  <div class="row padding-caja numberCajas justify-content-center align-items-center h-100" style="margin-top:60px">     </div>`);

        let numberCajas = document.querySelector(".numberCajas");

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

        let contentCaja = document.querySelectorAll(".content-caja");
        let contador = 0;

        for (let i = 0; i < contentCaja.length; i++) {
            let caja = contentCaja[i].querySelector(".img-caja");



            caja.addEventListener("click", () => {
                audioCaja.play();
            });

        }



        reiniciarJuego.addEventListener("click", () => {

            if (numberCajas) {
                numberCajas.remove();
                ContentPlay.style.display = ("flex");
                selectDifficulty.style.display = ("flex");
                containerValorDifficulty.style.display = "none";
                reiniciarJuego.style.display = "none";
                addOpaco.classList.remove("opaco");

            }
        })

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

    if (scrollCompleta.requestFullscreen) {
        scrollCompleta.requestFullscreen();

    }
    completa.style.display = "none";
    contraer.style.display = "block";


});

contraerPantalla.addEventListener("click", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
    completa.style.display = "block";
    contraer.style.display = "none";

});


let menuPrueva = document.querySelector(".menuPrueva");

addOpaco.addEventListener("click", () => {
    addOpaco.classList.remove("opaco");
});


btnOptions.addEventListener("click", () => {
    addOpaco.classList.add("opaco");
})








    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName == "Escape") {
            completa.style.display = "block";
            contraer.style.display = "none";
        }

    });








btnReanudar.addEventListener("click", () => {
    addOpaco.classList.remove("opaco");
});








//successSecondary(validateName);

function errorSecondary(id, message) {
    id.classList.add("error");
    let small = id.querySelector('small');
    small.innerText = message;
}

function successSecondary(id, input) {
    id.classList.remove("error");
    let small = id.querySelector('small');
    small.innerText = "";
}

