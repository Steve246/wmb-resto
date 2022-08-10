import {Form} from "react-bootstrap";

export function FormRadio(props) {
    const {id, title, labels, onChange, value} = props
    return (
        <Form.Group className="mb-3">
            <Form.Label>{title}</Form.Label>
            {
                Object.keys(labels).map((key) => (
                    <Form.Check
                        key={key}
                        type='radio'
                        name={id}
                        label={labels[key]}
                        value={key}
                        checked={key === value}
                        onChange={e => onChange(id, e.target.value)}
                    />
                ))
            }
        </Form.Group>
    )
}
