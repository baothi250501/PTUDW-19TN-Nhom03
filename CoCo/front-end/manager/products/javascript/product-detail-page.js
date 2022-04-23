let btnLeft = document.getElementById('leftlst');
let btnRight = document.getElementById('rightlst');
var productImages = document.querySelectorAll('.detail-image-list');
var productCarousel = document.getElementById('shift');
var productFix = document.querySelector(".product-img-carousel");
var marginLeft = 0;
var count = 0;
var screenSize = 0;
/*
btnRight.onclick = ()=>{
    if(count < productImages.length - 3){
        count++;
        marginLeft -= 50;
        productCarousel.style.marginLeft = marginLeft + "px";
    }  
};
btnLeft.onclick = ()=>{
    if(count > 0){
        count--;
        marginLeft += 50;
        productCarousel.style.marginLeft = marginLeft + "px";
    }
};*/
/*btnRight.onclick = ()=>{
    console.log(productImages[0].clientWidth);
    if(count < productImages.length - 1 && productImages[0].clientWidth == 196){
        count++;
        marginLeft -= 220;
        productCarousel.style.marginLeft = marginLeft + "px";
    }  
};
btnLeft.onclick = ()=>{
    if(count > 0 && productImages[0].clientWidth == 196){
        count--;
        marginLeft += 220;
        productCarousel.style.marginLeft = marginLeft + "px";
    }
};*/