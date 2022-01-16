import * as React from "react";

import { parseJwt } from './utils/str_utils'
import { Navigate, useLocation } from 'react-router-dom'


async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    process.env.REACT_APP_BACKEND_URL,
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  mutation Login($email: String = "", $password: String = "") {
    Login(email: $email, password: $password) {
      token
    }
  }
`;

export function executeLogin(email, password) {
  return fetchGraphQL(
    operationsDoc,
    "Login",
    { "email": email, "password": password }
  );
}

const authContext = React.createContext('auth');

export function AuthProvider({ children }) {
  const auth = useAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
export function RequireAuth({ children }) {
  const authed = localStorage.getItem('token')
  const location = useLocation();
  return authed
    ? children
    : <Navigate
      to="/signin"
      replace
      state={{ path: location.pathname }}
    />;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
