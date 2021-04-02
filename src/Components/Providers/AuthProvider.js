import React from "react";

import AuthContext from "../contexts/AuthContext";

function AuthProvider() {
  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
