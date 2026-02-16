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
const main = document.querySelector("body");

// window.addEventListener('load',(event)=>{


init();

// function getCurrentUTCDatetimeShort() {
//   return new Date()
//     .toISOString()         
//     .slice(0, 19)           
//     .replace('T', ' ')      
//     .replace('/-/g', '/');
// }


// const dd = getCurrentUTCDatetimeShort();
const ahora = new Date();
// let dd = new Date().toLocaleDateString("es-PA", {
//   weekday: "long",
//   day: "numeric",
//   month: "short",
//   hour: "numeric",
//   minute: "numeric",
//   hour12: true
// });
const formatoConZona = new Intl.DateTimeFormat('es-PA', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: zonaHoraria
}).format(ahora);
// ccInit();

    // });

// const url = `https://wvlhqwzk-5000.use2.devtunnels.ms/analytics`;
const url = `https://visits-christian-guardias-projects.vercel.app/count`;    
const dominio = window.location.pathname;

let dom = dominio.split('/');
// let d = detectCookie("rgpdOK");
// console.log(dom);
function cli() {
    main.addEventListener('click', function (event) {
        if(event.target.tagName === "A" || event.target.tagName === "P" || event.target.tagName === "BUTTON") {
            // return cb(1);

            let analyticsData = {
                id: 4,
                count: 0,
                domain: dominio,
                date: `desde: 06/2025 | última vista: ${formatoConZona}`,
                clicks: 1,
            };
            navigator.sendBeacon(url, JSON.stringify(analyticsData));
        }
    })
}

cli();

function count() {
    let analyticsData = {
        id: 6,
        count: 1,
        domain: dom[2],
        date: formatoConZona,
        clicks: 0,
    };

    navigator.sendBeacon(url, JSON.stringify(analyticsData));   
};

// if (d) 

// window.addEventListener("load", function() {
//     count();
//  });

async function init(){
    bloqueRGPD = document.querySelector('.cookieBox');
    if (localStorage.acceptedCookies != 'true') {
        bloqueRGPD.style.display = 'inline-block';
    }

    if(detectCookie("rgpdOK")){
        eliminarBloqueRGPD();
    } else {
        document.querySelector(".botonRGPD").addEventListener("click", () => {
            eliminarBloqueRGPD();
            navigator.sendBeacon(url, JSON.stringify({
                id: 6,
                count: 1,
                domain: dom[2],
                date: dd,
            }));
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

const socialNav = document.querySelectorAll('.social--line');


const socialSVG = [ 
    `<div>
        <a href="https://www.facebook.com/crcvpanama" target="_blank" aria-label="FACEBOOK"><span class="facebook"></span></a>
    </div>`,
    `<div>
        <a target="_blank" href="https://wa.me/50765991052?text=Hola%20estoy%20interesado%20y%20deseo%20más%20información."><span class="whatsapp"></span></a>
    </div>`,
    `<div>
        <a target="_blank" href="https://www.youtube.com/channel/UCjhJ2PgAVZLeuqYWTsE5-Qg"><span class="youtube"></span></a>
    </div>`,
    `<div>
        <a target="_blank" href="https://www.instagram.com/crcvpanama/?r=nametag"><span class="instagram"></span></a>
    </div>`
];

function socialWeb(a) {
    socialSVG.map((elemment) => {
    // let elemment; 
        a.innerHTML += elemment;
    });
};

setTimeout(() => {
    // showTest(whatsAppWidget);
    // socialWeb(socialFooter);
    socialWeb(socialNav[0]);
    socialWeb(socialNav[1]);
}, 3000);


const year = ahora.getFullYear();
// const initYear = year - 2005;
// const yyyy = document.querySelector('.yyyy');

// yyyy.append(initYear); 


let date = document.querySelector('.date');

date.append(year);

count();
