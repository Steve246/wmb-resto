import { Component } from "react";
import MenuForm from "../components/MenuForm";
import MenuList from "../components/MenuList";

import { useDeps } from "../../../shared/DepsContext";

const MenuView = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       addedForm: false,
  //     };
  //     this.menuService = this.props.service;
  //   }

  const { menuService } = useDeps();

  const [addedForm, setAddedForm] = useState(false);

  const navigateToForm = () => {
    // this.setState({
    //   addedForm: true,
    // });
    setAddedForm(true);
  };

  const handleCancel = () => {
    // this.setState({
    //   addedForm: false,
    // });
    setAddedForm(false);
  };

  return (
    <>
      {setAddedForm ? (
        <MenuForm service={menuService} onCancelForm={handleCancel} />
      ) : (
        <MenuList service={menuService} onNavigateToForm={navigateToForm} />
      )}
    </>
  );
};

export default MenuView;
