import React from "react";
import { useSelector } from "react-redux";
import './App.css';
import { selectIsExists, selectSignUp } from "./redux/store";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import SignUp from "./components/SignUp";


function App() {

    const isExists = useSelector(selectIsExists);
    const signUp = useSelector(selectSignUp);

    return (
        <>
            {   signUp ?
                    <SignUp />
                : isExists ?
                    <Dashboard />
                : <Login  />
            }
        </>
    );
}

export default  (App);
