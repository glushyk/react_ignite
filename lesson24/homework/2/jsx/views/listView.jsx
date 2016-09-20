import React from 'react';
import {Link} from 'react-router';

class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var userList = this.props.route.data.map((item, i) => {
            return (
                <li key={i}>{item.first_name} {item.last_name}</li>
            );
        });
        return(
                <ul>{userList}</ul>
        )
    }
}

export default ListView;