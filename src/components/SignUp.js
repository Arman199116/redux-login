import React, {useMemo} from "react";
import { useSelector } from "react-redux";
import { selectCheckObj } from "./../redux/store";
import SignUpForm from '../functions/SignUpForm'

import Message from './Message';

function SignUp() {
    const memoForm = useMemo(() => <SignUpForm />,[]);
    const {signUpIsIncorrect, succesRegister } = useSelector(selectCheckObj);

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <Message show={signUpIsIncorrect} message='Please create a correct data' /> 
                    <Message show={succesRegister} message='You just signed up' />
                    {memoForm}
                </div>
            </div>
        </div>
    );
}
export default SignUp;
