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
    }, 1);
}

let cart = [];
let total = 0;

function pizzaAddToCart(item, price) {

    cart.push(item)
    total += price;

    let amountShow = document.querySelector("span.show-total");
    amountShow.innerHTML = parseInt(total);

    let cartShow = document.querySelector("span.show-cart");
    cartShow.innerHTML = cart;

    let cartShow2 = document.querySelector("#cart002");
    cartShow2.innerHTML = cart;

    let orderBTN = document.querySelector("#orderBTN001");
    orderBTN.style.display = "block";
}

function sendEmail() {
   
    Email.send({
        Host: "smtp.gmail.com",
        Username: "orderorderpizza@gmail.com",
        Password: "pizzapizza1234",
        To: document.getElementById("email").value,
        From: "orderorderpizza@gmail.com",
        Subject: "Rendelés",
        Body:
            "Megrendelés visszaigazolása." + "<br>" + "<br>" +
            "Rendelés száma: " + parseInt(Math.random() * 100000) + "<br>" + "<br>" +
            "Név: " + document.getElementById("name").value + "<br>" + "<br>" +
            "Email: " + document.getElementById("email").value + "<br>" + "<br>" +
            "Telefonszám:  " + document.getElementById("phoneNumber").value + "<br>" + "<br>" +
            "Település :  " + document.getElementById("inputState").value + "<br>" + "<br>" +
            "Utca: " + document.getElementById("street").value + "<br>" + "<br>" +
            "Házszám: " + document.getElementById("houseNumber").value + "<br>" + "<br>" +
            "Rendelés tartalma: " + cart + "<br>" + "<br>" +
            "Fizetendő: " + total + "Ft"
    })/*.then(
		message => alert("mail sent successfully")
	)*/;
}








