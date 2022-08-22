import { signUp } from './../redux/store';
export const addDataToLocalstorage = ( {data , dispach}) => {
    if(data?.email) {
       
        localStorage.setItem(data.email, JSON.stringify(data)) ;
    }
}

 