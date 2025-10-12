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
    // let decodedCookie = decodeURIComponent(document.cookie);

    setCookie(cname,"",-1);
    // decodedCookie.split(";").forEach((cookie) => {
    //     console.log(cookie);
    // const nombre = cookie.split("=")[0].trim();
    // console.log(nombre);
    // setCookie(nombre," ", -1);
    // });
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
document.addEventListener('DOMContentLoaded', function () {
  init();
});

const url = `https://visits-christian-guardias-projects.vercel.app/count`;    
const dominio = window.location.origin;
let d = detectCookie("rgpdOK");

function count() {

    let analyticsData = {
        id: 3,
        count: 1,
        domain: dominio,
    };

    navigator.sendBeacon(url, JSON.stringify(analyticsData));   

};

if(d) count();
// window.addEventListener("load", function() {
//     count();
//  });


document.querySelector(".cancelBotonRGPD").addEventListener("click", () => {
    
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    
//     window.addEventListener('beforeunload', (event) => {
//         event.preventDefault();
//         event.returnValue = ''; 
        localStorage.acceptedCookies = 'false';
//     })
//     window.addEventListener('unload', function (event) {
    
//     });
});

function init(){
    bloqueRGPD = document.querySelector('.cookieBox');
    if (localStorage.acceptedCookies != 'true') {
        bloqueRGPD.style.display = 'inline-block';    
    }

    if(detectCookie("rgpdOK")){
        eliminarBloqueRGPD();
    } else {
        document.querySelector(".botonRGPD").addEventListener("click", () => {
            eliminarBloqueRGPD();

            setCookie("rgpdOK",1,365);

            count();
        });
    };
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
// console.log(images);
(() => {

    function preload() {
        for (let i = 0; i < arguments.length; i++) {
            // console.log(arguments)
            images[i] = new Image();
            // console.log(images[i])
            images[i].src = preload.arguments[i];
            // console.log(images[i])
        };
    };

    function IMGs() {
        // console.log(document.readyState);
        document.addEventListener("DOMContentLoaded", (event) => {
            // console.log(event.target.readyState);
            if (event.target.readyState === "interactive") {
                // console.log(document.readyState);
                preload(
                    'public/img/drxnuevemil.avif',
                    'public/img/svg/crcvlogo.svg',
                    'public/img/svg/circle.svg'
                );

                // loaderIMG.src = 'public/img/svg/circle.svg';
                // loaderIMG.setAttribute('alt', 'load img');
                // loaderIMG.setAttribute('id', 'load-img');
                // loaderIMG.style.objectFit = 'contain';
                // mainContent.appendChild(loaderIMG);
            };
        });
    };
    IMGs();

     function loadIMGs() {
        // logo.style.background = `url('public/img/svg/crcvlogo.svg') center no-repeat`;
        // logo.style.backgroundSize = 'contain';
        // logo.style.background = `url(${images[1].attributes[0].nodeValue}) center center / contain no-repeat`;
        mainIMG.src = images[0].src;
        // mainIMG.style.opacity = '1';
        mainIMG.style.display = 'block';
        // loaderIMG.style.opacity = '0';
    };


    
   
    document.addEventListener("readystatechange", (event) => {
     // document.addEventListener("readystatechange", async (event) => {
        // console.log(event.target.readyState === "complete");
        if(event.target.readyState === "complete") {  
            // console.log(document.readyState);
                 
            
            loadIMGs(); 

            // loaderIMG.remove(); 
        }
    });

})();
// console.log(document.readyState);
// Add an event listener for the 'DOMContentLoaded' event
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('The DOM is fully loaded and parsed.');
// });
