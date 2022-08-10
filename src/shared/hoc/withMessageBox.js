import {Component} from "react";
import MessageBox from "../components/messageBox/MessageBox";

export function withMessageBox(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isShowing: false,
                type: '',
                message: ''
            }
        }

        componentWillUnmount() {
            clearTimeout(this.counter);
        }

        onShowMessageBox = (type, message, isShowing = true) => {
            this.counter = setTimeout(() => {
                if (this.state.isShowing) {
                    this.onToggleShow();
                }
            }, 5000);
            this.setState({
                isShowing: isShowing,
                type: type,
                message: message
            })
        }
        onToggleShow = () => {
            this.setState({
                isShowing: !this.state.isShowing
            })
        }

        render() {
            return (
                <>
                    <MessageBox type={this.state.type} message={this.state.message} isShowing={this.state.isShowing}
                                handleToggleShow={this.onToggleShow}/>
                    <WrappedComponent handleShowMessage={this.onShowMessageBox} {...this.props}/>
                </>
            )
        }
    }
}