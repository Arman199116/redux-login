import { useDispatch } from "react-redux";
import { handleSubmit } from "../../functions/formSubmit";
import { Link } from "react-router-dom";
import Input from "../inputs/Input";
import { handleSignUp } from "../../functions/handleSignUp";
import Submit from "../inputs/Submit";

export const SignInForm = () => {
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e) => handleSubmit(e, dispatch)}>
            <Input name="Email" type="email" />
            <Input name="Password" type="password" />
            <div
                className="input-container"
                onClick={(e) => handleSignUp(e, dispatch)}
            >
                <Link to="/">Sign up</Link>
            </div>
            <Submit value="Submit" />
        </form>
    );
};
