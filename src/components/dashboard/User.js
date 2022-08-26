import React, { useState } from "react";
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { currentUser } from "./../../redux/store";

function User({email}) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const [emailMessage, setEmailMessage] = useState('');
    const [newValue, setNewValue] = useState(email)

    const handleEditEmail = (e) => {
        e.preventDefault();
        const validate = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!regex.test(email)) {
                setEmailMessage("Not valid email")
                return false;
            }

            setEmailMessage("");
            return true;
        }

        if (newValue) {
            if (newValue !== email) {
                if (validate(newValue)) {
                    dispatch(currentUser({
                        type : 'CHANGEEMAIL',
                        email : {
                            newEmail : newValue,
                            oldEmail : email
                        }
                    }));
                    setIsEdit(!isEdit)
                    return;
                }
            }
        }
    }

    if (isEdit) {
        return (
            <>
                <div className="user-data" >
                    <input  type="text" value={newValue} onChange={ (e) => {setNewValue(e.target.value)} } />
                    <div className="change-button" onClick={e =>handleEditEmail(e)} >
                        <AiFillEdit />
                    </div>
                    <p style={{display : emailMessage ? 'block' : 'none'}}  >{emailMessage}</p>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="user-data" >
                    <div>{email}</div>
                    <input onClick={e => setIsEdit(!isEdit)} type="button" value='Change Email' className="change-button"  />
                </div>
            </>
        );
    }
}

export default User;
