const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
        visualElements[0].classList.add("red-border");
    }
    else{ visualElements[0].classList.remove("red-border")};

    if(!regrex.test(email)){
        value = false;
        visualElements[1].classList.add("red-border");
    }
    else{ visualElements[1].classList.remove("red-border")};

    if(!checkbox){
        value = false;
        visualElements[2].classList.add("red-border");
    }
    else{ visualElements[2].classList.remove("red-border")};

    return value;
}

async function PostFormularyData(name, email, checkbox){
    try{
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
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