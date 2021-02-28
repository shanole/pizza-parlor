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

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Tests

Describe: Pizza.prototype.getCost()

Test: "Will return a price equal to 0.7 * the diameter of the pizza"
let pizza = Pizza {toppings: [], size: 10}
Expect(Pizza.getCost).toEqual(7)

Test: "Will return a price equal to 0.7 * the diameter of the pizza plus an additional $2 per topping"
let pizza = Pizza {toppings: ["pepperoni","mushroom","onion"], size: 10}
Expect(Pizza.getCost).toEqual(13);

Test: "Will return a price equal to 0.7 * the diameter of the pizza plus an additional $2 per topping BUT the first 2 toppings are free"
let pizza = Pizza {toppings: ["pepperoni","mushroom","onion"], size: 10}
Expect(Pizza.getCost).toEqual(9);

Test: "Will return a price equal to 0.7 * the diameter of the pizza if the number of toppings is 2 or less."
let pizza = Pizza {toppings: ["pepperoni"], size: 10}
Expect(Pizza.getCost).toEqual(7);


## License
[MIT](https://opensource.org/licenses/MIT)

_Copyright (c) Shannon Lee 2021_
_<shannonleehj@gmail.com>_

## Resources
[Learn How to Program](https://www.learnhowtoprogram.com/introduction-to-programming-part-time-c-and-react-track)

[Bootstrap](https://getbootstrap.com/)

[jQuery](https://api.jquery.com/)