import React from 'react';
 
var usersAll = ['Sasha','Masha','Anya','Petya','Vasya'];

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = { usersAll };
    this.addEvent = this.addEvent.bind(this);
  }

  render() {
    var users = this.props.users.map((user,i) => {
      return <tr key={i}><Todouser user={user} /></tr>;
    })
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
        <p><NewUser addEvent={this.addEvent} /></p>
      </div>
    );
  }
  addEvent(todouser){
    usersAll.push(todouser.newuser);
    this.setState({ usersAll });
  }
}

export default usersAll;