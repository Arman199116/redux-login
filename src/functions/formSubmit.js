import {getDatalocal} from './getData';
<<<<<<< HEAD
import { setUserState, signUp, showLoading} from '../redux/store';
import { useSelector } from "react-redux";
=======
import { signUp, showLoading} from '../redux/store';
>>>>>>> 133bb265952a795b97cf787a4c071080d0d944a6

export const handleSubmit = async (e, dispatch, user) => {
    //let user = useSelector( state => state.users[email.value]);
    e.preventDefault();

    const { email, password } = e.target;
<<<<<<< HEAD
    let user = useSelector( state => state.users[email.value]);
    dispach(signUp({
=======
    console.log(user);
    dispatch(signUp({
>>>>>>> 133bb265952a795b97cf787a4c071080d0d944a6
        type : 'INCORRECT',
        incorrectEmOrPass : false
    }));
    // function submitForm() {
    //     dispatch(showLoading({
    //         type : 'SHOWLOADING',
    //         isLoading : true
    //     }))
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve()
    //         }, 500);
    //     })
    // }
    // await submitForm();

    if (user !== null) {
        if (password.value === user.password ) {
<<<<<<< HEAD
            dispach(showLoading({
=======
            dispatch(showLoading({
>>>>>>> 133bb265952a795b97cf787a4c071080d0d944a6
                type : 'SHOWLOADING',
                isLoading : false
            }))
            return;
        }
        dispatch(showLoading({
            type : 'SHOWLOADING',
            isLoading : false
        }))
        dispatch(signUp({
            type : 'INCORRECT',
            incorrectEmOrPass : false
        }));
    }
    dispatch(signUp({
        type : 'INCORRECT',
        incorrectEmOrPass : true
    }));
    dispatch(showLoading({
        type : 'SHOWLOADING',
        isLoading : false
    }))
}