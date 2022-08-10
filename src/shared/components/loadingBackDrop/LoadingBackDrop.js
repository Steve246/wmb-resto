import Spinner from "../spinner/Spinner";
import './loadingBackDrop.css';

const LoadingBackDrop = ({title}) => {
    return (
        <div className='backdrop-container'>
            <Spinner/>
            {title}
        </div>
    )
}
export default LoadingBackDrop;
