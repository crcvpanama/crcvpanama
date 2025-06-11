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


// document.addEventListener('DOMContentLoaded',(event)=>{
init();
// });

const url = `https://wvlhqwzk-5000.use2.devtunnels.ms/analytics`;
const dominio = window.location.origin;
let d = localStorage.getItem("acceptedCookies");
// console.log(d);
function count(a) {
    // console.log('Hi')
    if(a) {
        let analyticsData = {
            id: 3,
            count: 1,
            domain: dominio,
        };

        window.addEventListener("load", function() {
          navigator.sendBeacon(url, JSON.stringify(analyticsData));
        });

    }
}
count(d);

function init(){
    bloqueRGPD = document.querySelector('.cookieBox');
    if (localStorage.acceptedCookies != 'true') {
        bloqueRGPD.style.display = 'inline-block';    
    }

    console.log(detectCookie("rgpdOK"));
    if(detectCookie("rgpdOK")){
        eliminarBloqueRGPD();
    } else {
        document.querySelector(".botonRGPD").addEventListener("click", () => {
            eliminarBloqueRGPD();

            navigator.sendBeacon(url, JSON.stringify({
                id: 3,
                count: 1,
                domain: dominio,
            }))

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
        
(() => {

    function loadIMGs() {
        logo.style.background = `url('public/img/svg/crcvlogo.svg') center no-repeat`;
        logo.style.backgroundSize = 'contain';
        mainIMG.src = images[0].src;
        mainIMG.style.opacity = '1';
        // loaderIMG.style.opacity = '0';
    };

    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        };
    };

    function IMGs() {
        if (document.readyState === "interactive") {
            // console.log(document.readyState);
            preload(
                `public/img/DRX9000.avif`,
                `public/img/svg/crcvlogo.svg`,
                `public/img/svg/circle.svg`
            );

            loaderIMG.src = 'public/img/svg/circle.svg';
            loaderIMG.setAttribute('alt', 'load img');
            loaderIMG.style.objectFit = 'contain';
            mainContent.appendChild(loaderIMG);
        };
    };
    IMGs();

    window.addEventListener("load", (event) => {
     // document.addEventListener("readystatechange", async (event) => {
        // console.log(event.target.readyState);
        // if(event.target.readyState === "complete") {  
                 
            loaderIMG.remove();


            loadIMGs();  
        // }
    });

})();

// Add an event listener for the 'DOMContentLoaded' event
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('The DOM is fully loaded and parsed.');
// });