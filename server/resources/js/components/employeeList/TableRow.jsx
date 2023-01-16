import React, {Component} from 'react';
import TableButtonAction from "./TableButtonAction";

class TableRow extends Component {
    // Constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.index)
    }

    render() {
        if (this.props.data) {
            return (
                <tr>
                    <th scope="row">{this.props.index}</th>
                    <td>{this.props.data.employee_name}</td>
                    <td>{this.props.data.salary}</td>
                    <td>
                        <TableButtonAction employeeId={this.props.data.id}/>
                    </td>
                </tr>
            )
        }
    }
}

export default TableRow
