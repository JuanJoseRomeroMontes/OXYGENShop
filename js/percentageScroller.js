let maxHeight = document.body.offsetHeight-window.innerHeight;
const barFill = document.querySelector(".nav__percentage-scroller");

// Changes the size of the percentage scroller when the user scrolls
document.addEventListener("scroll", function ScrollBar() {  
    let actualHeight = window.scrollY;
    let percentage = (actualHeight/maxHeight)*100;
    barFill.style.width = percentage+"%";
    if(percentage >= 25) { 
        ShowNewsletterModal(); 
    }
});