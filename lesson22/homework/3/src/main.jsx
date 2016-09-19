var React = require('react');
var ReactDOM = require('react-dom');
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

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let data = this.props.data;
        let tab = data.map((item,i)=>{
          let keys =[];
          for (var k in item) keys.push(k);
          let row = keys.map((prop,i)=>{
            return <td key={i} onClick={() => {item.sayHi()}}>{item[prop]}</td>
          });
          return <tr key={i}>{row}</tr>
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Signup date</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>{tab}</tbody>
            </table>
        );
    }
}


ReactDOM.render(<App data={users} />, document.getElementById('result'));