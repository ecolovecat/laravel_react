import React, { useState } from 'react';
import EmployeeManageModal from "./Modals/EmployeeManageModal";
import axios from 'axios';

const TableButtonAction = (props) => {
    const [show, setShow] = useState(false);
    const [employeeData, setEmployeeData] = useState(null);
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => {
        setShow(true);
        setModalType(type);
    }

    const closeModal = () => {
        setShow(false);
    }

    const getEmployeeDetail = (eId) => {
        axios.post('/get/employee/detail', {
            employeeId: eId
        }).then(res => {
            setEmployeeData(res.data);
        })
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {openModal('view');getEmployeeDetail(props.employeeId)}}>
                View
            </button>
            <button
                type="button"
                className="btn btn-info"
                onClick={() => {openModal('edit');getEmployeeDetail(props.employeeId)}}>
                Edit
            </button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => {openModal('delete');getEmployeeDetail(props.employeeId)}}>
                Delete
            </button>
            {employeeData?<EmployeeManageModal onEvent={closeModal} type={modalType} show={show} employeeData={employeeData} />:null}
        </div>
    );
}

export default TableButtonAction;
