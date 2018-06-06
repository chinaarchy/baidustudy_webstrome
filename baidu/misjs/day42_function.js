//定义餐厅类
function Restaurant(props) {
    this.cash = props.cash
    this.seats = props.seats
    this.staff = props.staff
}

Restaurant.prototype.hire = function (Employee) {
    this.staff.push(Employee)
}

Restaurant.prototype.fire = function (Employee) {
    this.staff.splice(this.staff.indexOf(Employee),1)
}
//定义员工类
function Employee(name,ID,salary) {
    this.name = name
    this.ID = ID
    this.salary = salary
}

Employee.prototype.finnishOneThing = function () {

}
//继承函数的封装
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
//Cook Extends Employee
function Cook(name,ID,salary){
    Employee.call(this,name,ID,salary)
}
inherits(Cook,Employee)
//Waiter extends Employee
function Waiter(name,ID,salary) {
    Employee.call(name,ID,salary)
}
inherits(Waiter,Employee)
//定义顾客类
function Customer(props) {
    this.props = props
}
//添加方法
Customer.prototype.eat = function () {
    console.log('Customers are eating')
}
Customer.prototype.order = function () {
    console.log('Customers are ordering')
}
//定义食物类
function Food(props) {
    this.name = props.name
    this.cost = props.cost
    this.price = props.price
}