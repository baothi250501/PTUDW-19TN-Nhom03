var productList = document.querySelector('#product-list');
/*$(document).ready(function(e){
    jsonObject.products.array.forEach(element => {
        loadProduct(element);
    });
});*/
jsonObject.products.forEach(element => {
    loadProduct(element);
});
function loadProduct(product){
    let cardView = document.createElement("div");
    cardView.setAttribute("class", "product-cardview");
    cardView.innerHTML =  '<img src="images/'+product.images[0]+'" alt="product">'+
    '<div class="product-cardview-box">'+
        '<div class="product-cardview-info">'+
            '<a href="/">'+product.name+'</a>'+
            '<p>'+product.price+'.000 VNĐ</p>'+
        '</div>'+
       '<div class="product-cardview-action">'+
           '<span class="fa-solid fa-trash-can fa-xl"></span>'+
       '</div>'+
    '</div>';
    productList.appendChild(cardView);
}