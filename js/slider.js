class Slider{
    constructor(idSlider){
        this.slider = document.getElementById(idSlider);
        this.tracker = this.slider.childNodes[1];
        this.images = this.slider.childNodes[3];
        this.iterator = 0;
        this.previousIterator = 0;
        //console.log(` Slider: ${this.slider} \n Tracker: ${this.tracker} \n Images: ${this.images} \n Iterator: ${this.iterator} \n previousIteractor: ${this.previousIterator} `);
    }

    advance() {
        this.previousIterator = this.iterator;
        this.iterator++;
        console.log(`Iterator: ${this.iterator} \n previousIteractor: ${this.previousIterator} `)

        console.log(this);
        console.log(images);
        console.log(this.slider)
        
        
        if(this.iterator > this.images.length)
            this.iterator = 0;

        this.changeDisplay();
    }

    retreat() {
        this.previousIterator = this.iterator;
        this.iterator--;
        console.log(`Iterator: ${this.iterator} \n previousIteractor: ${this.previousIterator} `)
        console.log(this.images.length)
        if(this.iterator < 0)
            this.iterator = this.images.length;

        this.changeDisplay();
    }

    changeDisplay(){
        this.images.style.transform = `translateX(${this.iterator * -100}%)`;

        this.tracker[previousIterator].classList.toggle("main__slider__view__UI__circle-container__current-circle");
        this.tracker[iterator].classList.toggle("main__slider__view__UI__circle-container__current-circle");
    }
}

const slider = new Slider("slider");
console.log(slider.slider);
/*document.getElementById("sliderLeftArrow").addEventListener("click", slider.retreat);
document.getElementById("sliderRightArrow").addEventListener("click", slider.advance);
setInterval(slider.advance, 5000);*/