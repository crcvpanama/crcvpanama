// const year = new Date().getFullYear();
// const initYear = year - 2005;
// const yyyy = document.querySelector('.yyyy');

// yyyy.append(initYear); 
// Seleccionamos los elementos
let contenido = document.getElementsByName("faq");
let input = document.getElementById('buscador');
let resultado = document.getElementById('resultado');

// Escuchamos el evento 'input' para capturar cada cambio
// console.log(contenido)
// const rr=contenido.textContent.toUpperCase();
var accent_map = {'á':'a', 'é':'e', 'è':'e', 'í':'i','ó':'o','ú':'u','Á':'a', 'É':'e', 'è':'e', 'Í':'i','Ó':'o','Ú':'u'};
function accent_fold (s) {
  if (!s) { return ''; }
  var ret = '';
  for (var i = 0; i < s.length; i++) {
    ret += accent_map[s.charAt(i)] || s.charAt(i);
  }
  return ret;
};



function searchW() {

  contenido.forEach((text,index) => {
    const t = text.outerText.toLowerCase();
    // console.log(text.outerText);

    input.addEventListener('input', (e) => {

      // let tt = e.target.value.toUpperCase();
      // console.log(t);
      let ii = accent_fold(e.target.value);
      let tt = accent_fold(t);

      // console.log(tt);

      if (t.indexOf(ii.toLowerCase()) > -1) {
        text.style.display = "";
            resultado.innerHTML = `<section>
                                      <h5>${text.outerText}</h5> 

                                      <p>${text.children[1].innerHTML}</p>
                                  </section>`;
      } else {
        text.style.display = "none";
      }
      
        // if(tt.includes(ii)) {
        //     resultado.innerHTML = `<section>
        //                               <h5>${text.outerText}</h5> 

        //                               <p>${text.children[1].innerHTML}</p>
        //                           </section>`;
        // }
    // }
    });
  });
}

searchW();
// [0].parentElement.childNodes[1].childNodes[3].innerHTML
// [0].children[1].innerHTML
