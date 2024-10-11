const year = new Date().getFullYear();
const initYear = year - 2005;

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

// $(document).ready(function() {
    init();
// });

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
const navLinks = document.querySelectorAll('.nav-link');
const home = document.querySelector('.home-start');
const pages = document.querySelector('.page');
const pageB = document.querySelector('.pageB');
const pagesChild = pages.querySelector('.item:nth-child(2)');
const pagesChildB = pages.querySelector('.item:nth-child(3)');
const pagesChildC = pages.querySelector('.item:nth-child(4)');
const newDiv = document.createElement('div');
const newSection = document.createElement('div');
const imagesTest = document.getElementsByClassName('.images--test');

let videosIds = [
    'tKOmWImuTZM?si=NNxJmmPOWI5nlo2W',
    'JJ2HkyXqt18?si=JA3wV68aoyLllVXo',
    'gDn9I61-nqo?si=RVMWX8d3zRF5wMBb',
    'buC2wfa_W-c?si=8mp-Y0Fhy2pkWuNI',
    '7tp0ccfv9b8?si=mDb2Si5SFxGb8fts',
    '6zhDTb__-WI?si=2wLU3CaZBihHtkIM',
    'YVKcvIpvGi8?si=D16cWbXj00z2SAEm',
    'koNZTNhaz8A?si=ymr494YnDOkj3ytn'
];

let imgTest = [
    'testimonioA.jpg',
    'testimonioB.jpg',
    'testimonioC.jpg'
    ];

const YouTubeIDs = () => {
    for (let i=0;i<videosIds.length;i++) {

        playVideos = [
            `<div class="container content--iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videosIds[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`
            ];
        newSection.style.display = 'flex';
        newSection.style.flexDirection = 'row';
        newSection.style.flexWrap = 'wrap';
        newSection.style.justifyContent = 'space-around';
        newSection.innerHTML += playVideos;
        pages.insertBefore(newSection, pagesChildB);
    };
};


const imgesTC = document.querySelector('.imgs--testA');

function showTest() {
    imagesTest.style.display = 'block';
}

// imagesTest.addEventListener('click', () => {
//     imagesTest.classList.toggle('show--test');
// });

const listPages = [`
            <section class="service servicehidden page">
            <h2>Servicios</h2>
            <div id="services">
                <div class="img-container">
                    <div class="images">
                        <div class="slide-img">
                            <figure class="img--container">
                                <h3>Descompresión espinal</h3>
                                <img src="./public/img/drx9000.jpg" alt="drx9000">
                                <figcaption class="img--caption">
                                
                                    <p>Esta metodología se basa en la separación de las vértebras de forma dinámica y escalonada para permitir la rehidratación de la estructura discal afectada, ya sea si está deshidratada (desgaste de disco) o deformada (hernias de disco-abombamiento, protrusión, extrusión).</p>
                                    <p>Los efectos de la descompresión espinal pueden ser visibles después de un par de sesiones, sin embargo, es importante recordar que cada paciente reacciona de manera diferente al dolor y los tratamientos; asi como también se debe tomar en cuenta asistir a los tratamientos y seguir las recomendaciones para obtener óptimos resultados.</p>
                                    
                                    <p>La duración de este tratamiento, normalmente es de entre 20 y 28 sesiones, durante un período de 5 a 7 semanas. Es un tratamiento un poco largo, pero tiende a ser exitoso. La paciencia y la consistencia son la clave.</p>
                                </figcaption>
                            </figure>
                            <details>                           
                                <summary class="summary"> Leer más... </summary>
                                <p>El tratamiento va acompañado de terapias físicas (antes o después de la descompresión). Éstas terapias incluyen:</p>
                                
                                <ul>
                                    <li>Estimulación eléctrica (corriente eléctrica que hace que ciertos músculos se contraigan).</li>
                                    <li>Ultrasonido (el uso de ondas de sonido para generar calor y promover la curación).</li>
                                    <li>Terapia de calor o frío.</li>
                                </ul>
                                
                                <h3>Beneficios de la descompresión espinal:</h3>
                                <ul>
                                    <li>Alivia muchos problemas de espalda. Dolor de espalda, dolor de cuello, discos herniados, enfermedades degenerativa de disco, síndrome facetario, ciática, entre otros. También ayuda a promover el movimiento de agua, oxígeno y líquidos ricos en nutrientes entre los discos que ayudan a iniciar el proceso de curación.</li>
                                    <li>Tratamiento no invasivo. Proporciona alivio sin necesidad de tratamientos con medicamentos ni cirugías invasivas. Los analgésicos, indicados para tratar este tipo de lesiones, sólo enmascaran el dolor, mientras que la descompresión espinal no quirúrgica se ocupa de la causa, raíz del dolor.</li>
                                    <li>Procedimiento rápido y cómodo. Tratamiento indoloro que se realiza en poco tiempo. La sesión tiene una duración de entre 30 minutos a una hora.</li>
                                </ul>
                                <p>Algunas contraindicaciones a saber:
                                    Si sufre de alguna de estas enfermedades, lesiones o condiciones listadas abajo, es posible que no sea elegible o tendrá que ser evaluado en mayor profundidad para asegurarse de si puede proceder o no:</p>
                                <ul>
                                    <li>Osteoporosis</li>
                                    <li>Cirugía de espalda previa</li>
                                    <li>Si tiene varillas o piezas metálicas en la columna vertebral o cuello</li>
                                    <li>Embarazo</li>
                                    <li>Fusión espinal</li>
                                    <li>Disco artificial o implantes</li>
                                    <li>Vértebras rotas</li>
                                    <li>Estenosis espinal</li>
                                    <li>Infección de la columna vertebral</li>
                                    <li>Tumor de la columna vertebral</li>
                                    <li>Tomando anticoagulantes</li>
                                    <li>Espondilitis anquilosante.</li>
                                </ul>
                            </details>
                        </div>

                        <div class="slide-img">
                            <figure class="img--container">
                                <h3>Ozonoterapia</h3>
                                <img src="./public/img/Ozonoterapia1x1.jpg" id="img--ozono" alt="Ozonoterapia">
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
                                <ul>
                                    <li>Potente germicida (combates parásitos, hongos, bacterias, virus)</li>
                                    <li>Antiinflamatorio</li>
                                    <li>Analgésico</li>
                                    <li>Mejora la circulación sanguínea</li>
                                    <li>Mejora la oxigenación de los tejidos</li>
                                    <li>Estimula el sistema inmunológico (promueve la capacidad del cuerpo de enfrentar y vencer enfermedades).</li>
                                </ul>
                            </details>   
                        </div>

                        <div class="slide-img">
                            <figure class="img--container">
                                <h3>Terapias físicas</h3>
                                <img src="./public/img/tf.jpg" alt="Terapias">
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
                
                <ul>
                    <li><p><strong>Discos herniados: </strong> 
                    lesión localizada en medio de las vértebras que consta de una deformidad del disco, provocada por debilidad de los anillos que mantienen la integridad del disco en su interior (núcleo pulposo). Los discos herniados se pueden encontrar en todas las regiones móviles de la columna ejemplo: cervical (C1 hasta C7) más comunes, dorsal (T1 hasta T12) menos comunes y lumbar (L1 hasta L5/S1) más comunes.</p>
                    </li>

                    <li><p><strong>Enfermedad degenerativa de disco: </strong>
                    (desgaste/deshidratación de disco) lesión que se caracteriza a través del tiempo por incapacidad del disco de amortiguar correctamente las vértebras observado a nivel de radiografías como acercamiento de las vértebras y a nivel de la resonancia magnética con un aumento en la tonalidad del disco (más oscuro).</p>
                    </li>

                    <li><p><strong>Síndromes de ciática: </strong>
                    descripción de una serie de síntomas principalmente asociados a una irritación/dolor de las raíces nerviosas provenientes de la columna lumbar y parte del sacro en un 90 a 95% de los casos. Existe un porcentaje residual asociado a síndrome piriforme que causa el mismo cuadro.</p>
                    </li>

                    <li><p><strong>Cervicalgia: </strong> 
                    dolor principalmente en el cuello y hacia hombros y brazos. Tiene como origen lesiones a nivel cervical asociado a discos herniados, desgastados, síndromes facetarios, síndromes miofasciales, y hasta escoliosis.</p>
                    </li>

                    <li><p><strong>Escoliosis leve a moderadas: </strong> 
                    son desviaciones congénitas (desde que nacemos) de la columna que dependiendo del grado de desviación, ubicación y características de la misma pueden provocar dolor similar a una lesión asociada con el disco en general. En términos generales es una lesión que le crea una desventaja al paciente con respecto a los demás por el hecho del balance de las cargas corporales del tronco.</p>
                    </li>

                    <li><p><strong>Radiculopatías de miembros superiores e inferiores: </strong>
                    (adormecimiento/hormigueos de brazos y piernas)- descritas de esta manera son manifestaciones del nervio irritado usualmente desde su origen que se describen como: adormecimiento, hormigueos, quemazón, frio, calambres, perdida de la fuerza, y dolor. En muchas ocasiones son provocadas por lesiones a nivel del disco/columna.</p>
                    </li>
                </ul>
            </article>
            <article class="list--diagnostic">
                <h4>Con ozonoterapia</h4>
                <ul>
                    <li>
                        <p><strong>Artritis: </strong>Es la hinchazón y la sensibilidad de una o más de las articulaciones. Los principales síntomas de la artritis son dolor y rigidez de las articulaciones, que suelen empeorar con la edad. Los tipos más frecuentes de artritis son la artrosis y la artritis reumatoide.</p>
                    </li>
                    <li>
                        <p><strong>Artrosis: </strong>Es la causa más común de dolor de rodilla en personas mayores.</p>
                    </li>
                    <li>
                        <p><strong>La artritis reumatoide: </strong>es una enfermedad en la cual el sistema inmunitario ataca las articulaciones, comenzando con el revestimiento de estas.</p>
                    </li>
                    <li>
                        <p><strong>Lesiones deportivas: </strong>Los deportistas son propensos a sufrir lesiones de rodilla y hombros que pueden causar dolor e inflamación.</p>
                    </li>
                    <li>
                        <p><strong>Tendinitis: </strong>es una inflamación de los tejidos conectivos fibrosos gruesos que unen los músculos a los huesos, esta inflamación de los tendones en articulaciones puede generar dolor.</p>
                    </li>
                </ul>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.2885790146047!2d-79.525056!3d9.010998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca84e4601bff1%3A0x6e2fdce720e71653!2sCentro%20de%20Rehabilitaci%C3%B3n%20de%20la%20Columna%20Vertebral%20Panama!5e0!3m2!1ses!2sus!4v1685159067677!5m2!1ses!2sus" width="100%" height="290" style="border: 0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.983433628046!2d-80.9775389!3d8.1031684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae739d24655ff5%3A0x275105f287d1df14!2sCentro%20de%20Rehabilitacion%20de%20la%20Columna%20Vertebral%20Veraguas!5e0!3m2!1ses-419!2spa!4v1685312976765!5m2!1ses-419!2spa" width="100%" height="290" style="border: 0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="bann ms-auto">
                    <div class="p5">        
                        <div  class="col-md-4 offset-md-4">
                            <div class="card">
                                <div class="card-header bg-dark text-white text-center">
                                    <figure><img src="./public/img/logo.png" width="30" height="30" alt="logo"></figure>
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
                                            <input required class="form-control" type="email" name="email"  placeholder="Email" autocomplete="on" id="mail">
                                        </div>

                                        <div class="form-group">
                                            <label for="phone">Teléfono</label>
                                            <input class="form-control" type="tel" name="phone"  placeholder="Numero" autocomplete="on" id="phone">
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
                                        <input type="hidden" name="_next" value="https://www.crcvpanama.org/index.html">
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
                    width="350"
                    height="150"
                    src="https://www.crcvpanama.org/politicadeprivacidad.html" style="border: 1px solid white; scrollbar-width: thin;">  
                </iframe>    
            </div>
            </section>`,
            `<section class="test test-hidden page">
                <h2> Testimonios </h2>
                <div class="content--videos" id="testimonios">
                    <div>
                        <video controls width="560" height="315" playsinline oncontextmenu="return false">
                            <source src="./public/videos/testimonio.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div>
                        <video controls width="560" height="315" playsinline oncontextmenu="return false">
                            <source src="./public/videos/testimoniob.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>

                <div class='content--imgtest'>   
                    <div class="imgs--testA">
                        <figure class="images--test">
                            <img src="./public/img/testimonioA.jpg" id="one"><figcaption></figcaption>
                        </figure>
                        <figure class="images--test">
                            <img src="./public/img/testimonioB.jpg" id="two"><figcaption></figcaption>
                        </figure>
                        <figure class="images--test">
                            <img src="./public/img/testimonioC.jpg" id="three"><figcaption></figcaption>
                        </figure>
                    </div>
                </div>
            </section>`,
            `<section class="FQs fhidden page">
            <h2> Preguntas Frecuentes </h2>
            <div id="frequences">
                <ul id="paragraph">
                    <li>
                        <details name="faq">
                        <summary>¿Qué es el DRX9000?</summary>
                        <p>Drx9000 es un equipo que realiza descompresión espinal no quirúrgica y está indicado para realizar separación intermitente de las vértebras con lo cual permite rehidratar o retraer el disco consiguiendo así liberar la raíz nerviosa provocante del cuadro doloroso.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Necesitamos tener diagnóstico para atenderse?</summary>
                        <p>No es necesario ya que durante la evaluación se le dan una explicación detallada del problema y se culmina con un diagnóstico y el tratamiento recomendado.</p>
                        </details>
                    </li>
                    
                    <li>
                        <details name="faq">
                        <summary>¿Necesito una radiografía o resonancia magnética para atenderme?</summary>
                        <p>Por lo general no es necesario, pero nos ahorra tiempo. Se le indica al paciente en tal caso de no tener que se le mandara una orden el día de la evaluación. Además, se le indica de tener estudios de imágenes viejas (3-5 años) traerlos ya que sirven de comparativas</p>
                        </details>
                    </li>    

                    <li>
                        <details name="faq">
                        <summary>¿Me puedo hacer terapias directamente si ya tengo diagnostico?</summary>
                        <p>En el 90% de los casos es necesario realizar una evaluación de cada paciente que entra en un programa de terapias ya que existen diferentes situaciones/factores que pueden cambiar la manera en que se maneja cada paciente.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Cuántas sesiones necesito?</summary>
                        <p>Todo depende del diagnóstico que presente la persona luego de tener una evaluación en el centro.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Cuánto es el costo por sesión?</summary>
                        <p>No manejamos tratamientos por sesiones. Y no damos costos de tratamientos hasta que el paciente se atienda (primera evaluación).</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Que debo esperar después de cada sesión?</summary>
                        <p>Luego de realizarse descompresión espinal el paciente puede sentir una sensación de ¨espalda flotante¨ al principio y durante el día de las sesiones. Al día siguiente una sensación de haber realizado ejercicio (fatiga muscular leve a moderada).</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Necesito algún acompañante durante las terapias?</summary>
                        <p>No es necesario llevar a un acompañante al menos que el paciente presente dificultades a la marcha como por ejemplo inestabilidad y mareos provocados por lesiones en la columna vertebral (usualmente lesiones cervicales).</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Cuántos años tienen en el mercado?</summary>
                        <p>Nuestra fecha de apertura fue en 2005 (${initYear} años) a su servicio.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Quién atiende en el centro?</summary>
                        <p>Contamos con un equipo de médico, fisioterapia y asistentes para brindarles el mejor servicio.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Trabajamos con seguros?</summary>
                        <p>No trabajamos con seguros. Solo llenamos las hojas de reclamos una vez el paciente pago su evaluación o tratamiento completo.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Trabajamos los sábados?</summary>
                        <p>En Panamá, estamos abiertos de 9:00a.m. a 12:00m.d.
                        En Santiago, de lunes a viernes de 8 am a 5 pm.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Atienden escoliosis?</summary>
                        <p>Si atendemos escoliosis, de leve a moderadas ya sea dorsal o lumbar que son las más comunes.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq" >
                        <summary>¿Atienden desgaste de columna?</summary>
                        <p id="details-FQ">Lo que definimos como desgaste de columna es una deshidratación del disco en diferentes áreas de la columna ya sea cervical o lumbar, 
                            <strong><u>si lo atendemos.</u></strong></p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Se puede pagar con tarjetas de crédito o débito?</summary>
                        <p>Los métodos de pagos son pago en efectivo, transferencias a la cuenta, punto de venta con tarjeta de crédito o débito.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Necesito llevar alguna vestimenta especial para atenderme?</summary>
                        <p>Se recomienda llevar ropa cómoda con facilidad para acceder a las áreas afectadas a tratar.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Puedo seguir trabajando mientras me hago terapias?</summary>
                        <p>El tratamiento se puede realizar mientras trabaja sin embargo es recomendable disminuir la intensidad de las actividades en forma general en la vida cotidiana con el fin de permitir que el nervio lastimado se puede recuperar poco a poco.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Qué es el ozono?</summary>
                        <p>El ozono es un gas químicamente es oxigeno (O2) elevado a O3.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Puedo usar el ozono como método de rehabilitación?</summary>
                        <p>En nuestro centro el ozono se aplica con la intensión de ser un complemento para desinflamar el área afectada por el disco herniado desgastado, síndrome facetario entre otras patologías que actualmente se están incluyendo en nuestro arsenal de diagnósticos tratados.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Dónde están ubicados?</summary>
                        <p>Panamá: Betania, Camino real de Betania, edificio paseo real de Betania local #3 piso #1</p>
                        <p>Veraguas: Santiago, calle 8va plaza Jean Carlos, diagonal al gimnasio de la escuela normal, local #3.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿En qué sucursal nos podemos atender?</summary>
                        <p>Es recomendable atenderse en la sucursal más cercana a su hogar. Por el momento contamos con una sucursal en Betania, Panamá, y Santiago de Veraguas.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Que horario tienen?</summary>
                        <p>Nuestros horarios en Panamá son de lunes a viernes de 9:00 hasta 18:00 y sábados 9:00 hasta 12:00.</p>
                        <p>En Santiago son de lunes a viernes de 8:00 hasta las 17:00; todavía cerrados los sábados.</p>
                        </details>
                    </li>

                    <li>
                        <details name="faq">
                        <summary>¿Atienden por citas o por orden de llegada?</summary>
                        <p>Trabajamos por citas programadas ya sea por evaluación o por tratamiento/terapias.</p>
                        </details>
                    </li>
                </ul>
            </div>
            </section>`
        ];

// <button class="btn--testA" onclick="showTest">
//                         <span>T</span>
//                         <span>e</span>
//                         <span>s</span>
//                         <span>t</span>
//                         <span>i</span>
//                         <span>m</span>
//                         <span>o</span>
//                         <span>n</span>
//                         <span>i</span>
//                         <span>o</span>
//                         <span>s</span>
//                     </button>
// const btnTestA = document.querySelector('.btn--testA');


// btnTestA.addEventListener('click', () => {
//     imagesTest.style.width = '100%';
// });


function nDIv(a,b) {
    for(let j=0;j<navLinks.length;j++) {
        if(a===undefined) {
            home.style.display = 'block';
            newDiv.innerHTML= "";
                navLinks[j].style.background = 'none';
                navLinks[b].style.background = '#0052D468';
         } else {
            newDiv.innerHTML = listPages[a];
            pages.insertBefore(newDiv, pagesChild);
            home.style.display = 'none';
                navLinks[j].style.background = 'none';
                navLinks[b].style.background = '#0052D468';
        }
    }
};

function nav() {
    for(let i=0;i<navLinks.length;i++){
        navLinks[i].addEventListener('click', () => {
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
                    // YouTubeIDs();
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

nav();

const buttonParr = document.querySelectorAll(".button__parr");
const parr = document.querySelectorAll(".diag__parr");

let whatsAppWiget = document.querySelector(".whatsapp--wiget");
let whatsAppNumbers = document.querySelector(".whatsapp--numbers");

function nums(a,b) {
    for(let i= 0;i<buttonParr.length;i++){
        a[i].addEventListener('click', () => {
            b[i].classList.toggle('diag__parrB');
        });
    }
};

nums(buttonParr,parr);

whatsAppWiget.addEventListener('click', () => {
    whatsAppNumbers.classList.toggle('hide__parr');
});

// const summary = document.querySelectorAll('.summary');

// function hideSummary(a) {
//     for(let i=0;i<summary.length;i++){
//         summary[a].addEventListener('click', () => {
//             summary[a].style.display = 'none';
//         });
//     }
// };

// for(let i=0;i<summary.length;i++) {
//     hideSummary(i);
// }

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

date.append(year);