import {Button} from "react-bootstrap";

export function FormCancelButton(props) {
    const {onClick} = props;
    return (
        <Button className={"w-25 m-1"} variant="warning" type="button"
                onClick={onClick}>Batal</Button>
    )
}
