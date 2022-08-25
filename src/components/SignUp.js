import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setUserState, selectCheckObj, signUp, showLoading  } from "./../redux/store";
import ClipLoader from "react-spinners/ClipLoader";
import Submit from "../components/inputs/Submit";
import { Link } from "react-router-dom";
import Message from './Message';
//import { getDatalocal } from "./../functions/getData";
//import {addDataToLocalstorage} from './../functions/addDataToLocalstorage'

function SignUp() {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(selectCheckObj);
    const initialValues = { name: "", email: "", password: "", passrepeat: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    let userIsExsists = useSelector((state) => state.users.find((item) => item.email === formValues.email))

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value})
    }
    const handleSubmit =  async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        let data = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
        };

        if (Object.keys(formErrors).length === 0) {
            dispatch(showLoading({
                    type: "SHOWLOADING",
                    isLoading: true,
                })
            );
            if (!userIsExsists) {
                dispatch(setUserState({
                    type : 'ADDUSER',
                    user : data
                }));
                setIsSubmit(true);
                dispatch(
                    showLoading({
                        type: "SHOWLOADING",
                        isLoading: false,
                    })
                );
                return;
            }
        }
        setIsSubmit(false);
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
        } else if (userIsExsists) {
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
    let linkP = useMemo(() =><p><small>Already have an account?</small><Link to="/">Log In</Link></p>,[])
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
                        <small className="errorMessage" style={{display : formErrors.name ? 'block' : 'none'} }>{formErrors.name}</small>
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={formValues.email}
                                onChange={(e) => handleChange(e)}
                            />
                        <small className="errorMessage" style={{display : formErrors.email ? 'block' : 'none'}}>{formErrors.email}</small>
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={(e) => handleChange(e)}
                                />
                        <small className="errorMessage" style={{display : formErrors.password ? 'block' : 'none'}}>{formErrors.password}</small>
                        </div>
                        <div className="input-container">
                            <label>PassRepeat</label>
                            <input
                                type="password"
                                name="passrepeat"
                                value={formValues.passrepeat}
                                onChange={(e) => handleChange(e)}
                                />
                        <small className="errorMessage" style={{display : formErrors.passrepeat ? 'block' : 'none'}}>{formErrors.passrepeat}</small>
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
                            {linkP}
                        </div>
                        <Submit value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
