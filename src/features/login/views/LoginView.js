import {Component} from "react";
import "./Login.css";
import {EMAIL_REGEX} from "../../../shared/constants";
import {userCredential} from "../../../model/userCredential";
import {Button, Card, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {withLoading} from "../../../shared/hoc/withLoading";
import {withMessageBox} from "../../../shared/hoc/withMessageBox";
import {compose} from "ramda";
import {withUIState} from "../../../shared/hoc/withUIState";

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValid: false,
            userNameTouched: false,
            passwordTouched: false,
            error: {email: '', password: ''}
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
            this.setState({
                username: email,
                error: {...this.state.error, email: ''},
                userNameTouched: true
            }, this.validate);
        } else {
            this.setState({
                username: email,
                error: {...this.state.error, email: 'Invalid email format'}
            }, this.validate);
        }
    };

    handlePasswordChange(event) {
        const userPassword = event.target.value;
        if (userPassword.length > 5) {
            this.setState({
                password: userPassword,
                error: {...this.state.error, password: ''},
                passwordTouched: true
            }, this.validate);
        } else {
            this.setState({
                password: userPassword,
                error: {...this.state.error, password: '6 min length'}
            }, this.validate);
        }
    };

    async handleSubmit(event) {
        event.preventDefault();
        const result = await this.props.handleFetch(async () => {
            const {username, password} = this.state;
            const response = await this.service.authenticate(userCredential(username, password));
            return response
        });
        if (result) {
            this.props.handleLoggedIn(true)
        }
        this.clearForm();
    };

    clearForm() {
        this.setState({
            username: "",
            password: "",
            isValid: false,
            error: {email: '', password: ''}
        });
    }

    validate() {
        const {error, userNameTouched, passwordTouched} = this.state;
        if (error.email.length > 0 || error.password.length > 0 ||
            !userNameTouched || !passwordTouched) {
            this.setState({
                isValid: false
            })
        } else {
            this.setState({
                isValid: true
            })
        }
    }

    render() {
        const {username, password, error, isValid} = this.state;
        return (
            <div className="login main d-flex flex-column justify-content-center">
                <Container>
                    <Row>
                        <Col sm={2} lg={8}></Col>
                        <Col sm={1} lg={4}>
                            <Card style={{width: '32rem', backgroundColor: 'whitesmoke', borderRadius: '15px'}}
                                  className="p-3">
                                <Card.Body>
                                    <Card.Title><h2>Sistem Informasi WMB</h2></Card.Title>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group className="form-floating mb-3">
                                            <FloatingLabel label='Email'>
                                                <Form.Control size="lg" type="email"
                                                              placeholder="Masukan email"
                                                              value={username}
                                                              onChange={this.handleUsernameChange}/>
                                            </FloatingLabel>
                                            <Form.Text className="text-danger">
                                                {error.email}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="form-floating mb-3">
                                            <FloatingLabel label='Password'>
                                                <Form.Control size="lg" type="password"
                                                              placeholder="Masukan Password"
                                                              value={password}
                                                              onChange={this.handlePasswordChange}/>
                                            </FloatingLabel>
                                            <Form.Text className="text-danger">
                                                {error.password}
                                            </Form.Text>
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button size="lg" variant="primary" type="submit"
                                                    disabled={!isValid}>Masuk</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

// export default compose(withLoading, withMessageBox)(LoginView);
export default withUIState(LoginView)