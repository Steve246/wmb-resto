import {Component} from "react";
import {Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {CommonContainer} from "../../../shared/components/containers/CommonContainer";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";
import {withLoading} from "../../../shared/hoc/withLoading";
import {withMessageBox} from "../../../shared/hoc/withMessageBox";
import {faRefresh} from "@fortawesome/free-solid-svg-icons/faRefresh";
import {compose} from "ramda";

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
        this.service = this.props.service;
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.getAllMenu();
    }

    async getAllMenu() {
        this.props.handleShowLoading(true);
        try {
            const menus = await this.service.showAll()
            this.setState({
                menus: menus
            })
            this.props.handleShowLoading(false);
        } catch (e) {
            this.props.handleShowLoading(false);
            this.props.handleShowMessage('error', 'Maaf terjadi kesalahan sistem');
        }
    }

    async handleDelete(id) {
        const result = window.confirm('Are you sure want to delete ?');
        if (result) {
            this.props.handleShowLoading(true);
            try {
                await this.service.deleteMenu(id);
                await this.getAllMenu();
                this.props.handleShowLoading(false);
            } catch (e) {
                this.props.handleShowLoading(false);
                this.props.handleShowMessage('error', 'Maaf terjadi kesalahan sistem');
            }
        }
    }

    render() {
        return (
            <CommonContainer title='Menu'>
                <div className="buttongroup-container">
                    <Button size="sm" style={{textDecoration: "none"}} variant={"link"}
                            onClick={() => this.getAllMenu()}>
                        <FontAwesomeIcon icon={faRefresh}/>
                        <span className="p-2">Refresh</span>
                    </Button>
                    <Button size="sm" style={{textDecoration: "none"}} variant={"link"}
                            onClick={this.props.onNavigateToForm}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className="p-2">Tambah Menu</span>
                    </Button>
                </div>
                <>
                    <Table striped>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Harga</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.menus.map((menu, index) => {
                                return <tr key={menu.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{menu.name}</td>
                                    <td>{menu.price.toLocaleString()}</td>
                                    <td style={{textAlign: "center"}}>
                                        <Button size="sm"
                                                variant="danger"
                                                onClick={() => this.handleDelete(menu.id)}><FontAwesomeIcon
                                            icon={faEraser}/><span className="p-2">Delete</span> </Button>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </>
            </CommonContainer>
        )
    }
}

export default compose(withLoading, withMessageBox)(MenuList);
