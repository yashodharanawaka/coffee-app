import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import ShoppingPage from "./pages/ShoppingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
              </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/allOrders">
                    Placed Orders
              </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Want a Coffee?
              </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/allOrders" component={OrdersPage} />
            <Route exact path="/shop" component={ShoppingPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </header>
      <footer>
        <center>Copyright &copy; {new Date().getFullYear()} Yashodha Ranawaka </center>
      </footer>
    </div>
  );
}

export default App;
