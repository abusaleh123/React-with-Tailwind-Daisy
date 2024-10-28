import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded-lg p-4 flex flex-col text-white py-6 ">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold"> {price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-5xl  text-center">{name}</h4>
            <div className="mt-4 pl-6 flex-grow">
            {
                features.map( (feature, idx) => <Feature key={idx} feature = {feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-green-600 w-full py-4 px-6 font-bold rounded-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};
PriceOption.PropTypes = {
    option: PropTypes.object
}
export default PriceOption;