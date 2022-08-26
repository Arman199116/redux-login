import React, { useState } from "react";
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from "./../../redux/store";

function User({email, usersList}) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    let currentUserEmail = useSelector(state => state.currentUser.email);

    const [emailMessage, setEmailMessage] = useState('');
    const [newValue, setNewValue] = useState(email)

    const handleEditEmail = (e) => {
        e.preventDefault();

        const validate = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!regex.test(email)) {
                setEmailMessage("Not valid email");
                return false;
            }
            setEmailMessage("");
            return true;
        }

        if (newValue) {
            for (let i = 0; i < usersList.length; i++) {       
                if (newValue === usersList[i].email) {
                    setEmailMessage("Email allrady is used");
                    setIsEdit(false);
                    return;
                }
            }

            if (newValue !== email) {
                if (validate(newValue)) {
                    if (currentUserEmail === email) {
                        dispatch(currentUser({
                            type : 'CHANGECURRENTUSEREMAIL',
                            email : newValue
                        }));
                    }
                    dispatch(currentUser({
                        type : 'CHANGEEMAIL',
                        email : {
                            newEmail : newValue,
                            oldEmail : email
                        }
                    }));
                }
            }
        }
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <>
                <div className="user-data" >
                    <input  type="text" value={newValue} onChange={ (e) => {setNewValue(e.target.value)} } />
                    <div className="change-button" onClick={e =>handleEditEmail(e)} >
                        <AiFillEdit />
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="user-data" >
                    <div>{email}</div>
                    <input onClick={e => {setIsEdit(!isEdit); setNewValue(email);}} type="button" value='Change Email' className="change-button"  />
                </div>
                <p style={{display : emailMessage ? 'block' : 'none'}}  >{emailMessage}</p>
            </>
        );
    }
}

export default User;
