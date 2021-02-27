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

OrdersList.prototype.deleteContact = function (id) {
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
  let basePrice = this.size*0.6;
  let toppingsPrice = (this.toppings.length()-2) * 2;
}

const pizzaSizes = {
  "small" : 10,
  "medium" : 12,
  "large" : 14,
}

// User Interface Logic --------------
let ordersList = new OrdersList();

function displayPizzaDetails(ordersListToDisplay) {

}

function showPizza(pizzaId) {
  const pizza = OrdersList.findPizza(pizzaId)
}

$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();

    pizza = new Pizza();

    const pizzaSize = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function (){
      const topping = $(this).val();
      pizza.toppings.push(topping);
    })

    pizza.pickSize(pizzaSize);

    console.log(pizza.size);
    console.log(pizza.toppings);
  })
})