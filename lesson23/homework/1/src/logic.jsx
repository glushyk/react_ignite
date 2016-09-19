import React from 'react';
import ReactDOM from 'react-dom';
import usersAll from './data.jsx'

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = { usersAll };
    this.addEvent = this.addEvent.bind(this);
  }

  render() {
    var users = this.props.users.map((user,i) => {
      return <li key={i}><Todouser user={user} /></li>;
    })
    return(
      <div>
        <ul>{users}</ul>
        <p><NewUser addEvent={this.addEvent} /></p>
      </div>
    );
  }
  addEvent(todouser){
    usersAll.push(todouser.newuser);
    this.setState({ usersAll });
  }
}
 
class Todouser extends React.Component {
  render(){
    return <div>{this.props.user}</div>;
  }
}
 
class NewUser extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.userName).focus();
  }
  render(){
    return (<form onSubmit={this.onSubmit}>
      <input ref="userName" type="text" />
    </form>);
  }
  onSubmit(event){
    event.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.userName)
    var newuser = input.value;
    this.props.addEvent({ newuser });
    input.value = '';
  }
}

export {UserList,Todouser,NewUser};