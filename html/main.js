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


