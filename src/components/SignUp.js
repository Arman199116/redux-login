import React, {useMemo} from "react";
import { useSelector } from "react-redux";
import { selectSignUpIsIncorrect, selectSignUpIscorrect } from "./../redux/store";
import SignUpForm from '../functions/SignUpForm'

import Message from './Message';

function SignUp() {
    const memoForm = useMemo(() => <SignUpForm />,[]);
    const iscorrect = useSelector(selectSignUpIsIncorrect);
    const isSucces = useSelector(selectSignUpIscorrect);
    
    //let succesMessage = useMemo(() => {} ,[]);
    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <Message show={iscorrect} message='Please create a correct data' /> 
                    <Message show={isSucces} message='You just signed up' />
                    {memoForm}
                </div>
            </div>
        </div>
    );
}
export default SignUp;
