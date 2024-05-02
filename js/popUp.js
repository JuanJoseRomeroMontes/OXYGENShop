const newsletterModal = document.getElementById("Newsletter"); 
const confirmation = document.querySelector("modal__content__confirmation");

window.addEventListener("load", () => {
    setTimeout(() => {
        ShowNewsletterModal();
    }, 5000);
});

document.querySelector(".modal__content__close").addEventListener("click", CloseNewsletterModal);

//Register a click and closes window if its in the modal (the modal it's the grey part)
document.addEventListener("click", function ModalClickClose(event) {
    if (event.target == newsletterModal) {
        CloseNewsletterModal();
    }
})

document.addEventListener("click", function EscapePressClose(event) {
    if(event.key == "Escape") {
        CloseNewsletterModal(); 
    }
});

document.querySelector(".modal__content__button").addEventListener("click", SendModalData);

function ShowNewsletterModal(){
    if(!sessionStorage.getItem("ModalClosed")) { 
        newsletterModal.style.display = "block"; 
    }
}

function CloseNewsletterModal(){
    newsletterModal.style.display = null;
    sessionStorage.setItem("ModalClosed", true);
}

function SendModalData(){
    const confirmation = document.querySelector(".modal__content__confirmation");
    const visualElement = document.getElementById("modal-input");
    const email = visualElement.value;

    if(regrex.test(email)){
        visualElement.style.border = null;
        confirmation.style.visibility = "visible";

        PostEmail(email);
    }
    else{ 
        visualElement.style.border = "1px solid red"; 
        confirmation.style.visibility = null;
        console.log("INVALID data"); 
    }
}

async function PostEmail(email){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            newsletterEmail: email,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
        })

        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        }
    }
    catch(error){
        console.log(error);
    }
}