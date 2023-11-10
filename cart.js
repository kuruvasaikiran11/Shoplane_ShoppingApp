$(document).ready(function() {
    if(localStorage.getItem("flag") === null || localStorage.getItem("flag") === "false"){
        // window.location.href = '/login.html';
        var rootPath = window.location.pathname.split('/')[1];
        var logoutLink = document.getElementById('logout-link');
        
        if (rootPath && rootPath !== 'Shoplane_ShoppingApp') {
            // If not in the root directory, prepend the root path
            logoutLink.href = '/' + rootPath + '/login.html';
        } else {
            // If in the root directory or no root path detected
            logoutLink.href = '/login.html';
        }
    }
    
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
        // window.location.href = 'login.html';
        location.reload();
    })
})