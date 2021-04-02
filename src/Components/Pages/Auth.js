import React from "react";
import AuthForm from "../Auth/AuthForm";

const Auth = () => {
  // const { loggedInStatus } = useContext(AuthContext);
  // let history = useHistory();

  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        {/* {loggedInStatus === "LOGGED_IN" ? history.push("/") :  */}
        <AuthForm />
      </div>
    </div>
  );
};
export default Auth;
