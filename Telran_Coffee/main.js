function makeCoffee(sortOfCoffee) {
  let coffeePowder, water, milk;
  if (sortOfCoffee === 'espresso') {
    coffeePowder = 25;
    water = 50;
    milk = 0;
  } else if (sortOfCoffee === 'americano') {
    coffeePowder = 25;
    water = 150;
    milk = 0;
  } else {
    coffeePowder = 25;
    water = 50;
    milk = 200;
  }
  alert('Here is your coffee: ' + sortOfCoffee + '!!! ' 
        + 'Coffee powder: ' + coffeePowder + ', '
        + 'water: ' + water + ', ' 
    + 'milk: ' + milk);
}
