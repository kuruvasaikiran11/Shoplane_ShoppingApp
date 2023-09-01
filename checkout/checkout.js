$(document).ready(function () {
    var productListJSON = localStorage.getItem("product-list");
    var productList = [];

    if (productListJSON) {
        productList = JSON.parse(productListJSON);
    }

    var itemList = document.getElementById("item-list");
    var total = document.getElementById("total-amt");
    var totalItems = 0;
    var grandTotal = 0;

    for (let i = 0; i < productList.length; i++) {
        createCheckoutItem(productList[i]);

        var totalForCurrentProd = productList[i].count * productList[i].price;
        grandTotal += totalForCurrentProd;

        totalItems += productList[i].count
    }

    // console.log(grandTotal);
    total.innerText = totalItems;
    $("#total-amt").html(grandTotal);


    function createCheckoutItem(product) {
        itemList.innerHTML += `
            <div class="item-card">
                <div>
                    <img class="checkout-product-img" src="${product.preview}" alt="">
                </div>
                <div>
                    <h4>${product.name}</h4>
                    <p>x${product.count}</p>
                    <p><span>Amount: Rs </span><span class="product-price">${product.price}</span> </p>
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        `;
    }

    $("#btn-order").click(function () {
        if(totalItems == 0){
            alert("Your cart is empty!! Not able to place order");
        }else{
            localStorage.setItem('product-list', JSON.stringify([])); // Set to an empty JSON array
            location.assign("../confirm.html");
        }
    });

});