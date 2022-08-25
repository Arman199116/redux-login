import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectCheckObj } from "./redux/store";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/SignUp";

function App() {
    const { isExists, signUp } = useSelector(selectCheckObj);

    return <>{signUp ? <SignUp /> : isExists ? <Dashboard /> : <Login />}</>;
}

export default App;
