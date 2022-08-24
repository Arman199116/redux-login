import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCheckObj, signUp, showLoading  } from "./../redux/store";
import ClipLoader from "react-spinners/ClipLoader";
import Submit from "../components/inputs/Submit";
import { Link } from "react-router-dom";
import Message from './Message';
import { getDatalocal } from "./../functions/getData";
import {addDataToLocalstorage} from './../functions/addDataToLocalstorage'

function SignUp() {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(selectCheckObj);
    const initialValues = { name: "", email: "", password: "", passrepeat: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value})
    }
    const handleSubmit =  async (e) => {
        e.preventDefault();
       
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        let data = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
        };

        if (Object.keys(formErrors).length === 0) {
            dispatch(
                showLoading({
                    type: "SHOWLOADING",
                    isLoading: true,
                })
            );
            function submitForm() {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 200);
                });
            }
            await submitForm();
            addDataToLocalstorage({ data });
        }
        dispatch(
            showLoading({
                type: "SHOWLOADING",
                isLoading: false,
            })
        );
    };
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = "Username is Required";
        }
        if (!values.email) {
            errors.email = "Email is Required";
        } else if (!regex.test(values.email)) {
            errors.email = "Not valid email";
        } else if (getDatalocal(values.email)) {
            errors.email = "User email is used";
        }
        if (!values.passrepeat) {
            errors.passrepeat = "PassReaped is Required";
        }
        if (!values.password) {
            errors.password = "Password is Required";
        } else if (values.password.length < 2) {
            errors.password = "Password must be more than 2 chars";
        } else if (values.password !== values.passrepeat) {
            errors.passrepeat = "Password and PassReaped is not equal";
        }
        return errors;
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign Up</div>
                <div className="form">
                    
                        <div className="login-form" style={{display : isLoading ? 'block' : 'none'}}>
                            <ClipLoader color={"red"} size={120} />
                            <p>Please wait</p>
                        </div>
                   
                       
                            <Message show={Object.keys(formErrors).length === 0 && isSubmit} message='You just signed up' />
                            <form onSubmit={(e) => {handleSubmit(e) }} style={{display : !isLoading ? 'block' : 'none'}} >
                                <div className="input-container">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={(e) => handleChange(e)}
                                    />
                                <small className="errorMessage">{formErrors.name}</small>
                                </div>
                                <div className="input-container">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={formValues.email}
                                        onChange={(e) => handleChange(e)}
                                    />
                                <small className="errorMessage">{formErrors.email}</small>
                                </div>
                                <div className="input-container">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={(e) => handleChange(e)}
                                        />
                                <small className="errorMessage">{formErrors.password}</small>
                                </div>
                                <div className="input-container">
                                    <label>PassRepeat</label>
                                    <input
                                        type="password"
                                        name="passrepeat"
                                        value={formValues.passrepeat}
                                        onChange={(e) => handleChange(e)}
                                        />
                                <small className="errorMessage">{formErrors.passrepeat}</small>
                                </div>
                                <div
                                    className="input-container"
                                    onClick={(e) => {
                                        dispatch(
                                            signUp({
                                                type: "SIGNUP",
                                                signUp: false,
                                            })
                                        );
                                    }}
                                >
                                    <p>
                                        <small>Already have an account?</small>
                                        <Link to="/">Log In</Link>
                                    </p>
                                </div>
                                <Submit value="Submit1" />
                            </form>
                      
                </div>
            </div>
        </div>
    );
}
export default SignUp;
