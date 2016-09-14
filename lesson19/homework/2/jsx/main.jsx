import React from 'react';
import ReactDOM from 'react-dom';

 
class Form extends React.Component {
  	render() {
  		return  <form>
  					<input type="text" className="name" />
  					<input type="text" className="login" />
  					<input type="submit" className="submit" value="Submit" />
  				</form>
  	}
}

ReactDOM.render(<Form/>, document.getElementById('container'));