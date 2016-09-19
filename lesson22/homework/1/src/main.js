'use strict';

class Person {

  constructor(firstName="John",lastName="Dou", age="0",gender="Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  fullName() {
  	return this.firstName + ' ' + this.lastName;
  }
  sayHi() {
    document.write('Hello, my name is ' + this.fullName());
  }

}

let user = new Person();
user.sayHi(); 