class Slider{
    constructor(idSlider){
        this.slider = document.getElementById(idSlider);
        this.trackerList = this.slider.querySelector(".main__slider__view__UI").querySelector(".main__slider__view__UI__tracker").querySelectorAll(".main__slider__view__UI__tracker__circle");
        this.imagesContainer = this.slider.querySelector(".main__slider__view__content");
        this.imagesList = this.slider.querySelector(".main__slider__view__content").querySelectorAll(".main__slider__view__content__image");
        this.iterator = 0;
        this.previousIterator = 0;
    }

    advance() {
        this.previousIterator = this.iterator;
        this.iterator++;
        
        if(this.iterator > this.imagesList.length-1)
            this.iterator = 0;

        this.changeDisplay();
    }

    retreat() {
        this.previousIterator = this.iterator;
        this.iterator--;
        
        if(this.iterator < 0)
            this.iterator = this.imagesList.length-1;

        this.changeDisplay();
    }

    changeDisplay(){
        this.imagesContainer.style.transform = `translateX(${this.iterator * -100}%)`;
        
        this.trackerList[this.previousIterator].classList.toggle("main__slider__view__UI__tracker__current-circle");
        this.trackerList[this.iterator].classList.toggle("main__slider__view__UI__tracker__current-circle");
    }
}

const slider = new Slider("slider");

document.getElementById("sliderRightArrow").addEventListener("click", function callAdvance() {
     slider.advance() 
    });

document.getElementById("sliderLeftArrow").addEventListener("click", function callAdvance() {
    slider.retreat() 
   });

const timer = setInterval(function callAdvance() {
    slider.advance() 
   }, 
   5000);