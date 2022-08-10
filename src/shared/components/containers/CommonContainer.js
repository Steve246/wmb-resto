import {Card, Container} from "react-bootstrap";

export function CommonContainer(props) {
    const {title, children} = props
    return (
        <Container className="p-3">
            <Card>
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <h3>{title}</h3>
                            {children[0]}
                        </div>
                    </Card.Title>
                    {children[1]}
                </Card.Body>
            </Card>
        </Container>
    );
}
