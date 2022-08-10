import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";

export function InfoFooter() {
    return (
        <div className="d-flex justify-content-center p-2">
            <small><FontAwesomeIcon icon={faCopyright}/> 2022 - EnigmaCamp</small>
        </div>
    )
}
