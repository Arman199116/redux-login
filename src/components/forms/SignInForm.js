import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../../functions/formSubmit";
import { Link } from "react-router-dom";
import { signUp, checkUserExists } from "./../../redux/store";
import { useRef, useState } from "react";

export const SignInForm = () => {
    const inpRef = useRef();
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('');
    //console.log(user);
     let user = useSelector(state => state.users[userEmail])
     console.log(user);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { email, password } = e.target;
    //     if (user && user.email === email.value){
    //         if (user.password == password.value) {
    //             dispatch(checkUserExists({
    //                 type : 'ISEXISTS',
    //                 isExists : true
    //             }))
    //         }
    //     }
    // }
    
   

    return (
        <form onSubmit={(e) => { handleSubmit(e, dispatch)} }>

            <div className="input-container">
                <label>Name</label>
                <input
                    ref={inpRef}
                    type="email"
                    name="email"
                    onChange={(e) => setUserEmail(e.target.value) }
                    required
                />
            </div>
            <div className="input-container">
                <label>password</label>
                <input
                    type={'password'}
                    name="password"
                    required
                />
            </div>
            <div
                className="input-container"
                onClick={(e) => {
                    dispatch(
                        signUp({
                            type: "SIGNUP",
                            signUp: true,
                        })
                    );
                }}
            >
                <Link to="/">Sign up</Link>
            </div>

            <div className="button-container">
                <input type="submit" value={'Submit'} />
            </div>
        </form>
    );
};
