import { signUp } from "./../redux/store";

export const handleSignIn = (e, dispatch) => {
    e.preventDefault();
    dispatch(
        signUp({
            type: "SIGNUP",
            signUp: false,
        })
    );
};
