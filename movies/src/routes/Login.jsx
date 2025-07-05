import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();
    dispatch(setUser({name, password}))
    navigate("/");
    setName("");
    setPassword("");
  };
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleFormSubmission}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
