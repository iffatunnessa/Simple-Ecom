import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { loginState } from '../Login/LoginState';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const history = useHistory();
        const location = useLocation();
        let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            console.log(result, result.user);
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { displayName, email, photoURL };  
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, credential, email);
        });
    }
    return (
        <div>
            <div style={
                {
                    textAlign: 'center',
                    marginTop: "100px"
                }
            }>
                <button onClick={handleGoogleSignIn}
                    className="inline-block px-4 py-2 border border-2 rounded text-white bg-indigo-400 border-indigo hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faGooglePlusG}/>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
