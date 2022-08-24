import {getDatalocal} from './getData';
import { signUp, showLoading} from '../redux/store';

export const handleSubmit = async (e, dispatch, user) => {
    //let user = useSelector( state => state.users[email.value]);
    e.preventDefault();

    const { email, password } = e.target;
    console.log(user);
    dispatch(signUp({
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
            dispatch(showLoading({
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