import * as React from "react";

import { parseJwt } from './utils/str_utils'
import { Navigate, useLocation } from 'react-router-dom'

function fetchGraphQL(operationsDoc, operationName, variables) {
  return fetch(
    process.env.REACT_APP_BACKEND_URL,
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  ).then((result) => result.json());
}
const operationsDoc = `
  mutation Login($email: String = "", $password: String = "") {
    Login(email: $email, password: $password) {
      token
    }
  }
`;

const signupOperationsDoc = `
  mutation Signup($email: String = "admin@qq.com", $password: String = "qqcom") {
    Signup(email: $email, password: $password) {
      email
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

export function executeSignup(email, password) {
  return fetchGraphQL(
    signupOperationsDoc,
    "Signup",
    {"email": email, "password": password}
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
