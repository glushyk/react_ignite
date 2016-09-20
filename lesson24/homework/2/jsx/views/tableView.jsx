import React from 'react';
import {Link} from 'react-router';

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var userTable = this.props.route.data.map((elem, i) => {
            return (
                <tr key={i}>
                    <td>{elem.first_name}</td>
                    <td>{elem.last_name}</td>
                    <td>{elem.gender}</td>
                </tr>
            );
        });

        return (
                <table className="table">
                    <thead>
                    	<tr>
                    	    <th>First_name</th>
                    	    <th>Last_name</th>
                    	    <th>Gender</th>
                    	</tr>
                    </thead>
                    <tbody>{userTable}</tbody>
                </table>
        );
    }
}

export default TableView;
