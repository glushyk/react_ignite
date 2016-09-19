import React from 'react';
import ReactDOM from 'react-dom';

import First from './first.jsx'
import Second from './second.jsx'

ReactDOM.render(<First><Second /></First>, document.getElementById('result'));