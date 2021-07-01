import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => { /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(result, result.user);
        // ...
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

    });
}
const Login = () => {
    return (
        <div>
            <div style={
                {
                    textAlign: 'center',
                    marginTop: "100px"
                }
            }>
                <hr className='solid'/>
                <button onClick={handleGoogleSignIn}
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faGooglePlusG}/>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
