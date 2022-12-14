import React, { useState} from "react";
import { currentUser , checkUserExists, selectCurrentUser} from "../../redux/store";
import { useDispatch, connect } from "react-redux";
import { AiFillEdit } from 'react-icons/ai';
import { createSelector } from 'reselect';

const UserInfo = ({ user }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            checkUserExists({
                type: "ISEXISTS",
                isExists: false,
            })
        );
    };
    //let user = useSelector(state => state.currentUser, shallowEqual);

    const [edit, setEdit] = useState(false);
    const [newValue, setNewValue] = useState(user.email);
    const dispatch = useDispatch();
    const [emailMessage, setEmailMessage] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setEdit(true);
        setNewValue(user.email);
    }

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
            if (newValue !== user.email) {
                if (validate(newValue)) { 
                    dispatch(currentUser({
                        type : 'ADDCURRENTUSER',
                        user : {...user, email : newValue}
                    }));
                    dispatch(currentUser({
                        type : 'CHANGEEMAIL',
                        email : {
                            newEmail : newValue,
                            oldEmail : user.email
                        }
                    }));
                }
            } 
        }
        setEdit(false);
    }

    return (
        <form className="user-info" onSubmit={(e) => handleChange(e)}>
            <h3>Welcome <span>{ user.name } </span></h3>
            {
                edit
                ?   <div className='icon-container'>
                        <input type='text' value={newValue} className={'input-text'} onChange={(e) => setNewValue(e.target.value)} /> 
                        <span className='icon' onClick={(e) => handleEditEmail(e)}>
                            <AiFillEdit  />
                        </span>
                    </div>
                :
                    <div>Email { user.email }</div>
            }

            <p style={{display : emailMessage ? 'block' : 'none'}}  >{emailMessage}</p>
            <div className="button-container">
                <input type="submit" value="Change Email"  />
            </div>

            <div className="button-container">
            <input type="submit" value={"Logout"} onClick={(e) => handleSubmit(e) } />
        </div>
        </form>
    )
}
let getCurrentUser = createSelector([ selectCurrentUser ], (currentUser) => {
    console.log('new state currentuser');
    return { currentUser };
});

const mapStateToProps = (state) => {
    const { currentUser } = getCurrentUser(state);
    return  { user : currentUser }
}

export default connect(mapStateToProps)(UserInfo)
