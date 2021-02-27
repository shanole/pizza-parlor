// Business Logic for Orders List -----------
function OrdersList() {
  this.pizzas = {};
  this.currentId = 0;
}

OrdersList.prototype.addPizza(function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
})

OrdersList.prototype.assignId(function(pizza) {
  this.currentId += 1;
  return this.currentId;
})

OrdersList.prototype.findContact = function (id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  else {
    return false;
  }
}

AddressBook.prototype.deleteContact = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  else {
    delete this.pizzas[id];
    return true;
  }
}

// Business Logic for pizza --------------
small = 10;
medium = 12;
large = 14;

function Pizza() {
  this.size;
  this.toppings = [];
}

Pizza.prototype.addTopping(function(topping) {
  this.toppings.push(topping);
})

Pizza.prototype.pickSize(function(size) {
  this.size = size;
})

Pizza.prototype.getCost(function() {
  let basePrice = this.size*0.6;
  let toppingsPrice = (this.toppings.length()-2) * 2;
})