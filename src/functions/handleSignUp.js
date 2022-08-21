import { signUp } from './../redux/store';
import { addDataToLocalstorage } from './../functions/addDataToLocalstorage'
import {getData} from './../functions/getData'

export const handleSignUp = (e, dispach) => {
    e.preventDefault();
    const { name, email, password, passrepeat } = e.target;
    dispach(signUp({
        type : 'SIGNUP',
        signUp : true
    }));
    let user = getData(email && email.value);
    if ((password && password.value !== passrepeat.value) || user ) {
        dispach(signUp({
            type : 'SIGNUPISINCORRECT',
            signUpIsIncorrect : true
        }));
        return;
    } else {
        dispach(signUp({
            type : 'SIGNUPISINCORRECT',
            signUpIsIncorrect : false
        }));
    }
    let data = {name : name?.value, email : email?.value, password : password?.value };
    addDataToLocalstorage({data, dispach});
}

export const handleSignIn = (e, dispach) => {

    e.preventDefault();
    dispach(signUp({
        type : 'SIGNUP',
        signUp : false
    }));
}