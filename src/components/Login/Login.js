import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import React from "react";
import "./Login.css";
import { auth, provider, provider2 } from "../Firebase/firebase";
import { useStateValue } from "../Utility/StateProvider";
import { actionTypes } from "../Utility/reducer";
import logo from './logo.svg';

function Login() {
  // eslint-disable-next-line 
  const [state, dispatch] = useStateValue();

  const signIn = (error) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn2 = (error) => {
    auth
      .signInWithPopup(provider2)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src={logo}
          alt="OnTrck-logo"
        />
        <h1>Sign in to OnTrck</h1>
        {/*<p>OnTrck Application</p>*/}
        <div className="login-button google" onClick={signIn}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <div className="login-button github" onClick={signIn2}>
          <GithubOutlined /> Sign in with Github
        </div>
      </div>
    </div>
  );
}

export default Login;
