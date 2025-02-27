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

init();

function init(){
    bloqueRGPD = document.querySelector('.cookieBox');
    if (localStorage.acceptedCookies != 'true') {
    bloqueRGPD.style.display = 'inline-block';    
    }

    if(detectCookie("rgpdOK")){
        if (getCookie("rgpdOK")==1){eliminarBloqueRGPD()};
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

const button = document.querySelector('.nav-button');
const menu = document.querySelector('.collapse');

button.addEventListener('click', () => {
    menu.classList.toggle('navbar-collapse');
});


const mainIMG = document.getElementById('drx');
const mainContent = document.getElementById('home0');

const loaderIMG = document.createElement('img');

const logo = document.querySelector('.logo');

const images = [];

function loadIMGs() {
    logo.style.background = `url('public/img/svg/crcvlogo.svg') center no-repeat`;
    logo.style.backgroundSize = 'contain';
    mainIMG.src = images[0].src;
    mainIMG.style.opacity = '1';
    loaderIMG.style.opacity = '0';
};

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    };
};


loaderIMG.src = 'public/img/svg/circle.svg';
loaderIMG.setAttribute('alt', 'load img');
loaderIMG.style.objectFit = 'contain';
mainContent.appendChild(loaderIMG);
console.log(document.readyState);   


// document.onreadystatechange = (event) => {

    // if (document.readyState === "interactive") {
preload(
    `public/img/webp/maquinaDRX9000.webp`,
    'public/img/svg/crcvlogo.svg',
    `public/img/svg/circle.svg`
);
    // };

// };


// console.log(document.readyState);


// setTimeout(() => {
    
// },7000);
document.onreadystatechange = (event) => {

    if (document.readyState === "complete") {
        
        console.log(document.readyState);
          // `DOMContentLoaded` has already fired
        loadIMGs();
          // document.addEventListener("DOMContentLoaded",loadIMGs);
        loaderIMG.remove();
    }
};