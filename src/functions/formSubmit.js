import {getDatalocal} from './getData';
import { setUserState, signUp, showLoading} from '../redux/store';

export const handleSubmit = async (e, dispach) => {
    e.preventDefault();

    const { email, password } = e.target;
    let user = getDatalocal(email.value);
    dispach(signUp({
        type : 'INCORRECT',
        incorrectEmOrPass : false
    }));
    function submitForm() {
        dispach(showLoading({
            type : 'SHOWLOADING',
            isLoading : true
        }))
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500);
        })
    }
    await submitForm();

    if (user !== null) {
        user = JSON.parse(user);
        if (password.value === user.password ) {
            dispach(setUserState({
                type : 'ADD',
                user : user
            }));
            dispach(showLoading({
                type : 'SHOWLOADING',
                isLoading : false
            }))
            return;
        }
        dispach(showLoading({
            type : 'SHOWLOADING',
            isLoading : false
        }))
        dispach(signUp({
            type : 'INCORRECT',
            incorrectEmOrPass : false
        }));
    }
    dispach(signUp({
        type : 'INCORRECT',
        incorrectEmOrPass : true
    }));
    dispach(showLoading({
        type : 'SHOWLOADING',
        isLoading : false
    }))
}