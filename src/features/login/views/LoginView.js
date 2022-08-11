import { Component } from "react";
import "./Login.css";
import { EMAIL_REGEX } from "../../../shared/constants";
import { userCredential } from "../../../model/userCredential";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { withLoading } from "../../../shared/hoc/withLoading";
import { withMessageBox } from "../../../shared/hoc/withMessageBox";
import { compose } from "ramda";
import { withUIState } from "../../../shared/hoc/withUIState";
import { useAuth } from "../../../shared/hook/useAuth";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isValid: false,
      userNameTouched: false,
      passwordTouched: false,
      error: { email: "", password: "" },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.service = props.service;
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleUsernameChange(event) {
    const email = event.target.value;
    if (email.match(EMAIL_REGEX)) {
      this.setState(
        {
          username: email,
          error: { ...this.state.error, email: "" },
          userNameTouched: true,
        },
        this.validate
      );
    } else {
      this.setState(
        {
          username: email,
          error: { ...this.state.error, email: "Invalid email format" },
        },
        this.validate
      );
    }
  }

  handlePasswordChange(event) {
    const userPassword = event.target.value;
    if (userPassword.length > 5) {
      this.setState(
        {
          password: userPassword,
          error: { ...this.state.error, password: "" },
          passwordTouched: true,
        },
        this.validate
      );
    } else {
      this.setState(
        {
          password: userPassword,
          error: { ...this.state.error, password: "6 min length" },
        },
        this.validate
      );
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { login } = useAuth();
    const result = await this.props.handleFetch(async () => {
      const { username, password } = this.state;
      const response = await this.service.authenticate(
        userCredential(username, password)
      );
      return response;
    });
    if (result) {
      login("admin");
      // this.props.handleLoggedIn(true);
    }
    this.clearForm();
  }

  clearForm() {
    this.setState({
      username: "",
      password: "",
      isValid: false,
      error: { email: "", password: "" },
    });
  }

  validate() {
    const { error, userNameTouched, passwordTouched } = this.state;
    if (
      error.email.length > 0 ||
      error.password.length > 0 ||
      !userNameTouched ||
      !passwordTouched
    ) {
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({
        isValid: true,
      });
    }
  }

  render() {
    const { username, password, error, isValid } = this.state;
    return (
      <div className=" body-login">
        <div className="form-container">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <input
              id="first-name"
              className="form-field"
              type="text"
              placeholder="User Name"
              name="firstName"
              value={username}
              onChange={this.handleUsernameChange}
            />

            <Form.Text className="text-danger">{error.email}</Form.Text>

            <input
              id="email"
              className="form-field"
              type="text"
              placeholder="Pasword"
              name="password"
              value={password}
              onChange={this.handlePasswordChange}
            />

            <Form.Text className="text-danger">{error.password}</Form.Text>

            <button className="form-field" type="submit" disabled={!isValid}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// export default compose(withLoading, withMessageBox)(LoginView);
export default withUIState(LoginView);
