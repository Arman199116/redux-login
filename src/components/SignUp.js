import React, {useMemo} from "react";
import { useSelector } from "react-redux";
import { selectCheckObj } from "./../redux/store";
import SignUpForm from './forms/SignUpForm'
import ClipLoader from 'react-spinners/ClipLoader';

import Message from './Message';

function SignUp() {
    const memoForm = useMemo(() => <SignUpForm />,[]);
    const {signUpIsIncorrect, succesRegister, isLoading } = useSelector(selectCheckObj);

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign Up</div>
                
                    <div className="form">
                    { isLoading ? (
                        <div className="login-form">
                            <ClipLoader color={'red'} size={120} />
                            <p>Please wait</p>
                        </div>
                    ) : (
                        <>
                            <Message show={signUpIsIncorrect} message='Please create a correct data' /> 
                            <Message show={succesRegister} message='You just signed up' />
                            { memoForm }
                        </>
                    )}
                    </div>

            </div>
        </div>
    );
}
export default SignUp;
