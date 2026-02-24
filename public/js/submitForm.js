const response = document.querySelectorAll("input");
const userMessage = document.querySelector(".message");
const form1 = document.getElementById('form');
const urlSubmitForm = `https://visits-christian-guardias-projects.vercel.app/crcv/submit`;
// console.log(response);

function submitUserForm() {

    form1.addEventListener('submit', async function(event) {
        event.preventDefault(); 
             
        const formData = new FormData(form1);

        // if (formData.get('email').length == 0 || formData.get('control').length == 0) {
        //     document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">Field is required.</span>';
        //     return false;
        // } 

          await fetch(urlSubmitForm, {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),  
                control: formData.get('control'),
            }),
          })
          .then((response) => response.text())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error:', error));
       

        let message = "Gracias por su comentario...";

        let msg = alert(message);
        
        window.location.href = "https://www.crcvpanama.org/";
    });
    // console.log(event);
    // event.preventDefault;
       // var response = grecaptcha.getResponse();

    // response.forEach(res => {

        // console.log(res);
        // res.addEventListener("change", () =>{
            // console.log(response[0].value == " ");
            // if (response[0].value == "" || response[1].value == "" || response[2].value == "" ) {
            //     userMessage.innerText = 'This field is required.';
            //     return false;
            // };

             
        // })
    // })
            // let msg = alert("Gracias por su comentario...");

    // if (msg) return window.location.reload();

    

};

submitUserForm();