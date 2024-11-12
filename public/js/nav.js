const navLinks = document.querySelectorAll('.nav-link');
const navLinksFooter = document.querySelectorAll('.nav-link--footer');
const home = document.querySelector('.home-start');
// const listPages = document.getElementsByClassName('page');
// console.log(listPages);
const pages = document.querySelector('.pageA');
const pagesChild = pages.querySelector('.item:nth-child(0)');
const frames = [
    `<iframe src='./services.html' frameborder="0"></iframe>`,
    `<iframe src='./diagnosticos.html' frameborder="0"></iframe>`,
    `<iframe src='./contacto.html' frameborder="0"></iframe>`,
    `<iframe src='./testimonios.html' frameborder="0"></iframe>`,
    `<iframe src='./fqs.html' frameborder="0"></iframe>`
];
 // style="width:100%; height: 100lvh; scrollbar-width: none;"
 // style="width:100%; height: 100lvh; scrollbar-width: none;"
 // style="width:100%; height: 100lvh; scrollbar-width: none;"
// console.log(frames);
const newDiv = document.createElement('div');
function nDIv(a,b) {
    for(let j=0;j<navLinks.length;j++) {
        if(a===undefined) {

            home.classList.add('home-start');
            newDiv.innerHTML= "";
                navLinks[j].classList.remove('active', 'backgtrans');
                navLinks[b].classList.add('active', 'backgtrans');
         } else {
            // newDiv.innerHTML = listPages[a];
            newDiv.innerHTML = frames[a];

            pages.insertBefore(newDiv, pagesChild);
            home.classList.remove('home-start');
                navLinks[j].classList.remove('active','backgtrans');
                navLinks[b].classList.add('active','backgtrans');
        }
    }
};

function nav(a) {
    for(let i=0;i<a.length;i++){
        a[i].addEventListener('click', () => {
            switch (i) {
                case 0:
                    nDIv(undefined,0);
                break;
                case 1:
                    nDIv(0,1);
                break;
                case 2:
                    nDIv(1,2);
                  break;
                case 3:
                    nDIv(2,3);
                  break;
                case 4:
                    nDIv(3,4);
                  break;
                case 5:
                    nDIv(4,5);
                  break;
                default:
                    nDIv(undefined,0);
            }
        })
    }
};

nav(navLinks);

nav(navLinksFooter);