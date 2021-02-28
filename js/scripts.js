// Business Logic for Orders List -----------
function OrdersList() {
  this.pizzas = {};
  this.currentId = 0;
}

OrdersList.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

OrdersList.prototype.assignId = function(pizza) {
  this.currentId += 1;
  return this.currentId;
}

OrdersList.prototype.findPizza = function (id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  else {
    return false;
  }
}

OrdersList.prototype.deletePizza = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  else {
    delete this.pizzas[id];
    return true;
  }
}

// Business Logic for pizza --------------
function Pizza() {
  this.size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.pickSize = function(size) {
  this.size = size;
}

Pizza.prototype.getCost = function() {
  let basePrice = pizzaSizes[this.size]*0.7;
  let numberOfToppings = this.toppings.length;
  if (numberOfToppings > 2) {
    basePrice += (numberOfToppings-2)*2;
  }
  return basePrice;
}

const pizzaSizes = {
  "Small" : 10,
  "Medium" : 12,
  "Large" : 14,
}

// User Interface Logic --------------
let ordersList = new OrdersList();

function displayPizzaDetails(ordersListToDisplay) {
  let pizzaList = $("ul#pizzas");
  let htmlForPizzaList = "";
  Object.keys(ordersListToDisplay.pizzas).forEach(function (key) {
    const pizza = ordersListToDisplay.findPizza(key);
    htmlForPizzaList += "<li id=" + pizza.id + ">" + pizza.size + " pizza with " + pizza.toppings.join(", ") + ": $" + pizza.price + "  <button class='deleteButton' id=" + pizza.id + ">Remove</button></li>"});
  pizzaList.html(htmlForPizzaList);
}

function attachContactListeners() {
  $("#pizzas").on("click", ".deleteButton", function () {
    ordersList.deletePizza(this.id);
    $("#show-order").hide();
    displayPizzaDetails(ordersList);
    $("#show-order").show();
  });
};

function calculateTotalPrice(ordersList) {

}

$(document).ready(function () {
  attachContactListeners();
  $('#only').click(function() {
    $(this).siblings().attr('disabled', this.checked);
  });

  $("form#pizza-order").submit(function (event) {
    event.preventDefault();

    pizza = new Pizza();
    pizza.pickSize($("#size").val());
    $("input:checkbox[name=toppings]:checked").each(function (){
      const topping = $(this).val();
      pizza.toppings.push(topping);
    })
    $("#customer-name").text($("input#name").val());
    $("#show-order").show();

    ordersList.addPizza(pizza);
    displayPizzaDetails(ordersList);
    // DISPLAY TOTAL COST
    // EMPTY OUT CHECKBOX
  })
})

let testPizza = new Pizza();
testPizza.pickSize("Small");
testPizza.addTopping("pepperoni");
testPizza.addTopping("onion");
testPizza.addTopping("mushroom");

let testPizza2 = new Pizza();
testPizza2.pickSize("Small");
testPizza2.addTopping("pepperoni");
