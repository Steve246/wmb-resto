import "./loadingBackDrop.css";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const LoadingBackDrop = ({ title }) => {
  return (
    <div className="backdrop-container">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        {title}
      </Button>
    </div>
  );
};
export default LoadingBackDrop;
