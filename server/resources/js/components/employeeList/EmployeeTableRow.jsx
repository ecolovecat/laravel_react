import React, { Component } from 'react';
import TableButtonAction from "./TableButtonAction";

const EmployeeTableRow = (props) => {

    if (props.data) {
        return (
            <tr>
                <th scope="row">{props.index}</th>
                <td>{props.data.employee_name}</td>
                <td>{props.data.salary}</td>
                <td>
                    <TableButtonAction employeeId={props.data.id} />
                </td>
            </tr>
        )
    }
}

export default EmployeeTableRow
