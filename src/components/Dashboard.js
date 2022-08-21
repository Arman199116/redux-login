import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, clearStateUser } from "../redux/store";
import Submit from "./inputs/Submit";
import {addDataToLocalstorage} from './../functions/addDataToLocalstorage'

function Dashboard() {

    const user = useSelector(selectUser);

    addDataToLocalstorage(user);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearStateUser({type : "DELETE"}));
    }

    return (
        <div className="app">
            <div className="login-form">
                <h1>Welcome <span>{ user.name } </span></h1>
                <h1> email <span>{ user.email } </span></h1>
                <Submit value={'Logout'} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default Dashboard;
