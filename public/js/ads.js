// const blob = `https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/crcv`;
const formAd = document.getElementById('form-ad');
// const cblog = blog.querySelector('.item:first-child');
// const newDiv = document.createElement('div');
// https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com

// function ad(title, filename, paragraph,link) {
		
// 	newDiv.innerHTML = `
// 		<a href="${link}" title="${title}" target="_blank">
// 			<h6>${title}</h6>
// 			<picture class="ad">
// 				<img src='${blob}/${filename}' alt='#' width='200' height='250'>
// 			</picture>
// 		</a>
// 	`;
// 	mainAd.insertBefore(newDiv, cblog);
// }

function renameFile(originalFile, newName) {
    if (!(originalFile instanceof File)) {
        throw new Error("Provided object is not a File.");
    }

    // Create a new File with the same content and type, but a new name
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified
    });
}

document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    // console.log("Original name:", file.name);

    try {
        const renamedFile = renameFile(file, "photo_ad" + file.name.substring(file.name.lastIndexOf(".")));
        // console.log("Renamed file:", renamedFile.name);

        // You can now upload renamedFile instead of file
    } catch (err) {
        console.error(err.message);
    }
});


const urlAd = `https://visits-christian-guardias-projects.vercel.app/crcv/submitad`;

async function addArticle() {
  // addForm.forEach((btn) => {
  // console.log(btn.value);
  formAd.addEventListener("submit", async function (event) {
    event.preventDefault();
    // formData.append("filename", file)
    let formData = new FormData(formAd);
    
    console.log(formData);
    // console.log(updateBTN);
    // console.log(formData.get("filename-b"));

    let result = await fetch(urlAd, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Methods": "GET,PUT,POST,OPTIONS",
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("Added article successfully!");
          window.location.reload();
        } else {
          alert("Failed to send the form submission.");
        }
      })
      .catch((error) => console.error("Error:", error));
    // });
  });
}

addArticle();