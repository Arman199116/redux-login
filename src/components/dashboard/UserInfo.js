import React, {useEffect, useRef, useState} from "react";
import Submit from "../inputs/Submit";
import {  setUserState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

const UserInfo = ({handleSubmit}) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const inputRef = useRef();
    const buttonRef = useRef();
    const submitRef = useRef();

    const [emailMessage, setEmailMessage] = useState('');

    useEffect(() => {
        let elInput = inputRef.current;
        const elButton = buttonRef.current;
        const eltSubmit = submitRef.current;
        const handleShowInput = (e) => {
            elInput.style.display = "block";
            eltSubmit.style.display = "block";
            elButton.style.display = "none";
        }
        const validate = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
            if (!regex.test(email)) {
                setEmailMessage("Not valid email")
                return false;
            }
            setEmailMessage("")
            return true;
        }
        const handleChangeEmail = (e) => {
            if (elInput.value) {
                if (elInput.value !== user.email) {

                    if (validate(elInput.value)) {
                        dispatch(setUserState({
                            type : 'CHANGEEMAIL',
                            email : {
                                new : elInput.value,
                                old : user.email
                            }
                        }))
                    }
                }
               
            }

            elInput.style.display = "none";
            eltSubmit.style.display = "none";
            elButton.style.display = "block";
           
        }
        elButton.addEventListener('click', handleShowInput)
        eltSubmit.addEventListener('click', handleChangeEmail);

        return () => {
            elButton.removeEventListener('click', handleShowInput)
            eltSubmit.removeEventListener('click', handleChangeEmail)     
        }

    }, [emailMessage,dispatch, user.email])

    return (
        <div className="user-info">
                
            <h3>Welcome <span>{ user.name } </span></h3>
            <span>Email { user.email }</span>
            <input ref={inputRef} type='text' placeholder="Change email" style={{display : 'none'}}  />
            <input ref={buttonRef} type="button" value="Change Email"  />
            <p style={{display : emailMessage ? 'block' : 'none'}}  >{emailMessage}</p>
            <input ref={submitRef} type="button" value="Submit" style={{display: 'none'}}  />
            <Submit value={'Logout'} handleSubmit={handleSubmit} />

        </div>
    )
}

export default UserInfo;
