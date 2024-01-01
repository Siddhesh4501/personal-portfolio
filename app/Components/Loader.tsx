import { Puff } from "react-loader-spinner";
import './loader.css';
const LoaderComp = () => {
    return (
        <div className="loader-container">
            <Puff
                color="#66FFCC"
                wrapperClass="loader"
            />
        </div>
    );
};  
export default LoaderComp;