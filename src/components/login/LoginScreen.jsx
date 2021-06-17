import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Kevin Dorado",
      },
    });
    history.replace("/");
  };

  return (
    <div>
      <h1>i am Login screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
};
