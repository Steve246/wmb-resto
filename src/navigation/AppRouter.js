import { Component, useState } from "react";
import {
  DASHBOARD_PAGE,
  LOGOUT,
  MENU_PAGE,
  TABLE_PAGE,
} from "../shared/constants";
import HomeView from "../features/home/views/HomeView";
import LoginView from "../features/login/views/LoginView";

const AppRouter = (props) => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         currentPage: null,
  //         logged: false
  //     }
  //     this.pages = props.presentationManager;

  //     this.onNavigate = this.onNavigate.bind(this);
  //     this.onLoggedIn = this.onLoggedIn.bind(this);
  // }

  const pages = props.presentationManager;

  const [currentPage, setCurrentPage] = useState(null);
  const [logged, setLogged] = useState(false);

  const onNavigate = (newPage) => {
    switch (newPage) {
      case DASHBOARD_PAGE:
        setCurrentPage(pages.dashboardPage);
        // this.setState({
        //   currentPage: this.pages.dashboardPage,
        // });
        break;
      case MENU_PAGE:
        setCurrentPage(pages.menuPage);
        // this.setState({
        //   currentPage: this.pages.menuPage,
        // });
        break;
      case TABLE_PAGE:
        setCurrentPage(pages.tablePage);
        // this.setState({
        //   currentPage: this.pages.tablePage,
        // });
        break;
      case LOGOUT:
        onLoggedIn(false);
        // this.onLoggedIn(false);
        break;
      default:
        setCurrentPage(null);
      // this.setState({
      //   currentPage: null,
      // });
    }
  };

  const onLoggedIn = (isLoggedIn) => {
    if (isLoggedIn) {
      setLogged(true);

      //   this.setState({
      //     logged: true,
      //   });
    } else {
      setLogged(false);
      //   this.setState({
      //     logged: false,
      //   });
    }
  };

  return (
    <div>
      {setLogged ? (
        <HomeView
          handleNavigate={onNavigate}
          currentPage={setCurrentPage ? setCurrentPage : <></>}
        />
      ) : (
        <LoginView
          service={pages.serviceManager.loginService}
          handleLoggedIn={onLoggedIn}
        />
      )}
    </div>
  );

  // render() {
  //     const {currentPage} = this.state
  //     return (
  //         <div>
  //             {this.state.logged ?
  //                 <HomeView handleNavigate={this.onNavigate} currentPage={currentPage ? currentPage : <></>}/> :
  //                 <LoginView service={this.pages.serviceManager.loginService} handleLoggedIn={this.onLoggedIn}/>}
  //         </div>

  //     )
  // }
};

export default AppRouter;
