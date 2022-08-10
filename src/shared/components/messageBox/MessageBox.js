import {Toast} from "react-bootstrap";

const MessageBox = ({isShowing, handleToggleShow, type, message}) => {
    return (
        <Toast show={isShowing} onClose={handleToggleShow} animation={true}>
            <Toast.Header>
                <strong className="me-auto">{type}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}
export default MessageBox;