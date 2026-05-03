function checkout(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let msg = "Order:\n";

cart.forEach(item=>{
msg += item.name + " - PKR " + item.price + "\n";
});

/* SAVE SALES */
let sales = JSON.parse(localStorage.getItem("sales")) || [];
sales.push(cart.length);
localStorage.setItem("sales", JSON.stringify(sales));

window.open("https://wa.me/923378251481?text=" + encodeURIComponent(msg));
}