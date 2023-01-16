import React, {Component} from 'react';
import './Modal.css'
import {onDOMContentLoaded} from "bootstrap/js/src/util";

class Modal extends Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            employeeId: null,
            employeeName: null,
            salary: null
        };
    }

    handleNameChange = () => {
        this.setState({
            employeeName: event.target.value
        });
    }

    handleSalaryChange = () => {
        this.setState({
            salary: event.target.value
        });
    }

    updateEmployeeData = () => {
        this.setState({
            employeeId: this.props.employeeData.id
        });
        event.preventDefault();
        if (this.state.employeeId) {
            axios.post('/update/employees/data', {
                employeeId: this.state.employeeId,
                employeeName: this.state.employeeName,
                salary: this.state.salary
            }).then(() => {
                setTimeout(() => {
                    alert('Updated succesful')
                    location.reload()
                }, 2500)
            }).catch((e) => {
                alert('Something went wrong', e)
            })
        }

    }

    deleteEmployee = () => {
        event.preventDefault();
        axios.delete('/delete/employee/data/' + this.props.employeeData.id).then(() => {
            setTimeout(() => {
                alert('Deleted succesful')
                location.reload()
            }, 2500)
        }).catch((e) => {
            alert('Something went wrong', e)
        })
    }

    render() {
        const handleClose = () => {
            this.props.onEvent();
        }

        if (this.props.show && this.props.employeeData) {
            return (
                <div className="c-modal">
                    <div>
                        <div onClick={handleClose}
                             className="overlay">
                        </div>
                        <div className="c-modal-open">
                            {this.props.type == 'view' ? (
                                <div className="modal-view-content">
                                    <h2>Employee detail</h2>
                                    <hr/>
                                    <br/>
                                    <p>Name: <strong>{this.props.employeeData.employee_name}</strong></p>
                                    <p>Salary: <strong>{this.props.employeeData.salary}$</strong></p>
                                </div>
                            ) : this.props.type == 'edit' ? (
                                <div className="modal-edit-content">
                                    <form onSubmit={this.updateEmployeeData}>
                                        <>
                                            <div className="form-group">
                                                <label>Employee name</label>
                                                <input type="text"
                                                       onChange={this.handleNameChange}
                                                       className="form-control"
                                                       id="employeeName"
                                                       placeholder="Enter name"/>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Salary</label>
                                                <input type="number"
                                                       onChange={this.handleSalaryChange}
                                                       className="form-control"
                                                       id="salary"
                                                       placeholder="Enter salary"/>
                                            </div>
                                            <button type="submit"
                                                    className="btn btn-primary mt-3">
                                                Update
                                            </button>
                                        </>
                                    </form>
                                </div>
                            ) : this.props.type == 'delete' ? (
                                <div className="modal-edit-content">
                                    <div>Are you sure to delete this</div>
                                    <div className="modal-button d-flex justify-content-between">
                                        <button type="button" className="btn btn-danger" onClick={this.deleteEmployee}>Yes</button>
                                        <button type="button" className="btn btn-secondary" onClick={handleClose}>No</button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )
        } else {
            return;
        }
    }
}

export default Modal
