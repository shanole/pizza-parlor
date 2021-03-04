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
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.getCost = function() {
  let basePrice = pizzaSizes[this.size]*0.7;
  let numberOfToppings = this.toppings.length;
  if (numberOfToppings > 2) {
    basePrice += (numberOfToppings-2)*2;
  }
  return basePrice.toFixed(2);
}

const pizzaSizes = {
  "Small" : 10,
  "Medium" : 12,
  "Large" : 14,
}

// User Interface Logic --------------

function displayPizzaDetails(ordersListToDisplay) {
  let pizzaList = $("ul#pizzas");
  let htmlForPizzaList = "";
  Object.keys(ordersListToDisplay.pizzas).forEach(function (key) {
    const pizza = ordersListToDisplay.findPizza(key);
    htmlForPizzaList += "<li id=" + pizza.id + ">" + pizza.size + " pizza with " + pizza.toppings.join(", ") + ": $" + pizza.getCost() + "  <button class='deleteButton' id=" + pizza.id + ">Remove</button></li>"});
  pizzaList.html(htmlForPizzaList);
}

function attachContactListeners(ordersList) {
  $("#pizzas").on("click", ".deleteButton", function () {
    ordersList.deletePizza(this.id);
    $("#show-order").hide();
    displayPizzaDetails(ordersList);
    $("#show-order").show();
    $("#total-cost").text(calculateTotalPrice(ordersList))
  });
};

function calculateTotalPrice(ordersList) {
  let total = 0;
  Object.keys(ordersList.pizzas).forEach(function(key) {
    const pizza = ordersList.findPizza(key);
    pizzaPrice = parseFloat(pizza.getCost());
    total += pizzaPrice;
  });
  return total.toFixed(2);
}

$(document).ready(function () {
  let ordersList = new OrdersList();

  attachContactListeners(ordersList);
  $('#only').click(function() {
    $(this).siblings().attr('disabled', this.checked);
    $("#name").removeAttr("disabled");
    $("#size").removeAttr("disabled");
  });

  $("form#pizza-order").submit(function (event) {
    event.preventDefault();

    pizza = new Pizza($("#size").val());

    if($("#only").is(':checked')){
      pizza.toppings.push("cheese only");
    }
    else {
      $("input:checkbox:checked").each(function (){
        const topping = $(this).val();
        pizza.toppings.push(topping);
      })
    }
 
    $("#customer-name").text($("input#name").val());
    $("#show-order").show();

    ordersList.addPizza(pizza);
    displayPizzaDetails(ordersList);
    $("#total-cost").text(calculateTotalPrice(ordersList));
    $('.toppings').prop('checked', false);
    $(".toppings").removeAttr("disabled");
  })
})