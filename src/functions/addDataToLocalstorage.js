import { signUp } from './../redux/store';
export const addDataToLocalstorage = ( {data , dispach}) => {
    if(data?.email) {
        dispach(signUp({
            type : 'SUCCESREGISTER',
            succesRegister : true
        }));
        localStorage.setItem(data.email, JSON.stringify(data)) ;
    }
}

 