import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [logInUser, setLogInUser] = useContext(UserContext)
    const [user, setUser] = useState({})
    let history = useHistory();
    let location = useLocation();
    var provider = new firebase.auth.GoogleAuthProvider();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var {displayName,email} = result.user;
    const signInUser = {name: displayName, email}
    setLogInUser(signInUser)
    history.replace(from);
    console.log('user: ',user,' token: ',token)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('error: ',errorCode, errorMessage,email,credential)
  });
}
    return (
        <div>
            <button style={{fontSize:'20px'}} className='btn btn-success p-2 my-5' onClick={handleGoogleSignIn}>SignIn With Google</button>        
        </div>
    );
};

export default Login;