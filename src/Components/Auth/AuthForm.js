import React, { useState, useContext } from "react";
import axois from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../API/API";

const AuthForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formToShow, setFormToShow] = useState("log-in");

  // const { handleSuccessfulLogin } = useContext(AuthContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axois({
      method: "post",
      url: `${API_URL}/client${formToShow}`,
      data: {
        username,
        password,
        email,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.message === "User Verified") {
          // handleSuccessfulLogin(res.data.user_id);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleFormToShow = () => {
    if (formToShow === "log-in") {
      setFormToShow("register");
    } else if (formToShow) {
      setFormToShow("login");
    }
  };

  const formQuestionText = () => {
    if (formToShow === "login") {
      return "Need an account? Register";
    } else {
      return "Already have an account? Login";
    }
  };

  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }}>{formToShow}</h1>
      <form onSubmit={handleSubmit}>
        <div className="user_input">
          <input
            type="text"
            name="username"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {formToShow === "register" ? (
          <div className="user_input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : null}
        <div className="user_input">
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ textTransform: "capitalize" }}
        >
          {formToShow}
        </button>
        <div onClick={handleFormToShow}>{formQuestionText()}</div>
      </form>
    </div>
  );
};

export default AuthForm;
