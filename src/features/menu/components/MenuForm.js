import {Component} from "react";
import {menu} from "../../../model/menu";
import {FormInput} from "../../../shared/components/forms/FormInput";
import {FormContainer} from "../../../shared/components/containers/FormContainer";
import {withLoading} from "../../../shared/hoc/withLoading";

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            isValid: false,
            error: {id: '', name: '', price: ''}
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

    async handleSubmit(e) {
        e.preventDefault();
        this.props.handleShowLoading(true);
        try {
            const {id, name, price} = this.state;
            const result = await this.service.addNewMenu(menu(id, name, price));
            this.props.handleShowLoading(false);
            alert(`Successfully add ${result.name}`);
            this.props.onCancelForm();
        } catch (e) {
            this.props.handleShowLoading(false);
            alert('oops');
        }
    }

    validate(key) {
        const {id, name, price, error} = this.state;
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
            case 'name':
                if (!name) {
                    this.setState({
                        isValid: false,
                        error: {...error, name: 'Informasi nama dibutuhkan'},
                    })
                } else {
                    this.setState({
                        error: {...error, name: ''},
                    })
                }
                break;
            case 'price':
                if (!price) {
                    this.setState({
                        isValid: false,
                        error: {...error, price: 'Informasi harga dibutuhkan'},
                    })
                } else {
                    this.setState({
                        error: {...error, price: ''},
                    })
                }
                break;
            default:
        }
        if (id && name && price) {
            this.setState({
                isValid: true,
            })
        }
    }

    render() {
        const {id, name, price, isValid} = this.state;
        return (
            <FormContainer title='Tambah Menu' onCancel={this.props.onCancelForm} onSubmit={this.handleSubmit}
                           isValid={isValid}>
                <FormInput id='id' label='ID Menu' errorMessage={this.state.error.id} placeholder='Masukan ID Menu'
                           value={id}
                           onChange={this.handleChange}/>
                <FormInput id='name' label='Nama Menu' errorMessage={this.state.error.name}
                           value={name}
                           placeholder='Masukan nama menu'
                           onChange={this.handleChange}/>
                <FormInput id='price' label='Harga' errorMessage={this.state.error.price}
                           isNumber={true}
                           value={price}
                           placeholder='Masukan harga menu'
                           onChange={this.handleChange}/>
            </FormContainer>
        );
    }
}

export default withLoading(MenuForm);
