import React from 'react';
import ReactDOM from 'react-dom';
 
var elem = React.createElement('h1', null, 'Hello World!');

ReactDOM.render(elem, document.getElementById('container'));