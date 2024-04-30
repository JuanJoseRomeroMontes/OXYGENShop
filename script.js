var maxHeight = document.body.offsetHeight-window.innerHeight;

var barFill = document.querySelector(".nav__percentage-scroller");

// Changes the size of the percentage scroller when the user scrolls
window.onscroll = (e) => {  
    var actualHeight = window.scrollY;
    var percentage = (actualHeight/maxHeight)*100;
    barFill.style.width = percentage+"%";
}

function ReturnTop(){
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200);
}

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                checkbox: checkbox,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8', 
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    else
    { console.log("INVALID data"); }
}

function ValidateFormularyData(name, email, checkbox, visualElements){
    var value = true;
    const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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