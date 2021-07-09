import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot} from 'recoil';
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Home from "./Component/Home/Home";
import Navbar from './Component/Nav/Navbar';
import AddProduct from "./Component/Admin/AddProducts.js/AddProduct";
import AddAdmin from "./Component/Admin/AddAdmin/AddAdmin";
import Item from "./Component/Items/Item";
import UserCart from "./Component/User/UserCart";
import SaveCart from "./Component/Nav/SaveCart";
import CreateAccount from "./Component/Login/CreateAccount";
import LoginForm from "./Component/Login/LoginForm";
import Orders from "./Component/User/Orders";

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
                            <LoginForm />
                        </Route>
                        <Route path='/createNewAccount'>
                            <CreateAccount />
                        </Route>
                        <PrivateRoute path='/addAdmin'>
                            <AddAdmin />
                        </PrivateRoute>
                        <PrivateRoute path='/orders'>
                            <Orders />
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
                    <SaveCart />
                </div>
            </Router>
        </RecoilRoot>
        </UserContext.Provider>
    );
}

export default App;
