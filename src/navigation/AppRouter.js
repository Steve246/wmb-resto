import {Component} from "react";
import {DASHBOARD_PAGE, LOGOUT, MENU_PAGE, TABLE_PAGE} from "../shared/constants";
import HomeView from "../features/home/views/HomeView";
import LoginView from "../features/login/views/LoginView";

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
            logged: false
        }
        this.pages = props.presentationManager;

        this.onNavigate = this.onNavigate.bind(this);
        this.onLoggedIn = this.onLoggedIn.bind(this);
    }

    onNavigate(newPage) {
        switch (newPage) {
            case DASHBOARD_PAGE :
                this.setState({
                    currentPage: this.pages.dashboardPage
                })
                break;
            case MENU_PAGE:
                this.setState({
                    currentPage: this.pages.menuPage
                })
                break;
            case TABLE_PAGE:
                this.setState({
                    currentPage: this.pages.tablePage
                })
                break;
            case LOGOUT:
                this.onLoggedIn(false);
                break;
            default:
                this.setState({
                    currentPage: null
                })
        }
    }

    onLoggedIn(isLoggedIn) {
        if (isLoggedIn) {
            this.setState({
                logged: true
            })
        } else {
            this.setState({
                logged: false
            })
        }
    }

    render() {
        const {currentPage} = this.state
        return (
            <div>
                {this.state.logged ?
                    <HomeView handleNavigate={this.onNavigate} currentPage={currentPage ? currentPage : <></>}/> :
                    <LoginView service={this.pages.serviceManager.loginService} handleLoggedIn={this.onLoggedIn}/>}
            </div>

        )
    }
}

export default AppRouter;
