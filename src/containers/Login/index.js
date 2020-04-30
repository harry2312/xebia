import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getLoggedIn } from "../../actions";
import { CLEAR_MESSAGE } from "../../actions/actionTypes";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(
    function () {
      let isCancelled = false;
      !isCancelled && userInfo.user.name && setIsLoggedIn(true);
      return () => {
        isCancelled = true;
      };
    },
    [userInfo]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getLoggedIn(dispatch, username, password);
  };

  return !isLoggedIn ? (
    <section className="auth-form">
      {userInfo.message && (
        <h3 data-test="error" onClick={() => dispatch({ type: CLEAR_MESSAGE })}>
          <button onClick={() => dispatch({ type: CLEAR_MESSAGE })}>✖</button>
          {userInfo.message}
        </h3>
      )}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Input
            id="username"
            label="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button design="raised" type="submit" loading={userInfo.loading}>
            Login
          </Button>
        </form>
      </div>
    </section>
  ) : (
    <Redirect to="/" />
  );
}
