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


const blog = document.getElementById('blog');
const cblog = blog.querySelector('.item:first-child');
const newDiv = document.createElement('div');

function showViews() {
  // body...
  if(getCookie("token")) {
    
    fetchContent();
  } else {
    console.log('login');
    message.innerText = "Inicia sesion";
  }
}

function content(visitas, dominio, fecha) {
  newDiv.innerHTML += `
    <article>
      <h2>${dominio}</h2>
      <p>${visitas}</p>
      <p>${fecha}</p>
    </article>
  `;

  blog.insertBefore(newDiv, cblog);
}

async function fetchContent() {

  let result = await fetch(`https://cz5wbbl2-3000.use2.devtunnels.ms/crcv/login`)
  .then(response => response.json())
  .catch((error) => {
        console.error("Error:", error.message);
        blog.style.color = "#990000";
        blog.innerText = error.message;
      });

  // console.log(!result.error);

  if(!result.error) {
    result.forEach(res => {     
      return content(res.visitas,res.dominio,res.fecha);
    }) 

  }
}

showViews();

console.log(getCookie("token"));