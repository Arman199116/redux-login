import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./App.css";
import { selectCheckObj } from "./redux/store";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/SignUp";

function App() {
    const { isExists, signUp } = useSelector(selectCheckObj, shallowEqual);
    return <>{signUp ? <SignUp /> : isExists ? <Dashboard /> : <Login />}</>;
}

export default App;
