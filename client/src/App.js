import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from './Component/Nav/Navbar';
import AddProduct from "./Component/Admin/AddProducts.js/AddProduct";
import AddAdmin from "./Component/Admin/AddAdmin/AddAdmin";
import Item from "./Component/Items/Item";
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/home'>
                            <Home />
                        </Route>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/addAdmin'>
                            <AddAdmin />
                        </Route>
                        <Route path='/addProduct'>
                            <AddProduct />
                        </Route>
                        <Route path='/item/:category'>
                            <Item />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </RecoilRoot>
    );
}

export default App;
