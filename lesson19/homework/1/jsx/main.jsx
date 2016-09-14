import React from 'react';
import ReactDOM from 'react-dom';

var users = [{name:"Anne Montgomery",gender:"Female"},
{name:"Annie George",gender:"Female"},
{name:"Gary Butler",gender:"Male"},
{name:"Lisa Mendoza",gender:"Female"},
{name:"Marilyn Henry",gender:"Female"},
{name:"Johnny Tucker",gender:"Male"},
{name:"Chris Jacobs",gender:"Male"},
{name:"Benjamin James",gender:"Male"}];

var userLength = users.length;
 
class Users extends React.Component {
  	render() {
  		return (<table><tbody>
  		{	this.props.users.map(function(item){
  				return <tr>
  							<th>{item.name}</th>
  							<th>{item.gender}</th>
  						</tr>
  			})
  		}
  		</tbody></table>)
  	}
}

ReactDOM.render(<Users users={users}/>, document.getElementById('container'));