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

$(document).ready(function() {
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

const zero = document.querySelector('.home-slider');
const one = document.querySelector('.home-slider-conten');
const button = document.querySelector('.nav-button');
const menu = document.querySelector('.collapse');

button.addEventListener('click', () => {
    menu.classList.toggle('collapse-hide');
});

function slide() {
    zero.style.display = "flex";
    one.style.backgroundPosition = "right top";
    one.style.transition = 'all .4s ease-in-out';
};

setInterval(slide, 4000);

// let pages = ['a','b','c','d','e','f'];

// console.log(pages[0]);
const navLinks = document.querySelectorAll('.nav-link');
// const main = document.querySelector('main');
// console.log(main);

// const newPage = main.querySelector('.item:nth-child(2)');

const pages = document.querySelectorAll('.page');
// console.log(navLinks);

function nav() {

    let newDiv = document.createElement('div');
    for(let i=0;i<navLinks.length;i++){
        navLinks[i].addEventListener('click', () => {
            for(let index in pages) {

            switch (navLinks[i]) {

                case navLinks[0]:
                    pages[index].style.display = 'none';
                    navLinks[index].style.background = 'none';
                    navLinks[0].style.background = '#0052D468';
                    pages[0].style.display = 'block';
                  break;
                case navLinks[1]:
                    pages[index].style.display = 'none';
                    navLinks[index].style.background = 'none';
                    navLinks[1].style.background = '#0052D468';
                    pages[1].style.display = 'block';

                    break;
                case navLinks[2]:
                    pages[index].style.display = 'none';
                    navLinks[index].style.background = 'none';
                    navLinks[2].style.background = '#0052D468';
                    pages[2].style.display = 'block';
                  break;
                case navLinks[3]:
                    pages[index].style.display = 'none';
                    navLinks[index].style.background = 'none';
                    navLinks[3].style.background = '#0052D468';
                    pages[3].style.display = 'block';
                  break;
                case navLinks[4]:
                    pages[index].style.display = 'none';
                    navLinks[index].style.background = 'none';
                    navLinks[4].style.background = '#0052D468';
                    pages[4].style.display = 'block';
                  break;
                case navLinks[5]:
                    pages[index].style.display = 'none';
                    navLinks[index].style.background = 'none';
                    navLinks[5].style.background = '#0052D468';
                    pages[5].style.display = 'block';
                  break;
                default:
                    navLinks[0];
                }
            }
        })
    }
};

nav();

let buttonParr = document.querySelectorAll(".button__parr");
let parr = document.querySelectorAll(".diag__parr");

let whatsAppWiget = document.querySelector(".whatsapp--wiget");
let whatsAppNumbers = document.querySelector(".whatsapp--numbers");

function nums(a,b) {
    for(let i= 0;i<buttonParr.length;i++){
    
        a[i].addEventListener('click', () => {
            b[i].classList.toggle('hide__parr');

        });
    }
};

nums(buttonParr,parr);

whatsAppWiget.addEventListener('click', () => {
    whatsAppNumbers.classList.toggle('hide__parr');
});

const summary = document.querySelectorAll('.summary');

function hideSummary(a) {
    for(let i=0;i<summary.length;i++){
        summary[a].addEventListener('click', () => {
            summary[a].style.display = 'none';
        });
    }
};

for(let i=0;i<summary.length;i++) {
    hideSummary(i);
}




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

let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());




// <div class="pages">
           

            

            

            

            
//         </div>