const year = new Date().getFullYear();
const initYear = year - 2005;
const yyyy = document.querySelector('.yyyy');

yyyy.append(initYear); 

function setCookie(cname, cvalue, exdays) {
    let d = new Date();

    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function removeCookie(cname){
    setCookie(cname,"",-1);
};

function detectCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0 && (name.length != c.length))  {
            return true;
        }
    }
    return false;
};
document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init(){
    bloqueRGPD = document.querySelector('.cookieBox');
    if (localStorage.acceptedCookies != 'true') {
    bloqueRGPD.style.display = 'inline-block';    
    }

    if(detectCookie("rgpdOK")){
        if (getCookie("rgpdOK")==1){eliminarBloqueRGPD();}
    }else{
        document.querySelector(".botonRGPD").addEventListener("click", () => {
            eliminarBloqueRGPD();
            setCookie("rgpdOK",1,365);
        });
    }
};

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';
};

// const zero = document.querySelector('.home-slider');
// const one = document.querySelector('.home-slider-conten');
const button = document.querySelector('.nav-button');
const menu = document.querySelector('.collapse');

button.addEventListener('click', () => {
    menu.classList.toggle('navbar-collapse');
});

function showTest(a) {
    // a.style.display = 'block';
    a.classList.add('show');
};


const buttonParr = document.querySelectorAll(".button__parr");
const parr = document.querySelectorAll(".diag__parr");

let whatsAppWidget = document.querySelector(".whatsapp--widget");
let whatsAppNumbers = document.querySelector(".whatsapp--numbers");

function nums(a,b) {
    for(let i= 0;i<buttonParr.length;i++){
        a[i].addEventListener('click', () => {
            b[i].classList.toggle('diag__parrB');
        });
    }
};

nums(buttonParr,parr);

whatsAppWidget.addEventListener('click', () => {
    whatsAppNumbers.classList.toggle('hide__parr');
});

const socialNav = document.querySelectorAll('.social--line');

const socialFooter = document.querySelector('.social');

// const social = [ 
//     `<div>
//         <span class="facebook"><a href="https://www.facebook.com/crcvpanama" target="_blank" aria-label="FACEBOOK"><i class="bi bi-facebook"></i></a></span>
//     </div>`,
//     `<div>
//         <span class="whatsapp"><a target="_blank" href="https://wa.me/50765991052?text=Hola%20estoy%20interesado%20y%20deseo%20más%20información."><i class="bi bi-whatsapp"></i></a></span>
//     </div>`,
//     `<div>
//         <span class="youtube"><a target="_blank" href="https://www.youtube.com/channel/UCjhJ2PgAVZLeuqYWTsE5-Qg"><i class="bi bi-youtube"></i></a></span>
//     </div>`,
//     `<div>
//         <span class="instagram"><a target="_blank" href="https://www.instagram.com/crcvpanama/?r=nametag"><i class="bi bi-instagram"></i></a></span>
//     </div>`
// ];

const socialSVG = [ 
    `<div>
        <figure class="facebook"><a href="https://www.facebook.com/crcvpanama" target="_blank" aria-label="FACEBOOK"><img src="./public/img/svg/facebook.svg" ></a></figure>
    </div>`,
    `<div>
        <figure class="whatsapp"><a target="_blank" href="https://wa.me/50765991052?text=Hola%20estoy%20interesado%20y%20deseo%20más%20información."><img src="./public/img/svg/WhatsApp.svg"></a></figure>
    </div>`,
    `<div>
        <figure class="youtube"><a target="_blank" href="https://www.youtube.com/channel/UCjhJ2PgAVZLeuqYWTsE5-Qg"><img src="./public/img/svg/youtube.svg"></a></figure>
    </div>`,
    `<div>
        <figure class="instagram"><a target="_blank" href="https://www.instagram.com/crcvpanama/?r=nametag"><img src="./public/img/svg/instagram.svg"></a></figure>
    </div>`
];

function socialWeb(a) {
    socialSVG.map((elemment) => {
    // let elemment; 
        a.innerHTML += elemment;
    });
};

// showTest(imagesTest);
setTimeout(() => {
    showTest(whatsAppWidget);
    // socialWeb(socialFooter);
    socialWeb(socialNav[0]);
    socialWeb(socialNav[1]);
}, 7000);

// const summary = document.getElementsByClassName('summary');
// console.log(summary);
// function hideSummary(a) {
//     for(let i=0;i<summary.length;i++){
//         summary[a].addEventListener('click', () => {
//             summary[a].style.display = 'none';
//         });
//     }
// };

// for(let i=0;i<summary.length;i++) {
//     hideSummary(i);
// };

// window.onload = function() {
//     var opar = document.getElementById('paragraph').innerHTML;

//     function highlight() {
//         var paragraph = document.getElementById('paragraph');
//         var search = document.getElementById('typed-text').value;
//         search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
//         var re = new RegExp(search, 'g');
//         var m;

//         if (search.length > 0)
//              paragraph.innerHTML = opar.replace(re, `<mark>$&</mark>`);
//         else paragraph.innerHTML = opar;
//    }
//    highlight()
// }


// const newIMG = [
//     './public/img/webp/Maquina1N.webp',
//     './public/img/1x1/maN.png',
//     './public/img/1x1/bannerf.png',
//     './public/img/1x1/inyec.png',
//     './public/img/1x1/tfN.png',
//     './public/img/1x1/discosherniadosN.png',
//     './public/img/1x1/enfermedaddegenerativa.png',
//     './public/img/1x1/ciatica.png',
//     './public/img/1x1/cervicalgia.png',
//     './public/img/1x1/c3N.png',
//     './public/img/1x1/radi.png'
// ];

// const images = document.querySelectorAll('figure');

// const desktopMediaQuery = window.matchMedia('(width >= 800px)');

// function defineWidthIMG(a) {
//     if(desktopMediaQuery.matches) {
//         for(let i=0;i<a.length;i++) {
//             const imgCount = images[0].firstElementChild;
//             imgCount.src = newIMG[0];
//         } 
//     }
// };
// defineWidthIMG(images);
// const show = document.querySelector('body');

let date = document.querySelector('.date');

date.append(year);