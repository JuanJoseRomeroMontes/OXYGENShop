document.querySelector(".main__button-container__return-button").addEventListener("click", ReturnTop);

function ReturnTop(){
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200);
}