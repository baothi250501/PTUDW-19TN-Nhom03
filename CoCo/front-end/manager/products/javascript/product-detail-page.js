let btnLeft = document.getElementById('leftlst');
let btnRight = document.getElementById('rightlst');
var productImages = document.querySelectorAll('.detail-image-list');
var productCarousel = document.getElementById('heoheo');
var marginLeft = 0;
var count = 0;
btnRight.onclick = ()=>{
    if(count < productImages.length - 3){
        count++;
        marginLeft -= 110;
        productCarousel.style.marginLeft = marginLeft + "px";
    }  
};
btnLeft.onclick = ()=>{
    if(count > 0){
        count--;
        marginLeft += 110;
        productCarousel.style.marginLeft = marginLeft + "px";
    }
};
