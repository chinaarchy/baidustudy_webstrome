class Restaurant{
  constructor(information){
    this.cash = information.cash
    this.seats = information.seats
    this.staff = information.staff
  }
  getCash(){
    return this.cash
  }
  hire(Employee){
    this.staff.push(Employee)
  }
  fire(Employee){
    this.staff.splice(this.staff.indexOf(Employee),1)
  }
}

class Employee {
  constructor(name,ID,salary) {
    this.name = name
    this.ID = ID
    this.salary = salary
  }
  finishThing(){}
}

class Cook extends Employee {
  constructor(name,ID,salary) {
    super(name,ID,salary)
  }
  finishThing(){

  }
}




var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
