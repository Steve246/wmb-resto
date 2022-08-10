import {Component} from "react";
import LoadingBackDrop from "../components/loadingBackDrop/LoadingBackDrop";
import MessageBox from "../components/messageBox/MessageBox";
import '../components/messageBox/messageBox.css';

export function withUIState(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: false,
                messageType: '',
                message: ''
            }
        }

        componentWillUnmount() {
            clearTimeout(this.counter);
        }

        onShowLoading = (isShowing) => {
            this.setState({
                isLoading: isShowing
            })
        }
        onShowMessage = (type, message) => {
            this.counter = setTimeout(() => {
                if (this.state.message !== '') {
                    this.onToggleShow();
                }
            }, 5000);
            this.setState({
                isLoading: false,
                messageType: type,
                message: message
            })
        }

        onFetch = async (fn) => {
            this.onShowLoading(true);
            try {
                const result = await fn();
                this.onShowLoading(false)
                return result;
            } catch (e) {
                this.onShowMessage('error', e)
            }
        }
        onToggleShow = () => {
            this.setState({
                message: ''
            })
        }

        render() {
            return (
                <>
                    {this.state.isLoading && <LoadingBackDrop title={'Please Wait'}/>}
                    <WrappedComponent handleFetch={this.onFetch}  {...this.props}/>
                    {this.state.message !== '' ? <div className='messagebox-container'>
                        <MessageBox type={this.state.messageType} message={this.state.message}
                                    isShowing={this.state.message !== '' ? true : false}
                                    handleToggleShow={this.onToggleShow}/>
                    </div> : <></>}
                </>
            )
        }
    }
}