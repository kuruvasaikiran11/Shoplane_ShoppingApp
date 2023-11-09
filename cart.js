$(document).ready(function() {
    var productList = window.localStorage.getItem('product-list');
    if(productList === null || productList === ""){
        productList = [];
    }

    // productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);

    $("#logout-btn").click(()=>{
        localStorage.setItem('flag', false);
        window.location.href = 'login.html';
    })
})