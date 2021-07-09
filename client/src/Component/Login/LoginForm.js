import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginWithOther from './LoginWithOther';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        password: '',
        photoURL: ''
    })
    const onSubmit = (user) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.isSignedIn = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                sessionStorage.setItem('token', user);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setLoginErrorMessage(error.message);
            });
    }
    return (
        <div className="container">
            <div className ='lg:px-44 py-5'>
                <h2 className="text-lg font-bold">Login</h2>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-5" for="email">
                        Email
                    </label>
                    <input
                        className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="example@example.com"
                        {...register("email")}
                    />
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-5 " for="password">
                        Password
                    </label>
                    <input
                        className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        id="login-password-input"
                        type="password"
                        name="password"
                        placeholder="password"
                        {...register("password")}
                    />
                    <button type='submit' className="bg-indigo-500 py-2 px-3 my-5 text-white hover:bg-white hover:text-indigo-500 border rounded" >Log In</button>
                </form>
                {loginErrorMessage && (
                    <p className=""> {loginErrorMessage} </p>
                )}
                <p>Don't have an account? <Link to="/createNewAccount" className="text-red-600 capitalize">Create New Account</Link>
                </p>
                <LoginWithOther />
            </div>
        </div>
    );
};

export default LoginForm;