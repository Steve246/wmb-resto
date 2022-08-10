import {Component} from "react";
import LoadingBackDrop from "../components/loadingBackDrop/LoadingBackDrop";

export function withLoading(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: false
            }
        }

        onShowLoading = (isShowing) => {
            this.setState({
                isLoading: isShowing
            })
        }

        render() {
            return (
                <>
                    {this.state.isLoading && <LoadingBackDrop title={'Please Wait'}/>}
                    <WrappedComponent handleShowLoading={this.onShowLoading} {...this.props}/>
                </>
            )
        }
    }
}