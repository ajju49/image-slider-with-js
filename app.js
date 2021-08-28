//selector
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

//event listner
nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);


//function
function nextSlide(){
    container.animate([{opacity:'0.3'},{opacity:'1.0'}]
    ,{duration:2000,fill:'forwards'});
    if(counter === 4){
        counter = -1;
    }
    
    counter++;

    container.style.backgroundImage = `url(img/image-${counter}.jpg`
}
 
function prevSlide(){
    container.animate([{opacity:'0.3'},{opacity:'1.0'}]
    ,{duration:2000,fill:'forwards'});
    if(counter === 0){
        counter = 5;
    }
    
    counter--;

    container.style.backgroundImage = `url(img/image-${counter}.jpg`
}