import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/inputs/Input";
import Submit from "../components/inputs/Submit";
import { handleSignIn, handleSignUp } from "./handleSignUp";
import { useDispatch } from "react-redux";


function MemoSignUp() {
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e) => handleSignUp(e, dispatch)}>
            <Input name="Name" type="text" />
            <Input name="Email" type="email" />
            <Input name="Password" type="password" />
            <Input name="PassRepeat" type="password" />
            <div
                className="input-container"
                onClick={(e) => handleSignIn(e, dispatch)}
            >
                <Link to="/">Log In</Link>
            </div>
            <Submit value="Submit" />
        </form>
    );
}

export default MemoSignUp;
