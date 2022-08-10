import {Component} from "react";
import TableForm from "../components/TableForm";
import TableList from "../components/TableList";

class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedForm: false
        };
        this.tableService = this.props.service;
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
                {this.state.addedForm ? <TableForm service={this.tableService} onCancelForm={this.handleCancel}/> :
                    <TableList service={this.tableService} onNavigateToForm={this.navigateToForm}/>}
            </>
        );
    }
}

export default TableView;
