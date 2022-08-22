import { useDispatch } from "react-redux";
import { handleSubmit } from "../../functions/formSubmit";
import { Link } from "react-router-dom";
import { signUp } from "./../../redux/store";

export const SignInForm = () => {
    const dispach = useDispatch();

    return (
        <form onSubmit={(e) => handleSubmit(e, dispach)}>

            <div className="input-container">
                <label>Name</label>
                <input
                    type="email"
                    name="email"
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
                    dispach(
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
