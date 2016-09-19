import React from 'react';
import ReactDOM from 'react-dom';

import usersAll from './data.jsx'
import {UserList,Todouser,NewUser} from './logic.jsx'


ReactDOM.render(<UserList users={usersAll} />, document.getElementById('result'));