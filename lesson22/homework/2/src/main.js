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

class User extends Person {
        constructor(firstName="John",lastName="Dou", age="0",gender="Male", signUpDate = 0, id) {

            super(firstName, lastName, age, gender);

            this.signUpDate= signUpDate;
            this.id = id;
        }
}

 let user1 = new User();
 let user2 = new User('Sasha', 'Ohl', 22, 'Male', '15.02.12', 2);
 let user3 = new User('Anna', 'Lalkina', 23, 'Female', '8.12.12', 3);
 let users = [user1, user2, user3];

 console.log(users);