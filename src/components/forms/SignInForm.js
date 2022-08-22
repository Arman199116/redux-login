import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../../functions/formSubmit";
import { Link } from "react-router-dom";
import Input from "../inputs/Input";
import { handleSignUp } from "../../functions/handleSignUp";
import Submit from "../inputs/Submit";
import { signUp } from "./../../redux/store";

export const SignInForm = () => {
    const dispach = useDispatch();
   
    return (
        <form onSubmit={(e) => handleSubmit(e, dispach)}>
            <Input name="Email" type="email" />
            <Input name="Password" type="password" />
            <div
                className="input-container"
                onClick={(e) => {
                    dispach(signUp({
                        type : 'SIGNUP',
                        signUp : true
                    }));
                }}
            >
                <Link to="/">Sign up</Link>
            </div>
            <Submit value="Submit" />
        </form>
    );
};
