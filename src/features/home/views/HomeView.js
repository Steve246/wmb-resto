import {Component} from "react";
import {HomeContainer} from "../../../shared/components/containers/HomeContainer";
import {NavigationHeader} from "../../../shared/components/sections/NavigationHeader";

class HomeView extends Component {
    render() {
        return (
            <HomeContainer>
                <NavigationHeader handleNavigation={this.props.handleNavigate}/>
                {this.props.currentPage}
            </HomeContainer>
        );
    }
}

export default HomeView;
