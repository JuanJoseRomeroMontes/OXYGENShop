const basicPricingText = document.getElementById("basicPrice");
const proffesionalPricingText = document.getElementById("proffesionalPrice");
const premiumPricingText = document.getElementById("premiumPrice");

function GetPrices(){
    value = [];

    value.push(Number(basicPricingText.innerHTML.replace(/\D/g,'')));
    value.push(Number(proffesionalPricingText.innerHTML.replace(/\D/g,'')));
    value.push(Number(premiumPricingText.innerHTML.replace(/\D/g,'')));

    return value;
}

const eurPrice = GetPrices();

async function getConversions(){
    try{
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`);
        if(response.ok)
        {
            const jsonResponse = await response.json();
            eurConversions = jsonResponse.eur;
        }
    }
    catch(error){
        console.log(error);
    }
}

let eurConversions;

getConversions();

document.getElementById("radioEuro").addEventListener("click", function euroClick(){
    let newTexts = [];
    eurPrice.forEach(value => {
        let newValue = value + "€";
        newTexts.push(newValue);
    });
    ChangeText(newTexts);
});

document.getElementById("radioPound").addEventListener("click", function poundClick(){
    let newTexts = [];
    eurPrice.forEach(value => {
        let newValue = value * eurConversions.gbp;
        newValue = "£" + Number(newValue.toFixed(2));
        newTexts.push(newValue);
    });
    ChangeText(newTexts);
});

document.getElementById("radioDolar").addEventListener("click", function dollarClick(){
    let newTexts = [];
    eurPrice.forEach(value => {
        let newValue = value * eurConversions.usd;
        newValue = "$" + Number(newValue.toFixed(2));
        newTexts.push(newValue);
    });
    ChangeText(newTexts);
});

function ChangeText(newTexts){
    basicPricingText.innerHTML = newTexts[0];
    proffesionalPricingText.innerHTML = newTexts[1];
    premiumPricingText.innerHTML = newTexts[2];
}