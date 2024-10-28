import PropTypes from "prop-types";
import { GoCheckCircleFill } from "react-icons/go";
const Feature = ({feature}) => {
    return (
        <div className="">
            <h3 className=""></h3>
            <p className="flex items-center gap-2"> <GoCheckCircleFill className="text-green-500"></GoCheckCircleFill>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature : PropTypes.string
}
export default Feature;