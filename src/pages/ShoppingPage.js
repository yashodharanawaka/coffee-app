import { connect } from 'react-redux';
import { placeOrder } from "../redux/actions/";
import OrderForm from "../components/OrderForm";

const mapDispatchToProps = dispatch => {
    return {
        onAddOrder: request => {
            dispatch(placeOrder(request));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(OrderForm);
