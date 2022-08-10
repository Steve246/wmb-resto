import {Component} from "react";
import {Container} from "react-bootstrap";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container className="p-3">
                <h3>Dashboard</h3>
            </Container>
        )
    }
}

export default Dashboard;
