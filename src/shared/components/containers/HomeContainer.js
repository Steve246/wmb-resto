import {InfoFooter} from "../sections/InfoFooter";

export function HomeContainer(props) {
    return (
        <div className="vh-100 d-flex flex-column" style={{backgroundColor: '#f5f5f5'}}>
            {props.children[0]}
            <div className="d-flex flex-column justify-content-between h-100">
                <div>{props.children[1]}</div>
                <InfoFooter/>
            </div>
        </div>
    )
}
