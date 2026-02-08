const button = document.querySelector('.nav-button');
const menu = document.querySelector('.collapse');

button.addEventListener('click', () => {
    menu.classList.toggle('navbar-collapse');
});

const blog = document.getElementById('blog');
const cblog = blog.querySelector('.item:first-child');
const cblogB = blog.querySelector('.item:nth-child(2)');
const newDiv = document.createElement('div');
const card = document.querySelector('.body-card');

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

const message = document.getElementById("message");
const form = document.getElementById("form");
const url = "https://visits-woad.vercel.app/crcv/login";

async function login() {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    message.style.color = "#009900";
    message.innerText = "Iniciando sesion...";
    const formData = new FormData(form);

    let result = await fetch(url, {
      method: "POST",      
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Methods": "GET,HEAD,POST,OPTIONS",
      },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        message.style.color = "#990000";
        message.innerText = error;
      });

    if (!result.error) {
      setCookie("token", result, 30);
      console.log(result);
      window.location.reload();
     // window.location.replace("https://www.crcvpanama.org/pages/admin.html")
    } else {
      message.style.color = "#990000";
      message.innerText = result.error;
    }
  });
}

login();


function content(visitas, dominio, fecha,clicks) {
  newDiv.innerHTML += `
    <article>
      <h2>Dominio: ${dominio}</h2>
      <p>Total de Visitas: <span>${visitas}</span></p>
      <p>Fecha: <span>${fecha}</span></p>
      <p>Clicks: <span>${clicks}</span></p>
    </article>
  `;

  blog.insertBefore(newDiv, cblog);
}

function contentB(visitas, dominio, fecha) {
  newDiv.innerHTML += `
    <article>
      <h2>Pathname: ${dominio}</h2>
      <p>Visitas: <span>${visitas}</span></p>
      <p>Fecha: <span>${fecha}</span></p>
    </article>
  `;

  blog.insertBefore(newDiv, cblogB);
}

async function fetchContent() {
  let token = getCookie("token");

  let result = await fetch(`https://visits-woad.vercel.app/crcv/login`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Methods": "GET,HEAD,POST,OPTIONS",
    },
  })
  .then(response => response.json())
  .catch((error) => {
        console.error("Error:", error.message);
        blog.style.color = "#990000";
        blog.innerText = error.message;
      });

  // console.log(result.message);

  if(result.message === 'Invalid token') return card.removeAttribute("id");

  if(!result.error) {
    // console.log(result.rows[0]);
  // result.rows[0].forEach(res => { 
    let sumVisitas = result.rows[0][0] + result.rows[0][4];
    // console.log(sumVisitas);
    content(sumVisitas,result.rows[0][1],result.rows[0][2],result.rows[0][3]);
    contentB(result.rows[0][4],result.rows[0][6],result.rows[0][5]);
        
      // return await ;
    // })
  }
}

function showViews() {
  // body...
  if(getCookie("token")) {

    card.setAttribute("id", "hidden");
    
    fetchContent();

  } else {
    message.innerText = "Inicia sesion";
  }
}

showViews();
