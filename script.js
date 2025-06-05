//---------MENU------------//

const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

         //O clique pra quando clicar no hamburguer
   toggle.addEventListener('click', () =>{
       // adiciona a classe show-menu na nav menu
       nav.classList.toggle('show-menu')

       // adiciona show-icon pra mostrar e tirar o icone
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

//----------MODO CLARO E MODO ESCURO ------------//

let lightmode = localStorage.getItem('lightmode')
const alternaTema = document.getElementById ('alterna-tema')

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode === 'active') enableLightmode ()

alternaTema.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
     lightmode !== "active" ? enableLightmode() : disableLightmode()

})

//----CARROSSEL TEMPORADAS----//

 new Swiper ('.card-wrapper', {
    loop: true,
    spaceBetween: 30,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //RESPONSIVIDADE//

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

//----------COOKIES------------//

document.addEventListener("DOMContentLoaded", function () {
    const cookiesMsg = document.getElementById ("cookiesMsg");

    //Se os cookies já foram aceitos//
    if(!localStorage.getItem("cookiesAccepted")) {
        cookiesMsg.classList.add("mostrar");
    }

    //Para aceitar os Cookies//
    window.aceitar = function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiesMsg.classList.remove("mostrar");
    };
});