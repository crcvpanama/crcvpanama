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




// console.log(document.readyState);   


// document.onreadystatechange = (event) => {

    // if (document.readyState === "interactive") {

    // };

// };


// console.log(document.readyState);


// setTimeout(() => {
    
// },7000);
// document.onreadystatechange = async (event) => {
    // if (document.readyState === "interactive") {

    
    // }

// }
// console.log(document.readyState);


    // console.log(document.readyState);

    // console.log(document.readyState);
        
(() => {

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

    if (document.readyState === "interactive") {
        // console.log(document.readyState);
        preload(
            `public/img/webp/maquinaDRX9000.webp`,
            'public/img/svg/crcvlogo.svg',
            `public/img/svg/circle.svg`
        );

        loaderIMG.src = 'public/img/svg/circle.svg';
        loaderIMG.setAttribute('alt', 'load img');
        loaderIMG.style.objectFit = 'contain';
        mainContent.appendChild(loaderIMG);
    };

    document.addEventListener("readystatechange", (event) => {
        // console.log(document.readyState);

    

        // console.log(document.readyState);

            
// document.onreadystatechange = (event) => {

         // console.log(event.target.readyState);
    // window.addEventListener('load',(event) async => {

    // if (document.readyState === "loading") {
        // console.log(document.readyState);
        // await function loadIMGs() {
        //     logo.style.background = `url('public/img/svg/crcvlogo.svg') center no-repeat`;
        //     logo.style.backgroundSize = 'contain';
        //     mainIMG.src = images[0].src;
        //     mainIMG.style.opacity = '1';
        //     loaderIMG.style.opacity = '0';
        // };

        // await function preload() {
        //     for (var i = 0; i < arguments.length; i++) {
        //         images[i] = new Image();
        //         images[i].src = preload.arguments[i];
        //     };
        // };


        // loaderIMG.src = 'public/img/svg/circle.svg';
        // loaderIMG.setAttribute('alt', 'load img');
        // loaderIMG.style.objectFit = 'contain';
        // mainContent.appendChild(loaderIMG);


        // await preload(
        // `public/img/webp/maquinaDRX9000.webp`,
        // 'public/img/svg/crcvlogo.svg',
        // `public/img/svg/circle.svg`
        // );


    // } else 

        

    // if (event.target.readyState === "interactive") {
        
          // `DOMContentLoaded` has already fired
       
        // console.log(document.readyState);
          // document.addEventListener("DOMContentLoaded",loadIMGs);
        
        // } else 
        // if (event.target.readyState === "interactive") {
        //     console.log(event.target.readyState);
        //        
        // } else 
        if(event.target.readyState === "complete") {  
                 
            // console.log(event.target.readyState);
            loaderIMG.remove();

            loadIMGs();  
        }
    });

})();
