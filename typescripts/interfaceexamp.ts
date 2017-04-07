/**
 * Created by skolapar on 4/7/2017.
 */
interface IPerson {
    firstName:string,
        lastName:string,
        sayHi: ()=>string
}

var customer:IPerson = {
    firstName:"Kolaparthi",
    lastName:"srinivas",
    sayHi: ():string =>{return "Hi there"}
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee:IPerson = {
    firstName:"Srini",
    lastName:"Kolapar",
    sayHi: ():string =>{return "Hello!!!"}
}

console.log("Employee  Object ")
console.log(employee.firstName)
console.log(employee.lastName)