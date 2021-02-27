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