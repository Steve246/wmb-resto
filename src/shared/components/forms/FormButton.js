import {Button} from "react-bootstrap";

export function FormButton(props) {
    const {isDisabled, type, label} = props;

    return (
        <Button className={"w-25 m-1"} type={type} variant="primary"
                disabled={isDisabled}>
            {label}
        </Button>
    )
}
