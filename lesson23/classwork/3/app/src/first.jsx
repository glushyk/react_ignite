import React from 'react';
 
class First extends React.Component {
  render() {
    return <div>
    		<h1>Hello World from 1</h1>
    		{this.props.children}
    	   </div>
  }
}

export default First;