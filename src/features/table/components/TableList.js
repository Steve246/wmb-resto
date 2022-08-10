import {Component} from "react";
import {Badge, Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {CommonContainer} from "../../../shared/components/containers/CommonContainer";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }
        this.service = props.service;
    }

    componentDidMount() {
        this.setState({
            tables: this.service.showAll()
        })
    }

    handleDelete(id) {
        const result = window.confirm('Are you sure want to delete ?');
        if (result) {
            this.service.deleteTable(id);
            this.setState({
                tables: this.service.showAll()
            })
        }
    }

    render() {
        return (
            <CommonContainer title='Meja'>
                <>
                    <Button size="sm" style={{textDecoration: "none"}} variant={"link"}
                            onClick={this.props.onNavigateToForm}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className="p-2">Tambah Meja</span>
                    </Button>
                </>
                <>
                    <Table striped>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nomor Meja</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.tables.map((table, index) => {
                                return <tr key={table.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{table.tableNumber}</td>
                                    <td>
                                        <Badge
                                            bg={table.status === "A" ? "primary" : "danger"}>{table.status}</Badge>
                                    </td>
                                    <td style={{textAlign: "center"}}>
                                        <Button size="sm"
                                            variant="danger" onClick={() => this.handleDelete(table.id)}><FontAwesomeIcon
                                            icon={faEraser}/><span className="p-2">Delete</span> </Button>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </>
            </CommonContainer>
        );
    }
}

export default TableList;
