import {Form} from "react-bootstrap";

export function FormInput(props) {
    const {id, label, type = 'text', isNumber = false, value, errorMessage, onChange, placeholder} = props;
    const onInputChange = (event) => {
        if (isNumber) {
            const value = event.target.value.replace(/\D/, '');
            onChange(id, Number(value));
        } else {
            onChange(id, event.target.value);
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={value}
                          onChange={e => onInputChange(e)}/>
            <Form.Text className="text-danger">
                {errorMessage}
            </Form.Text>
        </Form.Group>
    )
}
