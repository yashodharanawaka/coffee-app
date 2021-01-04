import React, { Component } from 'react'
import AllOrders from "../components/AllOrders";

export class OrdersPage extends Component {
    render() {
        return (
            <div className="container">
                <AllOrders />
            </div>
        )
    }
}

export default OrdersPage
