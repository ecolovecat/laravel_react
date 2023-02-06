import React, { useState, useEffect } from 'react';
import './EmpoyeeManageModal.css'
import { onDOMContentLoaded } from "bootstrap/js/src/util";

const EmployeeManageModal = (props) => {
    const [employeeId, setEmployeeId] = useState(null);
    const [employeeName, setEmployeeName] = useState(null);
    const [salary, setSalary] = useState(null);

    const handleNameChange = (event) => {
        setEmployeeName(event.target.value);
    }

    useEffect(() => {
        setEmployeeName(props.employeeData.employee_name);
        setSalary(props.employeeData.salary);
    }, [props.employeeData]);


    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    }

    const updateEmployeeData = (eId) => {
        setEmployeeId(props.employeeData.id);
        event.preventDefault();
        if (employeeId) {
            axios.post('/update/employees/data', {
                employeeId: employeeId,
                employeeName: employeeName,
                salary: salary
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

    const deleteEmployee = () => {
        event.preventDefault();
        axios.delete('/delete/employee/data/' + props.employeeData.id).then(() => {
            setTimeout(() => {
                alert('Deleted succesful')
                location.reload()
            }, 2500)
        }).catch((e) => {
            alert('Something went wrong', e)
        })
    }

    const handleClose = () => {
        props.onEvent();
    }

    if (props.show && props.employeeData) {
        return (
            <div className="c-modal">
                <div>
                    <div onClick={handleClose}
                        className="overlay">
                    </div>
                    <div className="c-modal-open">
                        {props.type == 'view' ? (
                            <div className="modal-view-content">
                                <h2>Employee detail</h2>
                                <hr />
                                <br />
                                <p>Name: <strong>{props.employeeData.employee_name}</strong></p>
                                <p>Salary: <strong>{props.employeeData.salary}$</strong></p>
                            </div>
                        ) : props.type == 'edit' ? (
                            <div className="modal-edit-content">
                                <form onSubmit={() => { updateEmployeeData(props.employeeData.id) }}>
                                    <>
                                        <div className="form-group">
                                            <label>Employee name</label>
                                            <input type="text"
                                                value={employeeName}
                                                onChange={handleNameChange}
                                                className="form-control"
                                                id="employeeName"
                                                placeholder="Enter name" />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label>Salary</label>
                                            <input type="number"
                                                onChange={handleSalaryChange}
                                                value={salary}
                                                className="form-control"
                                                id="salary"
                                                placeholder="Enter salary" />
                                        </div>
                                        <button type="submit"
                                            className="btn btn-primary mt-3">
                                            Update
                                        </button>
                                    </>
                                </form>
                            </div>
                        ) : props.type == 'delete' ? (
                            <div className="modal-edit-content">
                                <div>Are you sure to delete this</div>
                                <div className="modal-button d-flex justify-content-between">
                                    <button type="button" className="btn btn-danger" onClick={deleteEmployee}>Yes</button>
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

export default EmployeeManageModal
