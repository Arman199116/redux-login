import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCheckObj } from "./../redux/store";
import { MemoForm } from "./../functions/memoForm";
import Message from "./../components/Message";

function Login() {
    const {incorrectEmOrPass} = useSelector(selectCheckObj);
    let MmemoForm = useMemo(() => <MemoForm />, []);
    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <Message
                        message="Incorrect Email or Password"
                        show={incorrectEmOrPass}
                    />
                    { MmemoForm  }
                </div>
            </div>
        </div>
    );
}

export default Login;
