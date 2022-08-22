import { signUp, showLoading, selectCheckObj } from './../redux/store';
import { addDataToLocalstorage } from './../functions/addDataToLocalstorage'
import {getData} from './../functions/getData'
import { useSelector } from "react-redux";


export const handleSignUp = async (e, dispach) => {
    e.preventDefault();
    //const { isEmailInvalid } = useSelector(selectCheckObj);
    console.log('isEmailInvalid');    

    const { name, email, password, passrepeat } = e.target;

    function submitForm() {
        dispach(showLoading({
            type : 'SHOwLOADING',
            isLoading : true
        }))
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })
    }
    await submitForm();

    
    let user = getData(email && email.value);
    if ((password && password.value !== passrepeat.value) || user ) {
        dispach(signUp({
            type : 'SIGNUPISINCORRECT',
            signUpIsIncorrect : true
        }));
        dispach(showLoading({
            type : 'SHOwLOADING',
            isLoading : false
        }));
        return;
    }

    dispach(signUp({
        type : 'SIGNUPISINCORRECT',
        signUpIsIncorrect : false
    }));
    let data = {name : name?.value, email : email?.value, password : password?.value };
    addDataToLocalstorage({data, dispach});
    dispach(showLoading({
        type : 'SHOwLOADING',
        isLoading : false
    }));
    return;
}

export const handleSignIn = (e, dispach) => {
    e.preventDefault();
    dispach(signUp({
        type : 'SIGNUP',
        signUp : false
    }));
}