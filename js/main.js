


let iniciarCaja = document.querySelector(".iniciarCaja");
let iniciarMayor = document.querySelector(".iniciarMayor");
let iniciarKahoot = document.querySelector(".iniciarKahoot");
let iniciarRuleta = document.querySelector(".iniciarRuleta");

let selectDifficulty = document.querySelector(".selectDifficulty");
let valorDifficulty = document.querySelector(".valorDifficulty");
let containerValorDifficulty = document.querySelector(".containerValorDifficulty");
let pageBanner = document.querySelector(".page-banner");
let inputColor = document.querySelector(".inputColor");
let inputUser = document.querySelector(".inputUser");
let nameUser = document.querySelector(".nameUser");
let ContentPlay = document.querySelector(".ContentPlay");
const audioInicio = new Audio("sounds/inicio.mp3");
const audioJazz = new Audio("sounds/jazz.mp3");
const audiofinal = new Audio("sounds/final.mp3");
const audioCaja = new Audio("sounds/caja.mp3");
const correcto = new Audio("sounds/correcto.mp3");
const incorrecto = new Audio("sounds/incorrecto.mp3");
const audioRuleta = new Audio("sounds/ruleta.mp3");
let validateName = document.querySelector(".validateName");
let addOpaco = document.querySelector(".addOpaco");
let btnOptions = document.querySelector(".btnOptions");
let btnReanudar = document.querySelector(".btnReanudar");
let reiniciarJuego = document.querySelector(".reiniciarJuego");

//Evento que asigna el color de fondo del juego
inputColor.addEventListener("change", () => {
  pageBanner.style.backgroundColor = inputColor.value;
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
  audioJazz.volume = 0;
  audioRuleta.volume = 0;
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
  audioJazz.volume = 1;
  audioRuleta.volume = 1;
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


function addactualizarJuego() {
  console.log("listos");
  audiofinal.play();


  let containerFinich = document.querySelector(".containerFinich");
  let nameFinich = document.querySelector(".nameFinich");
  nameFinich.textContent = inputUser.value;

  let iconActualizar = document.querySelector(".icon-actualizar");
  iconActualizar.addEventListener("click", () => {
    audiofinal.load();
    ContentPlay.style.display = ("flex");
    selectDifficulty.style.display = ("flex");
    containerValorDifficulty.style.display = "none";
    reiniciarJuego.style.display = "none";
    addOpaco.classList.remove("opaco");
    containerFinich.remove();

  });

  reiniciarJuego.addEventListener("click", () => {
    containerFinich.remove();
  });
}

function reiniciaJuegos(evento, sonido) {
  reiniciarJuego.addEventListener("click", () => {
    if(sonido){
      sonido.load();
    }
    evento.remove();
    ContentPlay.style.display = ("flex");
    selectDifficulty.style.display = ("flex");
    containerValorDifficulty.style.display = "none";
    reiniciarJuego.style.display = "none";
    addOpaco.classList.remove("opaco");

  })
}


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


function addModal(abrirModal, i) {
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
                    <span class="numCaja-open h2 ">`+ [i + 1] + `</span>
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

function addKahoot(ContentPlay) {

  ContentPlay.insertAdjacentHTML("afterend", ` 
  <div class="card-body-juego juego-kahoot">
  <div class="row numberCajas justify-content-center align-items-center h-100" style="margin-top:60px">
    <div class="col-md-12 text-right">
      <P class="p1"><span class="text-primary b">1</span> de <span class="items"></span></P>
    </div>

    <div class="col-md-12 text-center">
      <h3>Al colocar el símbolo I a la izquierda de V o X, éste le:</h3>
    </div>
  </div>

  <style>
    #optionsKahoot .col-md-6 {
      padding-right: 5px;
      padding-left: 5px;
    }
  </style>


  <div class="row numberCajas justify-content-center align-items-center h-100" id="optionsKahoot">
    <div class="col-md-6 col-6" style="position: absolute; bottom: 158px; left: 0px;">
      <div class="evento-mayor">
        <div class="content-respuesta-padre-kahoot" style=" background-color: #ff4e4e;">
          <div class="content-respuesta-text-kahoot">
            <div class="mr-4 simbolo-kahoot">
              <img src="img/triangolo.png" alt="">
            </div>
            <div class="respuesta-kahoot">
              <span>Resta su valor</span>
            </div>
          </div>
          <div class="posicion-icono-juego">
            <i class="agreagrIcono"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-6" style="position: absolute; bottom: 60px; left: 0px;">
      <div class="evento-mayor">
        <div class="content-respuesta-padre-kahoot" style=" background-color: #4ec1ff;">
          <div class="content-respuesta-text-kahoot">
            <div class="mr-4 simbolo-kahoot">
              <img src="img/circulo.png" alt="">
            </div>
            <div class="respuesta-kahoot">
              <span>Suma su valor</span>
            </div>
          </div>
          <div class="posicion-icono-juego">
            <i class="agreagrIcono"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-6" style="position: absolute; bottom: 158px; right: 0px;">
      <div class="evento-mayor">
        <div class="content-respuesta-padre-kahoot" style=" background-color: #fff34e;">
          <div class="content-respuesta-text-kahoot">
            <div class="mr-4 simbolo-kahoot">
              <img src="img/rombo.png" alt="">
            </div>
            <div class="respuesta-kahoot">
              <span>Multiplica la expresión por mil</span>
            </div>
          </div>
          <div class="posicion-icono-juego">
            <i class="agreagrIcono"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-6" style="position: absolute; bottom: 60px; right: 0px;">
      <div class="evento-mayor">
        <div class="content-respuesta-padre-kahoot" style=" background-color: #4eff7a;">
          <div class="content-respuesta-text-kahoot">
            <div class="mr-4 simbolo-kahoot">
              <img src="img/cuadrado.png" alt="">
            </div>
            <div class="respuesta-kahoot">
              <span>Ninguna de las anteriores</span>
            </div>
          </div>
          <div class="posicion-icono-juego">
            <i class="agreagrIcono"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`);
}

function addMayor(ContentPlay) {
  ContentPlay.insertAdjacentHTML("afterend", `        <div class="card-body-juego juego-mayor">
  <div class="row numberCajas justify-content-center align-items-center h-100" style="margin-top:60px">
    <div class="col-md-12 text-right">
      <P class="p1"><span class="text-primary b">1</span> de <span class="items"></span></P>
    </div>

    <div class="col-md-12 text-center">
      <h1 style="font-size: 70px;">¿Cual Número es <br> Mayor?</h1>
      <!-- 
<i class="icofont-thin-left" style="font-weight: 700; font-size: 50px;"></i> -->
    </div>
  </div>

  <div class="row numberCajas justify-content-center align-items-center h-100">
    <div class="col-md-6 col-6" style="position: absolute; bottom: 60px; left: 0px;">
      <div class="evento-mayor">
        <div class="content-respuesta-padre-mayor" style=" background-color: #4ec1ff;">
          <div class="content-respuesta-text-mayor">
            <div class="mr-4 simbolo-mayor">
              <span>A</span>
            </div>
            <div class="text-center respuesta-mayor">
             <span>XVIII</span>
            </div>
          </div>
          <div class="posicion-icono-juego">
            <i class="agreagrIcono"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-6" style="position: absolute; bottom: 60px; right: 0px;">
      <div class="evento-mayor">
        <div class="content-respuesta-padre-mayor" style=" background-color: #ff4e4e;">
          <div class="content-respuesta-text-mayor">
            <div class="mr-4 simbolo-mayor">
              <span>B</span>
            </div>
            <div class="text-center respuesta-mayor">
             <span>V</span>
            </div>
          </div>
          <div class="posicion-icono-juego">
            <i class="agreagrIcono"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);

}

function addResultCorrecto(juegoMayor) {

  juegoMayor.insertAdjacentHTML("afterend", `<div class="card-body-juego respuestaCorrecta">
  <div class="row numberCajas justify-content-center align-items-center h-100" style="margin-top:60px">
    <div class="col-md-12 text-right">
      <P class="p1"><span class="text-primary b">1</span> de <span class="itemsRespuestas"></span></P>
    </div>
    <div class="col-md-12 text-center mb-4">
      <i class="icofont-check-circled iconMayorCorrecta"></i>
      <h1>Respuesta Correcta</h4>
        <h4>Tu Respuesta es: <span class="textRespuesta">XII</span></h4>
    </div>

    <div class="col-md-12 text-center">
      <button type="button" class="btn btn-secondary btn-siguiente"> Siguiente </button>
    </div>

  </div>
</div>`);

}

function addResultIncorrecto(juegoMayor) {

  juegoMayor.insertAdjacentHTML("afterend", `<div class="card-body-juego respuestaIncorrecta">
  <div class="row numberCajas justify-content-center align-items-center h-100" style="margin-top:60px">
    <div class="col-md-12 text-right">
      <P class="p1"><span class="text-primary b">1</span> de <span class="itemsRespuestas"></span></P>
    </div>
    <div class="col-md-12 text-center mb-4">
      <i class="icofont-close-circled iconMayorIncorrecta"></i>
      <h1>Respuesta Incorrecta</h4>
        <h4>Tu Respuesta es: <span class="textRespuesta">XII</span></h4>
        <h4>La respuesta correcta es: <span class="textRespuesta">V</span></h4>
    </div>

    <div class="col-md-12 text-center">
      <button type="button" class="btn btn-secondary btn-siguiente"> Siguiente </button>
    </div>

  </div>
</div>`);

}

function addMessageFinich(ContentPlay) {
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
}

