// first
function pizzaDelicacy(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.tops = topping;
}
pizzaDelicacy.prototype.firstChoicePizza = function() {
    return this.type + " . Outermost layer is a crust of your choice and topping of your choice";
};
// second
function Cost(price, count, delivery) {
    this.price = price;
    this.count = count;
    this.delivery = delivery;

};
Cost.prototype.firstCost = function() {
    return this.price * this.count + this.delivery;
};
// three
var pizzaPrices = [1100, 900, 750];
var crustingCost = [100, 80, 55];
var toppingCost = [80, 60, 40];
var deliveryCost = [250, 0];
$(document).ready(function() {
    $("#myform").submit(function(event) {
        event.preventDefault();
        var pizzaType = $("#type").val();

        var pizzaSize = parseInt($("#size").val());

        var pizzaCrust = $("#crust").val();

        var pizzaTopping = $("#topping").val();

        var pizzaNumber = parseInt($("#num").val());

        var pizzaDelivery = parseInt($("#mode").val());

        var priceWithoutDelivery = pizzaPrices[pizzaSize] + toppingCost[pizzaTopping] + crustingCost[pizzaCrust];
        var finalDelivery = deliveryCost[pizzaDelivery];

        var myPizza = new pizzaDelicacy(pizzaType, pizzaSize, pizzaCrust, pizzaTopping);
        var total2 = new Cost(finalDelivery, pizzaNumber, priceWithoutDelivery);
        //  console.log(pizzaDelivery);
        if (pizzaDelivery === 0) {
            prompt("Enter the place where Your pizza will be delivered.");
            alert("Thanks for placing an order which is " + myPizza.firstChoicePizza() + ". And total cost of your pizza is ksh " + total2.firstCost());

        } else if (pizzaDelivery === 1) {

            alert("Thanks for placing order which is " + myPizza.firstChoicePizza() + ". And total cost of your pizza is ksh " + total2.firstCost());

        }

    });
});