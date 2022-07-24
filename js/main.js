


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
const audiofinal = new Audio("sounds/final.mp3");
const audioCaja = new Audio("sounds/caja.mp3");
const correcto = new Audio("sounds/correcto.mp3");
const incorrecto = new Audio("sounds/incorrecto.mp3");
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

            numberCajas.insertAdjacentHTML("beforeend", ` <div class="col-md-3 col-6 abrirModal">

            <div class="content-caja">
              <div class="img-caja" style="position: relative;">
                <img class="caja" src="img/caja.png" alt="">
                <img class="caja-black" src="img/caja-black.png" alt="">
                <span class="numCaja h2 ">`+ [i + 1] + `</span>
               
              </div>
              <div class="posicion-icono-juego">
              <i class="agreagrIcono"></i>
            </div>
            </div>
          </div>`);
        }




        let contentCaja = document.querySelectorAll(".content-caja");
        let abrirModal = document.querySelectorAll(".abrirModal");
        let contador = 0;

        for (let i = 0; i < abrirModal.length; i++) {
            let caja = abrirModal[i].querySelector(".img-caja");
            let agreagrIcono = abrirModal[i].querySelector(".agreagrIcono");
            let posicionIconoJuego = abrirModal[i].querySelector(".posicion-icono-juego");



            // evento de abrir caja modal y obciones de respuesta e la caja
            caja.addEventListener("click", () => {
                addModal(abrirModal[i]);

                let modal = document.querySelector('.modal-shoppingCart');
                let btnCancelar = document.querySelector(".btn-cancelar");
                let closess = document.getElementById('closess');
                let modalOpaco = document.querySelector(".opacity-modal");
                let dialog = document.querySelector(".modal-dialog");
                audioCaja.play();
                console.log("conciertoffffff");
                correcto.load();

                //eventos de cerrar modal
                btnCancelar.addEventListener("click", () => {
                    modal.remove();
                    audioCaja.load();
                });

                closess.addEventListener("click", () => {
                    modal.remove();
                    audioCaja.load();
                });

                modalOpaco.addEventListener("click", () => {
                    console.log("cococococcococo");
                    modal.remove();
                    audioCaja.load();
                });





                let optionModalHijo = document.querySelectorAll(".option-modal-hijo");
                console.log(optionModalHijo.length)
                for (let j = 0; j < optionModalHijo.length; j++) {
                    optionModalHijo[j].style.backgroundColor = inputColor.value;
                    if (optionModalHijo[j]) {
                        optionModalHijo[j].addEventListener("click", () => {
                            modal.remove();
                            caja.classList.add("desabledd");
                            //incorrecto.play();
                            correcto.play();
                            audioCaja.load();


                            //agregar iconos de correcto e incorrecto con su respectivo color
                            //respuesta mal
                            // agreagrIcono.classList.add("icofont-close-circled");
                            // posicionIconoJuego.classList.add("color-danger");

                            //respuesta mal

                            agreagrIcono.classList.add("icofont-check-circled");
                            posicionIconoJuego.classList.add("color-success");


                            let desabledd = document.querySelectorAll(".desabledd");
                            console.log(desabledd.length)

                            if (desabledd.length == abrirModal.length) {
                                console.log("listos");
                                audiofinal.play();
                                numberCajas.remove();
                                ContentPlay.insertAdjacentHTML("afterend", `         <div class="row containerFinich justify-content-center align-items-center h-100" style="margin-top:140px">
                                <div class="col-md-12 text-center">
                                  <h2 class="mb-4">Felicitaciones o <br> sigue participando</h2>
                                  <h5><span class="nameFinich" style="color: #333;font-weight: 600;"></span><span> tu puntaje es:</span></h5>
                                  <h1 style="color: #6C55F9;">5.3</h1><span> Puntos</span>
                                  <div>
                                    <button type="button" class="mt-5 btn-menu icon-actualizar">
                                      <i class="icofont-refresh"></i>
                                    </button>
                                  </div>
                                  
                                </div>
                              </div>`);

                                let nameFinich = document.querySelector(".nameFinich");
                                nameFinich.textContent = inputUser.value;

                                let iconActualizar = document.querySelector(".icon-actualizar");
                                iconActualizar.addEventListener("click", () => {
                                    audiofinal.load();
                                    if (numberCajas) {
                                        numberCajas.remove();
                                        ContentPlay.style.display = ("flex");
                                        selectDifficulty.style.display = ("flex");
                                        containerValorDifficulty.style.display = "none";
                                        reiniciarJuego.style.display = "none";
                                        addOpaco.classList.remove("opaco");

                                    }
                                    let containerFinich = document.querySelector(".containerFinich");
                                    containerFinich.remove();

                                });
                            }

                        });
                    }

                }




            });




        }








        //eventos de reiniciar juegos

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

//evento de quitar el sonido
noSound.addEventListener("click", () => {
    audioInicio.volume = 0;
    audioCaja.volume = 0;
    correcto.volume = 0;
    incorrecto.volume = 0;
    audiofinal.volume = 0;
    sonidoin.style.display = "none";
    sonidooff.style.display = "block";
});

//evento de colocar el sonido
yesSound.addEventListener("click", () => {
    audioInicio.volume = 1;
    audioCaja.volume = 1;
    correcto.volume = 1;
    incorrecto.volume = 1;
    audiofinal.volume = 1;
    sonidooff.style.display = "none";
    sonidoin.style.display = "block";

});

// eventos para la pantalla completa del juego aumentar y contraer
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

//evento de quitar lo opaco del juego

let menuPrueva = document.querySelector(".menuPrueva");

addOpaco.addEventListener("click", () => {
    addOpaco.classList.remove("opaco");
});



//evento de opciones del juego

btnOptions.addEventListener("click", () => {
    addOpaco.classList.add("opaco");
})






//evento de quitar la pantalla completa conn el boton esc

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == "Escape") {
        completa.style.display = "block";
        contraer.style.display = "none";
    }

});


//evento de reaunar el juego


btnReanudar.addEventListener("click", () => {
    addOpaco.classList.remove("opaco");
});






// funciones
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

function closeModalShoppingCart() {

    addOpaco.classList.remove("opaco");
    modal.classList.remove("is-visible");
    modalOpaco.classList.remove("is-visible");
    dialog.classList.remove("is-visible-dialog");
}

function addModal(abrirModal) {
    abrirModal.insertAdjacentHTML("beforebegin", `      

    <div class="modal-shoppingCart" style="position: absolute;">
      <div class="opacity-modal">

      </div>
      <div class="modal-dialog modal-dialog-scrollable" style="width: 900px;">
        <div class="modal-content">
          <div class="modal-header align-middle">
            <h5 class="modal-title" title="text-center">Seleccione la opcion correcta</h5>
            <a id="closess" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></a>
          </div>


          <form id="formDataSubscription" action="/user/user-profile-data/photoProfile" method="POST"
            enctype="multipart/form-data">
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4 text-center">
                  <div class="option-modal-padre mt-1 mb-4">
                    <button  type="button" class="option-modal-hijo">
                      <div class="mr-3 option-modal-letra">
                        <span>A</span>
                      </div>
                      <div class="option-modal-respuesta">
                        <span>1234</span>
                      </div>
                    </button>
                  </div>
                  <div class="option-modal-padre">
                    <button  type="button" class="option-modal-hijo">
                      <div class="mr-3 option-modal-letra">
                        <span>B</span>
                      </div>
                      <div class="option-modal-respuesta">
                        <span>1234</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div class="col-md-4 text-center">
                  <!-- <h2 style="font-weight: 600;">1234</h2> -->
                  <div class="box-img-modal">
                    <span class="numCaja-number h1">XXII</span>
                    <img src="img/caja-open.png" alt="">
                    <span class="numCaja-open h2 ">1</span>
                  </div>
                </div>

                <div class="col-md-4 text-center">
                  <div class="option-modal-padre mt-1 mb-4">
                    <button  type="button" class="option-modal-hijo">
                      <div class="mr-3 option-modal-letra">
                        <span>C</span>
                      </div>
                      <div class="option-modal-respuesta">
                        <span>1234</span>
                      </div>
                    </button>
                  </div>
                  <div class="option-modal-padre">
                    <button  type="button" class="option-modal-hijo">
                      <div class="mr-3 option-modal-letra">
                        <span>D</span>
                      </div>
                      <div class="option-modal-respuesta">
                        <span>1234</span>
                      </div>
                    </button>
                  </div>
                </div>

              </div>

            </div>

            <div class="modal-footer">
              <div class="container text-center">
                <button type="button" class="btn btn-primary btn-cancelar">Volver</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`)
}