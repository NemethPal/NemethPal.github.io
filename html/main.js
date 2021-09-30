
document.body.onload = elementHidden();
function elementHidden(){

    let x = document.querySelector("#gomb");
      x.style.display = "none";

}




function calcAmount() {


    let price = 1000;
    let amount = document.querySelector("input[name='amount-number']");
    let show = document.querySelector("span.show-amount");
    if (amount.value > 10 || amount.value < 1) {
        alert("nem jó!!!")
        show.innerHTML = 0;
        return;
    }
    show.innerHTML = parseInt(price * amount.value);
}




function orderBTNfunction() {

    setTimeout(function () {
        document.getElementById("order").click();
    }, 500);
}

let cart = [];
let total = 0;

function pizzaAddToCart(item, price) {
    
    cart.push(item)
    total += price;
    console.log(cart, price)
    console.log(total)

    let amountShow = document.querySelector("span.show-total");
    amountShow.innerHTML = parseInt(total);

    let cartShow = document.querySelector("span.show-cart");
    cartShow.innerHTML = cart;

    let cartShow2 = document.querySelector("#cart002");
    cartShow2.innerHTML = cart;

    
    
}







