import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const LoginWithOther = () => {
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
            console.log(result, user);
            const { displayName, email, photoURL } = user;
            const signedInUser = { displayName, email, photoURL };
            setLoggedInUser(signedInUser);
            sessionStorage.setItem('token', user);
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
            <hr/>
            <div className="text-center">
                <button onClick={handleGoogleSignIn}
                    className="inline-block mt-7 mb-20 px-4 py-2 border border-2 rounded text-white bg-indigo-400 border-indigo hover:border-transparent hover:text-indigo-500 hover:bg-white">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default LoginWithOther;
