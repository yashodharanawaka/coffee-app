import React from 'react'
import { withRouter } from "react-router-dom";

class OrderForm extends React.Component {

    state = {
        coffeeType: "Black",
        amount: 1,
        submitting: false,
        hasErrors: false

    };

    handleInputChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    };

    handleNumberInputChange = (e) => {

        this.setState({ [e.target.name]: parseInt(e.target.value) })
    };



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddOrder(this.state);
        alert("Your order is successfully placed!")
        this.handleReset();
        this.props.history.push('/allOrders');

    };

    handleReset = () => {

        this.setState({
            ccoffeeType: "Black",
            amount: 1,
        });
    };

    render() {
        return (
            <div className="container">
                <h2>Select your coffee from here...</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Select your coffee</label>
                        <select
                            name="coffeeType"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.coffeeType}
                        >
                            <option value="Black">Black</option>
                            <option value="Latte">Latte</option>
                            <option value="Cappuccino">Cappuccino</option>
                            <option value="Americano">Americano</option>
                            <option value="Espresso">Espresso</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >How many?</label>
                        <input
                            min={1}
                            max={5}
                            name="amount"
                            type="number"
                            className="form-control"
                            onChange={this.handleNumberInputChange}
                            value={this.state.amount}
                        />
                    </div>
                    <div className="text-left">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                    <div className="text-right mb-3">
                        <button type="button" className="btn btn-warning" onClick={this.handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(OrderForm); 