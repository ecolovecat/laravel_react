import React, {Component} from 'react';
import TableRow from "./TableRow";

class Table extends Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        await this.getEmployeeList();
    }

    // Get employee list
    getEmployeeList = async () => {
        let self = this
        await axios.get('/get/employee/list').then(function (res) {
            self.setState({
                employees: res.data
            })
        })
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">####</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(function (employee, index) {
                                return <TableRow index={index+1} data={employee} key={employee.id}/>
                            })}
                            <TableRow/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table
