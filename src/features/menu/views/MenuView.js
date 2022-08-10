import {Component} from "react";
import MenuForm from "../components/MenuForm";
import MenuList from "../components/MenuList";

class MenuView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedForm: false
        };
        this.menuService = this.props.service;
    }

    navigateToForm = () => {
        this.setState({
            addedForm: true
        })
    }

    handleCancel = () => {
        this.setState({
            addedForm: false,
        })
    }

    render() {
        return (
            <>
                {this.state.addedForm ? <MenuForm service={this.menuService} onCancelForm={this.handleCancel}/> :
                    <MenuList service={this.menuService} onNavigateToForm={this.navigateToForm}/>}
            </>
        );
    }
}

export default MenuView;
