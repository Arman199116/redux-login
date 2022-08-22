import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCheckObj } from "./../redux/store";
import { SignInForm } from "./forms/SignInForm";
import Message from "./../components/Message";
import ClipLoader from 'react-spinners/ClipLoader';

function Login() {
    const {incorrectEmOrPass, isLoading} = useSelector(selectCheckObj);

    let MemoForm = useMemo(() => <SignInForm />, []);
    
    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                { isLoading ? (
                        <div className="login-form">
                            <ClipLoader color={'red'} size={120} />
                            <p>Please wait</p>
                        </div>
                    ) : (
                        <>
                            <Message
                                message="Incorrect Email or Password"
                                show={incorrectEmOrPass}
                            />
                            { MemoForm }
                            {console.log(333333333)}
                        </>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Login;
