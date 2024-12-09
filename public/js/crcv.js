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

// const socialFooter = document.querySelector('.social');

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


const year = new Date().getFullYear();
const initYear = year - 2005;
const yyyy = document.querySelector('.yyyy');

yyyy.append(initYear); 


const navLinks = document.querySelectorAll('.nav-link');
const navLinksFooter = document.querySelectorAll('.nav-link--footer');
const home = document.querySelector('.home-start');
// const listPages = document.getElementsByClassName('page');
// console.log(listPages);
const pages = document.querySelector('.pageA');
const pagesChild = pages.querySelector('.item:nth-child(0)');
// const frames = [
//     `<iframe src='./services.html' frameborder="0"></iframe>`,
//     `<iframe src='./diagnosticos.html' frameborder="0"></iframe>`,
//     `<iframe src='./contacto.html' frameborder="0"></iframe>`,
//     `<iframe src='./testimonios.html' frameborder="0"></iframe>`,
//     `<iframe src='./fqs.html' frameborder="0"></iframe>`
// ];

const lists = [
    {
        listA: `Estimulación eléctrica (corriente eléctrica que hace que ciertos músculos se contraigan).`,
        listB: `Ultrasonido (el uso de ondas de sonido para generar calor y promover la curación).`,
        listC: `Terapia de calor o frío.`
    },
    {
        listA: `Alivia muchos problemas de espalda. Dolor de espalda, dolor de cuello, discos herniados, enfermedades degenerativa de disco, síndrome facetario, ciática, entre otros. También ayuda a promover el movimiento de agua, oxígeno y líquidos ricos en nutrientes entre los discos que ayudan a iniciar el proceso de curación.`,
        listB: `Tratamiento no invasivo. Proporciona alivio sin necesidad de tratamientos con medicamentos ni cirugías invasivas. Los analgésicos, indicados para tratar este tipo de lesiones, sólo enmascaran el dolor, mientras que la descompresión espinal no quirúrgica se ocupa de la causa, raíz del dolor.`,
        listC: `Procedimiento rápido y cómodo. Tratamiento indoloro que se realiza en poco tiempo. La sesión tiene una duración de entre 30 minutos a una hora.`
    },
    {
        listA: `Osteoporosis`,
        listB: `Cirugía de espalda previa`,
        listC: `Si tiene varillas o piezas metálicas en la columna vertebral o cuello`,
        listD: `Embarazo`,
        listE: `Fusión espinal`,
        listF: `Disco artificial o implantes`,
        listG: `Osteoporosis`,
        listH: `Cirugía de espalda previa`,
        listI: `Si tiene varillas o piezas metálicas en la columna vertebral o cuello`,
        listJ: `Vértebras rotas`,
        listK: `Estenosis espinal`,
        listL: `Infección de la columna vertebral`,
        listM: `Tumor de la columna vertebral`,
        listN: `Tomando anticoagulantes`,
        listO: `Espondilitis anquilosante.`
    },

    {
        listA: `Potente germicida (combates parásitos, hongos, bacterias, virus)`,
        listB: `Analgésico`,
        listC: `Antiinflamatorio`,
        listD: `Mejora la circulación sanguínea`,
        listE: `Mejora la oxigenación de los tejidos`,
        listF: `Estimula el sistema inmunológico (promueve la capacidad del cuerpo de enfrentar y vencer enfermedades).`,

    },
];

const listB = [
    {
        a: `<p><strong>Discos herniados: </strong> 
                    lesión localizada en medio de las vértebras que consta de una deformidad del disco, provocada por debilidad de los anillos que mantienen la integridad del disco en su interior (núcleo pulposo). Los discos herniados se pueden encontrar en todas las regiones móviles de la columna ejemplo: cervical (C1 hasta C7) más comunes, dorsal (T1 hasta T12) menos comunes y lumbar (L1 hasta L5/S1) más comunes.</p>`,
        b: `<p><strong>Enfermedad degenerativa de disco: </strong>
                    (desgaste/deshidratación de disco) lesión que se caracteriza a través del tiempo por incapacidad del disco de amortiguar correctamente las vértebras observado a nivel de radiografías como acercamiento de las vértebras y a nivel de la resonancia magnética con un aumento en la tonalidad del disco (más oscuro).</p>`,
        c: `<p><strong>Síndromes de ciática: </strong>
                    descripción de una serie de síntomas principalmente asociados a una irritación/dolor de las raíces nerviosas provenientes de la columna lumbar y parte del sacro en un 90 a 95% de los casos. Existe un porcentaje residual asociado a síndrome piriforme que causa el mismo cuadro.</p>`,
        d: `<p><strong>Cervicalgia: </strong> 
                    dolor principalmente en el cuello y hacia hombros y brazos. Tiene como origen lesiones a nivel cervical asociado a discos herniados, desgastados, síndromes facetarios, síndromes miofasciales, y hasta escoliosis.</p>`,
        e: `<p><strong>Escoliosis leve a moderadas: </strong> 
                    son desviaciones congénitas (desde que nacemos) de la columna que dependiendo del grado de desviación, ubicación y características de la misma pueden provocar dolor similar a una lesión asociada con el disco en general. En términos generales es una lesión que le crea una desventaja al paciente con respecto a los demás por el hecho del balance de las cargas corporales del tronco.</p>`, 
        f: `<p><strong>Radiculopatías de miembros superiores e inferiores: </strong>
                    (adormecimiento/hormigueos de brazos y piernas)- descritas de esta manera son manifestaciones del nervio irritado usualmente desde su origen que se describen como: adormecimiento, hormigueos, quemazón, frio, calambres, perdida de la fuerza, y dolor. En muchas ocasiones son provocadas por lesiones a nivel del disco/columna.</p>`,
    },
    {
        a: `<p><strong>Artritis: </strong>Es la hinchazón y la sensibilidad de una o más de las articulaciones. Los principales síntomas de la artritis son dolor y rigidez de las articulaciones, que suelen empeorar con la edad. Los tipos más frecuentes de artritis son la artrosis y la artritis reumatoide.</p>`,
        b: `<p><strong>Artrosis: </strong>Es la causa más común de dolor de rodilla en personas mayores.</p>`,
        c: `<p><strong>La artritis reumatoide: </strong>es una enfermedad en la cual el sistema inmunitario ataca las articulaciones, comenzando con el revestimiento de estas.</p>`,
        d: `<p><strong>Lesiones deportivas: </strong>Los deportistas son propensos a sufrir lesiones de rodilla y hombros que pueden causar dolor e inflamación.</p>`,
        e: `<p><strong>Tendinitis: </strong>es una inflamación de los tejidos conectivos fibrosos gruesos que unen los músculos a los huesos, esta inflamación de los tendones en articulaciones puede generar dolor.</p>`
    }
];

const listFQs = [
{
    a: `<details name="faq">
                        <summary>¿Qué es el DRX9000?</summary>
                        <p>Drx9000 es un equipo que realiza descompresión espinal no quirúrgica y está indicado para realizar separación intermitente de las vértebras con lo cual permite rehidratar o retraer el disco consiguiendo así liberar la raíz nerviosa provocante del cuadro doloroso.</p>
                        </details>`,
    b: `<details name="faq">
                        <summary>¿Necesitamos tener diagnóstico para atenderse?</summary>
                        <p>No es necesario ya que durante la evaluación se le dan una explicación detallada del problema y se culmina con un diagnóstico y el tratamiento recomendado.</p>
                        </details>`,
    c: `<details name="faq">
                        <summary>¿Necesito una radiografía o resonancia magnética para atenderme?</summary>
                        <p>Por lo general no es necesario, pero nos ahorra tiempo. Se le indica al paciente en tal caso de no tener que se le mandara una orden el día de la evaluación. Además, se le indica de tener estudios de imágenes viejas (3-5 años) traerlos ya que sirven de comparativas</p>
                        </details>`,
    d: `<details name="faq">
                        <summary>¿Me puedo hacer terapias directamente si ya tengo diagnostico?</summary>
                        <p>En el 90% de los casos es necesario realizar una evaluación de cada paciente que entra en un programa de terapias ya que existen diferentes situaciones/factores que pueden cambiar la manera en que se maneja cada paciente.</p>
                        </details>`,
    e: `<details name="faq">
                        <summary>¿Cuántas sesiones necesito?</summary>
                        <p>Todo depende del diagnóstico que presente la persona luego de tener una evaluación en el centro.</p>
                        </details>`,
    f: `<details name="faq">
                        <summary>¿Cuánto es el costo por sesión?</summary>
                        <p>No manejamos tratamientos por sesiones. Y no damos costos de tratamientos hasta que el paciente se atienda (primera evaluación).</p>
                        </details>`,
    g: `<details name="faq">
                        <summary>¿Que debo esperar después de cada sesión?</summary>
                        <p>Luego de realizarse descompresión espinal el paciente puede sentir una sensación de ¨espalda flotante¨ al principio y durante el día de las sesiones. Al día siguiente una sensación de haber realizado ejercicio (fatiga muscular leve a moderada).</p>
                        </details>`,
    h: `<details name="faq">
                        <summary>¿Necesito algún acompañante durante las terapias?</summary>
                        <p>No es necesario llevar a un acompañante al menos que el paciente presente dificultades a la marcha como por ejemplo inestabilidad y mareos provocados por lesiones en la columna vertebral (usualmente lesiones cervicales).</p>
                        </details>`,
    i: `<details name="faq">
                        <summary>¿Cuántos años tienen en el mercado?</summary>
                        <p>Nuestra fecha de apertura fue en 2005 (${initYear} años) a su servicio.</p>
                        </details>`,
    j: `<details name="faq">
                        <summary>¿Quién atiende en el centro?</summary>
                        <p>Contamos con un equipo de médico, fisioterapia y asistentes para brindarles el mejor servicio.</p>
                        </details>`,
    k: `<details name="faq">
                        <summary>¿Trabajamos con seguros?</summary>
                        <p>No trabajamos con seguros. Solo llenamos las hojas de reclamos una vez el paciente pago su evaluación o tratamiento completo.</p>
                        </details>`,
    l: `<details name="faq">
                        <summary>¿Trabajamos los sábados?</summary>
                        <p>En Panamá, estamos abiertos de 9:00a.m. a 12:00m.d.
                        En Santiago, de lunes a viernes de 8 am a 5 pm.</p>
                        </details>`,
    m: `<details name="faq">
                        <summary>¿Atienden escoliosis?</summary>
                        <p>Si atendemos escoliosis, de leve a moderadas ya sea dorsal o lumbar que son las más comunes.</p>
                        </details>`,
    n: `<details name="faq" >
                        <summary>¿Atienden desgaste de columna?</summary>
                        <p id="details-FQ">Lo que definimos como desgaste de columna es una deshidratación del disco en diferentes áreas de la columna ya sea cervical o lumbar, 
                            <strong><u>si lo atendemos.</u></strong></p>
                        </details>`,
    o: `<details name="faq">
                        <summary>¿Se puede pagar con tarjetas de crédito o débito?</summary>
                        <p>Los métodos de pagos son pago en efectivo, transferencias a la cuenta, punto de venta con tarjeta de crédito o débito.</p>
                        </details>`,
    p: `<details name="faq">
                        <summary>¿Necesito llevar alguna vestimenta especial para atenderme?</summary>
                        <p>Se recomienda llevar ropa cómoda con facilidad para acceder a las áreas afectadas a tratar.</p>
                        </details>`,
    q: `<details name="faq">
                        <summary>¿Puedo seguir trabajando mientras me hago terapias?</summary>
                        <p>El tratamiento se puede realizar mientras trabaja sin embargo es recomendable disminuir la intensidad de las actividades en forma general en la vida cotidiana con el fin de permitir que el nervio lastimado se puede recuperar poco a poco.</p>
                        </details>`,
    r: `<details name="faq">
                        <summary>¿Qué es el ozono?</summary>
                        <p>El ozono es un gas químicamente es oxigeno (O2) elevado a O3.</p>
                        </details>`,
    s: `<details name="faq">
                        <summary>¿Puedo usar el ozono como método de rehabilitación?</summary>
                        <p>En nuestro centro el ozono se aplica con la intensión de ser un complemento para desinflamar el área afectada por el disco herniado desgastado, síndrome facetario entre otras patologías que actualmente se están incluyendo en nuestro arsenal de diagnósticos tratados.</p>
                        </details>`,
    t: `<details name="faq">
                        <summary>¿Dónde están ubicados?</summary>
                        <p>Panamá: Betania, Camino real de Betania, edificio paseo real de Betania local #3 piso #1</p>
                        <p>Veraguas: Santiago, calle 8va plaza Jean Carlos, diagonal al gimnasio de la escuela normal, local #3.</p>
                        </details>`,
    w: `<details name="faq">
                        <summary>¿En qué sucursal nos podemos atender?</summary>
                        <p>Es recomendable atenderse en la sucursal más cercana a su hogar. Por el momento contamos con una sucursal en Betania, Panamá, y Santiago de Veraguas.</p>
                        </details>`,
    x: `<details name="faq">
                        <summary>¿Que horario tienen?</summary>
                        <p>Nuestros horarios en Panamá son de lunes a viernes de 9:00 hasta 18:00 y sábados 9:00 hasta 12:00.</p>
                        <p>En Santiago son de lunes a viernes de 8:00 hasta las 17:00; todavía cerrados los sábados.</p>
                        </details>`,
    y: `<details name="faq">
                        <summary>¿Atienden por citas o por orden de llegada?</summary>
                        <p>Trabajamos por citas programadas ya sea por evaluación o por tratamiento/terapias.</p>
                        </details>`,
    }
];
// console.log(Object.values(lists[0]));

function innerLists(a) {
    let ll = Object.values(a);
    return ll.map(li => `<li>${li}</li>`).join(" ");
};

const listPages = [`
            <section class="service servicehidden page">
            <h2>Servicios</h2>
            <div id="services">
                <div class="img-container">
                    <div class="images">
                        <div class="slide-img">
                        <h3>Descompresión espinal</h3>
                            <figure class="img--container">
                                
                                <img src="./public/img/webp/drx9000N.webp" alt="drx9000">
                                <figcaption class="img--caption">
                                
                                    <p>Esta metodología se basa en la separación de las vértebras de forma dinámica y escalonada para permitir la rehidratación de la estructura discal afectada, ya sea si está deshidratada (desgaste de disco) o deformada (hernias de disco-abombamiento, protrusión, extrusión).</p>
                                    <p>Los efectos de la descompresión espinal pueden ser visibles después de un par de sesiones, sin embargo, es importante recordar que cada paciente reacciona de manera diferente al dolor y los tratamientos; asi como también se debe tomar en cuenta asistir a los tratamientos y seguir las recomendaciones para obtener óptimos resultados.</p>
                                    
                                    <p>La duración de este tratamiento, normalmente es de entre 20 y 28 sesiones, durante un período de 5 a 7 semanas. Es un tratamiento un poco largo, pero tiende a ser exitoso. La paciencia y la consistencia son la clave.</p>
                                </figcaption>
                            </figure>
                            <details>                           
                                <summary class="summary"> Leer más... </summary>
                                <p>El tratamiento va acompañado de terapias físicas (antes o después de la descompresión). Éstas terapias incluyen:</p>
                                <ul>${innerLists(lists[0])}</ul>
                                
                                <h4>Beneficios de la descompresión espinal:</h4>
                                
                                <ul>${innerLists(lists[1])}</ul>
                                <p>Algunas contraindicaciones a saber:
                                    Si sufre de alguna de estas enfermedades, lesiones o condiciones listadas abajo, es posible que no sea elegible o tendrá que ser evaluado en mayor profundidad para asegurarse de si puede proceder o no:</p>

                                <ul>${innerLists(lists[2])}</ul>
                            </details>
                        </div>

                        <div class="slide-img">
                            <h3>Ozonoterapia</h3>
                            <figure class="img--container">
                                
                                <img src="./public/img/webp/Ozonoterapia1x1.avif" id="img--ozono" alt="Ozonoterapia">
                                <figcaption class="img--caption">
                                    
                                
                                    <p>Es una técnica de apoyo que utiliza como base el gas O3 energizado desde O2(oxígeno) por medio de una reacción de un equipo convertidor. Este gas es aplicado en las regiones musculares/cadenas miofasciales afectadas que tiene facultades principalmente desinflamatorias (importante para las dolencias que atendemos) y desinfectantes.</p>
                                    <p>Algunas de estas dolencias son:  dolor crónico por hernia o protrusión discal, dolor en las articulaciones o patologías degenerativas.</p>

                                    <p>También puede utilizarse cuando se deba mejorar el aporte de oxígeno a los tejidos y mejorar el sistema inmunológico. Existen más enfermedades en las cuales, según las características del paciente, el médico puede indicarle este tratamiento. </p>
                                </figcaption>
                            </figure>
                            <details>
                                <summary class="summary"> Leer más... </summary> 
                                <p>Su actuación contra el dolor es principalmente como antiinflamatorio, y por lo tanto reduce el dolor.</p>
                                <p>En algunos casos se aplica como terapia única, mientras que en otros actúa como apoyo a otro tratamiento.</p>
                                <br>
                                <p><strong>Propiedades del Ozono</strong></p>
                                <ul>${innerLists(lists[3])}</ul>
                            </details>   
                        </div>
                        <div class="slide-img">
                            <h3>Terapias físicas</h3>
                            <figure class="img--container">            
                                <img src="./public/img/webp/tfN.webp" alt="Terapias">
                                <figcaption class="img--caption">
                                    <p>TENS, US, láser, frío/calor-. Estas técnicas tienen la capacidad en conjunto con la descompresión espinal no quirúrgica de disminuir/distraer las estructuras irritadas que usualmente involucran el nervio, el músculo y la articulación (disco/faceta).</p>
                                    <p>TENS, siglas en inglés de la técnica de estimulación eléctrica transcutánea. Su aplicación puede proporcionar una rápida mejoría especialmente para todas las afecciones de dolor relacionadas con la tensión, favorece la circulación sanguínea y, por tanto, el suministro de oxígeno y nutrientes a la zona de tratamiento. De este modo, puede producirse una rápida reducción del dolor.</p>
                                    <p>En caso de dolor, los impulsos electrónicos de un dispositivo TENS bloquean la transmisión de los estímulos dolorosos al cerebro a través de los nervios. Al bloquear la transmisión del estímulo doloroso, el alivio del dolor suele ser rápido.</p>
                                </figcaption>
                            </figure>
                            <details>
                                <summary class="summary"> Leer más... </summary>
                                <p>El ultrasonido ayuda a reducir los espasmos musculares, calambres, hinchazón y dolor que provocan la ciática, además de reducir el periodo de recuperación penetrando en las capas más profundas del cuerpo. También es aplicable para el dolor y tensión que afecta a la zona lumbar, sacra y cervical, lo que da lugar a la presencia de lumbalgias y cervicalgias.</p>
                                <p>Las terapias de frío y calor son tratamientos que usan calor o frío para aliviar el dolor, las molestias, los espasmos musculares, la hinchazón y la inflamación.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
            </section>`,`
            <section class="diag dhidden page">
            <h2> Diagnósticos Tratados </h2>
            <article class="list--diagnostic" id="diagnostic">
                <h4>Con descompresión espinal</h4>
                
                
                <ul>${innerLists(listB[0])}</ul>
                
            </article>
            <article class="list--diagnostic">
                <h4>Con ozonoterapia</h4>

                <ul>${innerLists(listB[1])}</ul>

            </article>
            </section>`,
            `<section class="contacto chidden page">
            <h2>Nuestras Sucursales</h2>
            <div class="container--maps" id="contact">
                <div class="map">           
                    <div class="cont--A">               
                        <div class="local-in">
                            <h4> Panamá </h4>
                            <div class="geo">
                                
                                <a href="https://goo.gl/maps/y83Ex3bjF4jwfjVL8?coh=178571&entry=tt" target="_blank"><h5><i class="bi bi-geo-alt" id="map"></i> Ubicación</h5>
                                <span>Edificio paseo real, Local #3 piso #1;
                                    Camino Real de Bethania, Panama en en frente del area de carga del super 99.</span></a>
                                <article class="numbers">
                                    <h5>Contacto</h5>
                                <a href="tel:+5073945248"><i class="bi bi-telephone"></i> Teléfono: (507) 394-5248 </a>
                                <a target="_blank" href="https://wa.me/50765991052"><i class="bi bi-whatsapp"></i> Whatsapp: (507) 6599-1052 </a>
                                </article>
                            </div>
                            <div class="foot-journal">
                                <article>
                                    <h5>Horario</h5>
                                    <p>Lunes a viernes:</p>
                                    <p>9:00 am - 6:00 pm</p>
                                    <p>Sábados: <br> 9:00 am - 12:00 md</p>
                                </article>
                            </div>
                        </div>
                        <div class="contact--iframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.2885790146047!2d-79.525056!3d9.010998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca84e4601bff1%3A0x6e2fdce720e71653!2sCentro%20de%20Rehabilitaci%C3%B3n%20de%20la%20Columna%20Vertebral%20Panama!5e0!3m2!1ses!2sus!4v1685159067677!5m2!1ses!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Dirección de Betania"></iframe>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <div class="cont--B" id="revers">       
                        <article class="local-in">
                            <h4> Santiago </h4>
                            <div class="geo">
                                <a href="https://goo.gl/maps/2k6uwa9wbtZqY1MC8?coh=178571&entry=tt" target="_blank"><h5><i class="bi bi-geo-alt" id="map2"></i> Ubicación</h5>
                                Santiago de veraguas, calle 8va, diagonal al gimnasio de la escuela normal.</a>
                                <h5>Contacto</h5>
                                <div class="numbers">
                                <a href="tel:+5079985076"><i class="bi bi-telephone"></i> Teléfono: (507) 998-5076</a>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=50768506124&text&type=phone_number&app_absent=0"><i class="bi bi-whatsapp"></i> Whatsapp: (507) 6850-6124</a>
                                </div>
                            </div>
                            <div class="foot-journal">
                                <article>
                                <h5>Horario</h5>
                                <p>Lunes a viernes:</p>
                                <p>8:00 am - 5:00 pm</p>
                                </article>
                            </div>
                        </article>
                        <div class="contact--iframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.983433628046!2d-80.9775389!3d8.1031684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae739d24655ff5%3A0x275105f287d1df14!2sCentro%20de%20Rehabilitacion%20de%20la%20Columna%20Vertebral%20Veraguas!5e0!3m2!1ses-419!2spa!4v1685312976765!5m2!1ses-419!2spa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Dirección de Santiago"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="bann ms-auto">
                    <div class="p5">        
                        <div>
                            <div class="card">
                                <div class="card-header bg-dark text-white text-center">
                                    <figure><img src="./public/img/logo.png" alt="logo"></figure>
                                    <h3>Contáctenos</h3>
                                </div>
                                <div class="card-body" id="formulario">
                                    <form action="https://formsubmit.co/crcvpanama@outlook.es" method="post" id="form1">
                                        <div class="form-group">
                                            <label for="name">Nombre</label>
                                            <input class="form-control" type="text" name="name"  placeholder="Nombre" autocomplete="on" id="name">
                                        </div>

                                        <div class="form-group">
                                            <label for="mail">Email</label>
                                            <input required class="form-control" type="email" name="email" placeholder="Email" autocomplete="on" id="mail">
                                        </div>

                                        <div class="form-group">
                                            <label for="phone">Teléfono</label>
                                            <input class="form-control" type="tel" name="phone" placeholder="Numero" autocomplete="on" id="phone">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="control">Commentario</label>
                                            <textarea required class="form-control" name="control"  placeholder="Comentarios" cols="30" rows="10" id="control"></textarea>
                                        </div>
                                                    
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">
                                                Enviar
                                            </button>
                                        </div>
                                        <input type="hidden" name="_next" value="https://crcvpanama.org/index.html">
                                        <input type="hidden" name="_captcha" value="false">
                                    </form>
                                </div>
                            </div>          
                        </div>        
                    </div>     
                </div>
            </div>
            <div class="container privacidad">
                <iframe
                    id="frameP"
                    title="Política de privacidad"
                    src="./politicadeprivacidad.html"
                    loading="lazy">  
                </iframe>    
            </div>
            </section>`,
            `<section class="test test-hidden page">
                <h2> Testimonios </h2>
                <div class="container--test">
                <div>
                    <div class="letter--container">
                        <article class="letter--content">
                        <h3>TESTIMONIO</h3>
                        <span>Lunes 31 de Agosto de 2015</span>
                        <p>Yo Diana de T., doy testimonio de los efectos positivos de la terapia con el equipo DRX 9000 ya que después de haber pasado por muchos exámenes y tratamientos para mi problema de la columna y el nervio ciático casi por cuatro años, nada me había funcionado. Los dolores cada día eran más intensos, en la parte baja de la espalda irradiándose hacia toda el área derecha, desde el cuello hasta la planta del pie, agudizándose en la noche impidiéndome dormir. Pensé que ya no había nada que mejorara mi salud.</p>
                        <p>Gracias a Dios llegué al Centro de Rehabilitación de la Columna a través de una amiga, me sometí al tratamiento y seguí todas las indicaciones dadas por el Dr. Madrid y las fisioterapistas; hoy puedo decir que me ha funcionado la terapia, el dolor de espalda ha desaparecido al igual que el intenso dolor que iba desde el cuello hasta el brazo; poco a poco ha ido disminuyendo el dolor en la pierna por la inflamación del nervio ciático.</p>
                        <p>Yo se que esto no termina aquí. Estoy decidida a seguir porque este tratamiento me ha ayudado a tener una mejor calidad de vida, después de tantos años de sufrimiento.</p>
                        <p>El haber conocido del Centro de Rehabilitación de la Columna ha sido lo mejor que me ha podido pasar durante estos últimos años es por ello que, recomiendo a todas aquellas personas que sufren de problemas de la columna que tomen las terapias con mucha fe en Dios que todo lo puede ya que los resultados son excelentes.</p>
                        <span>Atentamente, Diana de T.</span>
                        </article>
                    </div>


                    <div class="letter--container">
                        <article class="letter--content">
                        <h3>TESTIMONIO</h3>
                        <span>Panamá, 9 de noviembre de 2015.</span>
                        <p>En el año 2008 debido a que levante en peso a mi hijo de 8 años hacia la parte superior de un camarote, sufri sin darme cuenta una lesión en la espalda que se fue agravando debido a mi afición por el fútbol. En un principio sentía un ardor en las piernas, pero por mi desconocimiento del problema percibía que al calentar antes de jugar este desaparecía e insistí en jugar hasta que un día no pude mas.</p>
                        <p>Para ese entonces la lesión se había agravado, tenía fuertes dolores de espalda, caminaba encorcovado y sentía ardor en la pantorrilla de la pierna izquierda.</p>
                        <p>Buscando ayuda visite a un quinesiólogo y acudí a la clínica del dolor, sin lograr una mejoría.</p>
                        <p>Después fui donde un neurocirujano el cual me prescribió una resonancia magnética, donde se determino que tenía varios discos abombados, seguidamente me aplico una ozonoterapia (inyección de ozono) y receto toda clase de medicamentos para atenuar el dolor (Arcoxia, lirica y saldear), durante este tratamiento sufrí una recaída mayor, hasta el punto que gateaba en vez de caminar. Obviamente no continúe con este tratamiento.</p>
                        <p>Por recomendaciones, visite un medico chino que me realizo una terapia para la parte ósea y acupuntura, lo que en alguna medida mejoro mi condición fisica mas los dolores persistian.</p>
                        <p>Por último y gracias a Dios, me fue recomendada la clínica que en ese entonces se Ilamaba Spinal Decompression of Panamá, Inc., ubicada en la Torre del Global Bank en calle 50, donde me atendió el DR. Ángel Madrid, él que luego de revisar la resonancia y hacerme unas pruebas determino que era acto para recibir el tratamiento DRX 9000, para descomprimir las vértebras.</p>
                        <p>Me realice la terapia de 20 secciones, las que resultaron ser la solución a mis problemas de espalda, a tal punto que desde aquel año hasta la fecha, me mantuve realizando de manera normal mi vida, practicando mi deporte de fútbol, jugando a mi edad de 52 años en toda clase de ligas y canchas, hasta el día de hoy que he tenido una recaída y sin pensarlo dos veces estoy en la disposición de realizarme nuevamente la terapia.</p>
                        <p>Debido a los resultados obtenidos, puedo con toda propiedad dar testimonio de la efectividad del tratamiento DRX 9000 y mi recomendación para todo aquel que padezca de dolores de espalda baja, se realice este tratamiento.</p>
                        <span>Atentamente, Ricardo C.</span>
                        </article>
                    </div>

                    <div class="letter--container"> 
                        <article class="letter--content last--letter">
                        <h3>TESTIMONIO</h3>
                        <span>HOLA</span>
                        <p>Mi nombre es Melania de M., quiero manifestarles brevemente la experiencia que he tenido con el <strong>Centro de Rehabilitación de la Columna Vertebral</strong> (especialistas en descompresion espinal). Después de haber consultado un neurólogo su diagnóstico fue que tenia tres discos herniados e inflamados, por lo tanto dicha condición me reflejaba mucho dolor en el area lumbar y la pierna izquierda, las recomendaciones del médico fueron tres opciones, terapias, infiltración para el dolor y la última era operación, esta última me rehusaba a realizar. Realice las dos anteriores sin resultado satisfactorio. Un día revisando mis correos electrónicos recibí un anuncio del <strong>centro de rehabilitación de la columna vertebral</strong>, proseguí a investigar mas de lo que se trataba, me interesé y comencé a hacerme dichas terapias que consistían en 20 sesiones. Quiero manifestarles que a partir de la primera semana ya estaba sintiendo mejoría, ya que este problema de salud no me dejaba conciliar el sueño por el inmenso dolor que me producía.</p>
                        <p>Hoy puedo manifestar que aunque sé que el problema persiste, los dolores que no me dejaban dormir han sido aliviados.</p>
                        <p>Quiero por este medio agradecerles al <strong>centro de rehabilitación de la columna vertebral</strong>, y a todo su personal el trato cordial que tuvieron con mi persona.</p>
                        <p>Mil gracias.</p>
                        <span>MELANIA de M.</span>
                        <span>COLON, REP DE PANAMÁ</span>
                        </article>
                    </div>
                </div>

                <div class="content--videos" id="testimonios">
                    <div>
                        <video controls playsinline oncontextmenu="return false" preload="none" poster="./public/img/svg/crcvlogo.svg">
                            <source src="./public/videos/testimonio.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div>
                        <video controls playsinline oncontextmenu="return false" preload="none" poster="./public/img/svg/crcvlogo.svg">
                            <source src="./public/videos/testimoniob.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                </div>
            </section>`,
            `<section class="FQs fhidden page">
            <h2> Preguntas Frecuentes </h2>
            <div id="frequences">
                <ul id="paragraph">
                    ${innerLists(listFQs[0])}
                </ul>
            </div>
            </section>`
];
 // style="width:100%; height: 100lvh; scrollbar-width: none;"
 // style="width:100%; height: 100lvh; scrollbar-width: none;"
 // style="width:100%; height: 100lvh; scrollbar-width: none;"
// console.log(frames);

const newDiv = document.createElement('div');
function nDIv(a,b) {
    for(let j=0;j<navLinks.length;j++) {
        if(a===home) {

            home.classList.add('home-start');
            newDiv.innerHTML= "";
            navLinks[j].classList.remove('active', 'backgtrans');
            navLinks[b].classList.add('active', 'backgtrans');
         } else {
            newDiv.innerHTML = listPages[a];
            // newDiv.innerHTML = frames[a];

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
                    nDIv(home,0);
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
            }
        })
    }
};

// const bbb = document.querySelector('.img-container-a');
// const ccc = document.querySelector('.diagnostic-a');
// const loading = document.querySelector('.loading');


// function showScroll() {
//     bbb.removeAttribute('class');
//     ccc.removeAttribute('class');
    // loading.style.display = 'none';
// };

setTimeout(function() {
    nav(navLinks);
    nav(navLinksFooter);
    // showScroll();
}, 2000);


let date = document.querySelector('.date');

date.append(year);