# Pizza Parlor

#### Epicodus Code Review #4: Object-Oriented JavaScript

#### By Shannon Lee

## Technologies Used

* JavaScript
* JQuery
* HTML
* CSS
* Git

## Description

This is a web application for an imaginary pizza company that allows the user to obtain the cost of their pizza order depending on the size and toppings. This was made as a part of Epicodus' code review #4 made to demonstrate understanding of JavaScript objects and constructors.

## Setup/Installation Requirements

* Clone this repository to your machine
* Navigate to the top level of this directory `pizza-parlor/`
* Open `index.html` in your web browser

## Known Bugs

* None known at this time

## Tests

Describe: Pizza.prototype.getCost()

Test1: "Will return a price equal to 0.7 * the diameter of the pizza"
let pizza = {toppings: [], size: 10}
Expect(pizza.getCost).toEqual(7)

Test2: "Will return a price equal to 0.7 * the diameter of the pizza plus an additional $2 per topping"
let pizza = {toppings: ["pepperoni","mushroom","onion"], size: 10}
Expect(pizza.getCost).toEqual(13);

Test3: "Will return a price equal to 0.7 * the diameter of the pizza plus an additional $2 per topping BUT the first 2 toppings are free"
let pizza = {toppings: ["pepperoni","mushroom","onion"], size: 10}
Expect(pizza.getCost).toEqual(9);

Test4: "Will return a price equal to 0.7 * the diameter of the pizza if the number of toppings is 2 or less."
let pizza = {toppings: ["pepperoni"], size: 10}
Expect(pizza.getCost).toEqual(7);


## License
[MIT](https://opensource.org/licenses/MIT)

_Copyright (c) Shannon Lee 2021_
_<shannonleehj@gmail.com>_

## Resources
[Learn How to Program](https://www.learnhowtoprogram.com/introduction-to-programming-part-time-c-and-react-track)

[Bootstrap](https://getbootstrap.com/)

[jQuery](https://api.jquery.com/)