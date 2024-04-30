var maxHeight = document.body.offsetHeight-window.innerHeight;

var barFill = document.querySelector(".nav__percentage-scroller");

// Changes the size of the percentage scroller when the user scrolls
window.onscroll = (e) => {  
    var actualHeight = window.scrollY;
    var percentage = (actualHeight/maxHeight)*100;
    barFill.style.width = percentage+"%";
}

async function ReturnTop(){
    setTimeout(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200);
}