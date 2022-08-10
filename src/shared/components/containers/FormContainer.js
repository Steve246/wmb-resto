import {Card, Container, Form} from "react-bootstrap";
import {FormCancelButton} from "../forms/FormCancelButton";
import {FormButton} from "../forms/FormButton";

export function FormContainer(props) {
    const {onCancel, onSubmit, title, children, isValid} = props
    return (
        <Container className="p-2">
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Form onSubmit={onSubmit}>
                        {children}
                        <div className={"w-50"}>
                            <FormCancelButton onClick={onCancel}/>
                            <FormButton label='Simpan' type='submit' isDisabled={!isValid}/>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
