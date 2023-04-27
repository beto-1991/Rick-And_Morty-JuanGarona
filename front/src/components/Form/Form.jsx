import styles from "./Form.module.css";
import React from "react";
import { validate } from "./validation";

const logo = require("./logo.png");

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.login(userData);
  }

  return (
    <div>
      <form className={styles.formDiv} onSubmit={handleSubmit}>
        <img className={styles.logoImg} src={logo} alt="" />
        <label htmlFor="username" className={styles.formName}>
          Username:
        </label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
          placeholder="Introduce tu email"
          className={`${errors.username && styles.warning} ${styles.Inputs}`}
        />
        {errors.username && <p className={styles.danger}>{errors.username}</p>}

        <label htmlFor="password" className={styles.formName}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userData.password}
          className={`${errors.password && styles.warning} ${styles.Inputs}`}
          placeholder="Introduce tu contrasena"
        />
        {errors.password && <p className={styles.danger}>{errors.password}</p>}
        <button className={styles.formButton}>Login</button>
      </form>
    </div>
  );
}
