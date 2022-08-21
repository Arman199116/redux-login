import {getData} from './getData';
import { setUserState, incorrectData } from './../redux/store';

export const handleSubmit = (e, dispatch) => {
    e.preventDefault();
    const { email, password } = e.target;
    let user = getData(email.value);

    if (user !== null) {
        user = JSON.parse(user);
        if (password.value === user.password ) {
            dispatch(setUserState({
                type : 'ADD',
                user : user
            }));
            return;
        } 
    }
    dispatch(incorrectData({
        type : 'INCORRECT',
        incorrectEmOrPass : true
    }));
}