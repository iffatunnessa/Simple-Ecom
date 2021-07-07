import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot} from 'recoil';
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from './Component/Nav/Navbar';
import AddProduct from "./Component/Admin/AddProducts.js/AddProduct";
import AddAdmin from "./Component/Admin/AddAdmin/AddAdmin";
import Item from "./Component/Items/Item";
import UserCart from "./Component/User/UserCart";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                        <PrivateRoute path='/addAdmin'>
                            <AddAdmin />
                        </PrivateRoute>
                        <PrivateRoute path='/addProduct'>
                            <AddProduct />
                        </PrivateRoute>
                        <PrivateRoute path='/cart'>
                            <UserCart />
                        </PrivateRoute>
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
        </UserContext.Provider>
    );
}

export default App;
