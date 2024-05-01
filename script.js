const maxHeight = document.body.offsetHeight-window.innerHeight;
const barFill = document.querySelector(".nav__percentage-scroller");
const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Changes the size of the percentage scroller when the user scrolls
document.addEventListener("scroll", function ScrollBar() {  
    let actualHeight = window.scrollY;
    let percentage = (actualHeight/maxHeight)*100;
    barFill.style.width = percentage+"%";
    if(percentage >= 25) { 
        ShowNewsletterModal(); 
    }
});

//-------------

document.querySelector(".main__button-container__return-button").addEventListener("click", ReturnTop);

function ReturnTop(){
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200);
}

//-------------

document.querySelector(".main__contact__form__send__rounded-button").addEventListener("click", SendFormularyData);

function SendFormularyData(){
    //Visual elements wich borders have to be set to red.
    const visualElements = [document.getElementById("name"), document.getElementById("email"), document.getElementById("checkbox-visual")]

    //Formulary values.
    const name = visualElements[0].value;
    const email = visualElements[1].value;
    const checkbox = document.getElementById("checkbox").checked;

    //Data validation and visual feedback
    const validData = ValidateFormularyData(name, email, checkbox, visualElements);

    if(validData)
    { 
        PostFormularyData(name, email, checkbox);
    }
    else
    { 
        console.log("INVALID data"); 
    }
}

function ValidateFormularyData(name, email, checkbox, visualElements){
    let value = true;

    if(!(name.length >= 2 && name.length <= 100)){
        value = false;
        visualElements[0].style.border = "1px solid red";
    }
    else{ visualElements[0].style.border = null; }

    if(!regrex.test(email)){
        value = false;
        visualElements[1].style.border = "1px solid red";
    }
    else{ visualElements[1].style.border = null; }

    if(!checkbox){
        value = false;
        visualElements[2].style.border = "1px solid red";
    }
    else{ visualElements[2].style.border = null; }

    return value;
}

async function PostFormularyData(name, email, checkbox){
    try{
        const response = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            checkbox: checkbox,
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

//-------------

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
        const response = fetch('https://jsonplaceholder.typicode.com/posts', {
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