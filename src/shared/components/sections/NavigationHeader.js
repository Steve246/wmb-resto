import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {APP_TITLE, DASHBOARD_PAGE, LOGOUT, MENU_PAGE, TABLE_PAGE} from "../../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons/faUtensils";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";

export function NavigationHeader(props) {
    const {handleNavigation} = props;
    return (
        <Navbar expand="lg" style={{backgroundColor: '#c8c8c8'}}>
            <Container>
                <Navbar.Brand href="#home"
                              onClick={() => handleNavigation(DASHBOARD_PAGE)}>
                    <FontAwesomeIcon icon={faUtensils} className="text-secondary"></FontAwesomeIcon>
                    <span className={"p-2"}>{APP_TITLE}</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#menu" onClick={() => handleNavigation(MENU_PAGE)}>Menu</Nav.Link>
                        <Nav.Link href="#table"
                                  onClick={() => handleNavigation(TABLE_PAGE)}>Meja</Nav.Link>
                    </Nav>
                    <Button variant="light" onClick={() => handleNavigation(LOGOUT)}>
                        <FontAwesomeIcon icon={faLock}/>
                        <span className="ps-2">Keluar</span>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
