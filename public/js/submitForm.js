const response = document.querySelectorAll("input");
const userMessage = document.querySelector(".message");
// console.log(response);

function submitUserForm(event) {
    // console.log(event);
    // event.preventDefault;
    let message = "Gracias por su comentario...";
    // var response = grecaptcha.getResponse();

    // response.forEach(res => {

        // console.log(res);
        // res.addEventListener("change", () =>{
            // console.log(response[0].value == " ");
            if (response[0].value == "" || response[1].value == "" || response[2].value == "" ) {
                userMessage.innerText = 'This field is required.';
                return false;
            };

             
        // })
    // })
            let msg = alert("Gracias por su comentario...");

    if (msg) return window.location.reload();

    

};

// submitUserForm();