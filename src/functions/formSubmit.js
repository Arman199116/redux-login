import {getData} from './getData';
import { setUserState, signUp, showLoading} from '../redux/store';

export const handleSubmit = async (e, dispach) => {
    e.preventDefault();


    const { email, password } = e.target;
    let user = getData(email.value);
   
    function submitForm() {
        dispach(showLoading({
            type : 'SHOwLOADING',
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
                type : 'SHOwLOADING',
                isLoading : false
            }))
            return;
        } 
        dispach(showLoading({
            type : 'SHOwLOADING',
            isLoading : false
        }))
    }
    dispach(signUp({
        type : 'INCORRECT',
        incorrectEmOrPass : true
    }));
    dispach(showLoading({
        type : 'SHOwLOADING',
        isLoading : false
    }))
}