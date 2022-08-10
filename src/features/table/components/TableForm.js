import {Component} from "react";
import {table} from "../../../model/table";
import {FormContainer} from "../../../shared/components/containers/FormContainer";
import {FormInput} from "../../../shared/components/forms/FormInput";
import {FormRadio} from "../../../shared/components/forms/FormRadio";

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tableNumber: '',
            status: '',
            isValid: false,
            error: {id: '', tableNumber: '', status: ''}
        };
        this.service = this.props.service;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        }, () => this.validate(key))
    }

    validate(key) {
        const {id, tableNumber, status, error} = this.state;
        switch (key) {
            case 'id':
                if (!id) {
                    this.setState({
                        isValid: false,
                        error: {...error, id: 'Informasi id dibutuhkan'},
                    })
                } else {
                    this.setState({
                        error: {...error, id: ''},
                    })
                }
                break;
            case 'tableNumber':
                if (!tableNumber) {
                    this.setState({
                        isValid: false,
                        error: {...error, tableNumber: 'Informasi nomor meja dibutuhkan'},
                    })
                } else {
                    this.setState({
                        error: {...error, tableNumber: ''},
                    })
                }
                break;
            case 'status':
                if (!status) {
                    this.setState({
                        isValid: false,
                        error: {...error, status: 'Informasi status dibutuhkan'},
                    })
                } else {
                    this.setState({
                        error: {...error, status: ''},
                    })
                }
                break;
            default:
        }
        if (id && tableNumber && status) {
            this.setState({
                isValid: true,
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {id, tableNumber, status} = this.state;
        this.service.addNewTable(table(id, tableNumber, status));
        this.props.onCancelForm();
    }

    render() {
        const {id, tableNumber, status, isValid} = this.state;
        return (
            <FormContainer title='Tambah Meja' onCancel={this.props.onCancelForm} onSubmit={this.handleSubmit}
                           isValid={isValid}>
                <FormInput id='id' label='ID Meja' errorMessage={this.state.error.id} placeholder='Masukan ID Meja'
                           value={id}
                           onChange={this.handleChange}/>
                <FormInput id='tableNumber' label='Nomor Meja' errorMessage={this.state.error.tableNumber}
                           placeholder='Masukan nomor meja'
                           value={tableNumber}
                           onChange={this.handleChange}/>
                <FormRadio id='status' title='Status' labels={{'A': 'Available', 'U': 'Unavailable'}}
                           onChange={this.handleChange} value={status}/>
            </FormContainer>
        );
    }
}

export default TableForm;
