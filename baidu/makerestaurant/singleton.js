//定义餐厅类
function Restaurant(props) {
    this.cash = props.cash
    this.seats = props.seats
    this.staff = props.staff
    this.instance = null
}

Restaurant.prototype.hire = function (Employee) {
    this.staff.push(Employee)
}

Restaurant.prototype.fire = function (Employee) {
    this.staff.splice(this.staff.indexOf(Employee),1)
}
//单例模式创建
Restaurant.getInstance = function (props) {
    if (!this.instance){
        this.instance = new Restaurant(props)
    }
    return this.instance
}
//定义员工类

function Employee(name,ID,salary) {
    this.name = name
    this.ID = ID
    this.salary = salary
    this.instance = null
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
//服务员类
function Waiter(name,ID,salary) {
    Employee.call(name,ID,salary)
}
inherits(Waiter,Employee)
Waiter.prototype.helpOrder = function(){
    console.log(Customer.getInstance.orderFood())
    return Customer.getInstance.orderFood()
}
// Waiter.prototype.finishOrder = function(){
//     var food = Cook.getInstance.finishFood()
//     console.log(food)
//
// }


//单例模式创建两个类
Cook.getInstance = function (name,ID,salary) {
    if (!this.instance){
        this.instance = new Employee(name,ID,salary)
    }
    return this.instance
}
Waiter.getInstance = function (name,ID,salary) {
    if (!this.instance){
        this.instance = new Employee(name,ID,salary)
    }
    return this.instance
}


//定义顾客类
function Customer(props) {
    this.name = props.name
    this.instance = null
}
Customer.getInstance = function(props){
    if (!this.instance){
        this.instance = new Customer(props)
    }
    return this.instance
}
//添加方法
Customer.prototype.eat = function () {
    console.log('Customers are eating')
}
Customer.prototype.orderFood = function () {
    console.log('Customers are ordering')
    return new Food({name:'rice',cost:10,price:5})
}
//定义食物类
function Food(props) {
    this.name = props.name
    this.cost = props.cost
    this.price = props.price
}



//测试代码
var ife = Restaurant.getInstance({cash:10000,seats:1,staff:[]})
var Amy = Waiter.getInstance('Amy',1001,500)
ife.hire(Amy)

var customer = Customer.getInstance({name:'lily'})
customer.orderFood()
Waiter.getInstance().helpOrder()