import React from "react";
import { Link } from "react-router-dom";
import Input from "../inputs/Input";
import Submit from "../inputs/Submit";
import { handleSignUp } from "../../functions/handleSignUp";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "./../../redux/store";


function MemoSignUp() {
    const dispatch = useDispatch();

    return (     
        <form onSubmit={ (e) => { handleSignUp(e, dispatch)} }>
            <Input name="Name" type="text" />
            <Input name="Email" type="email" />
            <Input name="Password" type="password" />
            <Input name="PassRepeat" type="password" />
            <div
                className="input-container"
                onClick={(e) => {
                    dispatch(signUp({
                        type : 'SIGNUP',
                        signUp : false
                    }));
                }}
            >
                <p><small>Already have an account?</small>
                <Link to="/">Log In</Link></p>
            </div>      
               
            <Submit value="Submit1" />
           
        </form>
    );
}

export default MemoSignUp;
