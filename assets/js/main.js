const images = ["./assets/images/slider1.jpg", "./assets/images/slider2.jpg", "./assets/images/slider3.jpg"];
const slider = document.querySelector('#slider img');
var i = 0; 
function runSlide(){
    slider.src = images[i];
    i++
    if(i >= images.length){
        i = 0;
    }
} 

setInterval(runSlide, 1500);


