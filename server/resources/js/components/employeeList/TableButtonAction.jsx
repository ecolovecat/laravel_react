import React, {Component} from 'react';
import Modal from "./Modals/Modal";

class TableButtonAction extends Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            employeeData: null,
            modalType: null
        }
    }

    openModal = (type) => {
        this.setState({
            show: true,
            type: type
        })
    }

    closeModal = () => {
        this.setState({
            show: false
        })
    }

    getEmployeeDetail = (eId) => {
        axios.post('/get/employee/detail', {
            employeeId: eId
        }).then(res => {
            this.setState({
                employeeData: res.data
            })
        })
    }

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {this.openModal('view');this.getEmployeeDetail(this.props.employeeId)}}>
                    View
                </button>
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {this.openModal('edit');this.getEmployeeDetail(this.props.employeeId)}}>
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {this.openModal('delete');this.getEmployeeDetail(this.props.employeeId)}}>
                    Delete
                </button>
                <Modal onEvent={this.closeModal} type={this.state.type} show={this.state.show} employeeData={this.state.employeeData}/>
            </div>
        )
    }
}

export default TableButtonAction
