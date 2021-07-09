import React, { useContext } from 'react';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import LoginWithOther from './LoginWithOther';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import LoginForm from './LoginForm';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const CreateAccount = () => {
    const [createdNew, setNewCreated] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [currentPassword, setPasswordCheck] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        password: '',
        photoURL: ''
    })
    const onSubmit = (user) => {
        console.log(user);
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    setUser(newUserInfo);
                    setNewCreated(createdNew);
                    setSuccessMessage("Account has been made, please try to login");
                    updateUserInfo(res.displayName);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    console.log(errorMessage, errorCode);
                });
        }
    }
    const handleBlur = (e) => {
        let isFieldValid = false;
        console.log(isFieldValid);
        if (e.target.name === 'displayName') {
            if (e.target.value === '') {
                isFieldValid = false;
            }
            else { isFieldValid = true; }
            console.log("display", isFieldValid);
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length > 6;
            setPasswordCheck(e.target.value);
            console.log(currentPassword);
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value === currentPassword) {
                isFieldValid = true;
                console.log("check", currentPassword);
            }
            else if (e.target.value === '') {
                isFieldValid = false;
                console.log("wrong:", currentPassword);
            }
            else {
                isFieldValid = false;
            }
            console.log("con:", isFieldValid);
        }
        if (isFieldValid === true) {
            console.log("last", isFieldValid);
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const updateUserInfo = name => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log("Update successful");
        }).catch(function (error) {
            console.log("An error happened");
        });
    }
    return (
        <div className="container">
            <div id='alert'>  {errorMessage && (
                <p className="text-red-500"> {errorMessage} </p>
            )}
                {successMessage && (
                    <p className="text-green-500"> {successMessage} </p>
                )}
            </div>
            { !createdNew &&
                <div>
                    <h2 className="text-lg font-bold">Create an account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-5" for="name">
                            Name
                        </label>
                        <input
                            onBlur={handleBlur}
                            className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            placeholder="Enter Your Name"
                            id="name"
                            type="text"
                            name="displayName"
                            required
                            {...register("name")}
                        />
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-5" for="email">
                            Email
                        </label>
                        <input
                            onBlur={handleBlur}
                            className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            id="email"
                            type="email"
                            name='email'
                            required
                            placeholder="example@example.com"
                            {...register("email")}
                        />
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-5 " for="password">
                            Password
                        </label>
                        <input
                            onBlur={handleBlur}
                            className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            id="password"
                            type="password"
                            name="password"
                            required
                            placeholder="More than 6 letters/digits"
                            {...register("password")}
                        />
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-5 " for="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            onBlur={handleBlur}
                            className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            id="standard-confirm-password-input"
                            type="password"
                            name="confirmPassword"
                            placeholder="Match your previously given password"
                            required
                        />
                        <button className="bg-indigo-500 py-2 px-3 my-5 text-white hover:bg-white hover:text-indigo-500 border rounded" type='submit'>
                            Create an account
                        </button>
                    </form>
                    <p className="text-center">Already have an account? <Link to='/login' className= 'capitalize text-red-600'
                    >Login</Link></p>
                </div>}
            <LoginWithOther user={user} />
        </div>
    );
};

export default CreateAccount;