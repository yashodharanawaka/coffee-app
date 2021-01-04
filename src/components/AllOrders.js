import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Order from "../components/Order";
import { fetchAllTheOrders } from "../redux/actions/index";

const AllOrders = ({ dispatch, orders, loading, hasErrors }) => {

    useEffect(() => {
        dispatch(fetchAllTheOrders());
    }, [dispatch]);

    const renderOrders = () => {
        if (loading) return <p>loading...</p>
        if (hasErrors) return <p>something is wrong!</p>
        return orders.map((order) => <Order key={order.id} order={order} />)

    }
    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Beverage</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {renderOrders()}
                </tbody>
            </table>

        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//       orders: state.orders
//     };
//   };

const mapStateToProps = (state) => ({
    loading: state.orders.loading,
    hasErrors: state.orders.hasErrors,
    orders: state.orders.orders
});

export default connect(mapStateToProps)(AllOrders);
