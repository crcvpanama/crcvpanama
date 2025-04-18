function showTest(a) {
    // a.style.display = 'block';
    a.classList.add('show');
};


// const buttonParr = document.querySelectorAll(".button__parr");
// const parr = document.querySelectorAll(".diag__parr");

let whatsAppWidget = document.querySelector(".whatsapp--widget");
let whatsAppNumbers = document.querySelector(".whatsapp--numbers");

// function nums(a,b) {
//     for(let i= 0;i<buttonParr.length;i++){
//         a[i].addEventListener('click', () => {
//             b[i].classList.toggle('diag__parrB');
//         });
//     }
// };

// nums(buttonParr,parr);

whatsAppWidget.addEventListener('click', () => {
    whatsAppNumbers.classList.toggle('hide__parr');
});

const socialNav = document.querySelectorAll('.social--line');

// const h = document.getElementsByTagName('h1');
// let header = document.querySelector(".home-slider-content");
// let ff = header.querySelector('.item:first-child');
// let newIMG = document.createElement('img');


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

// showTest(imagesTest);
setTimeout(() => {
    showTest(whatsAppWidget);
    // socialWeb(socialFooter);
    socialWeb(socialNav[0]);
    socialWeb(socialNav[1]);
}, 3000);
