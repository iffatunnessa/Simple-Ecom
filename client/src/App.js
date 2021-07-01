import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from './Component/Nav/Navbar';
import AddProduct from "./Component/Admin/AddProducts.js/AddProduct";

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/addProduct'>
                        <AddProduct />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
