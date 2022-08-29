import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import User from "./User";
//import { createSelector } from 'reselect';
import { selectUsers } from "./../../redux/store";

//const unsafeSelector = createSelector(selectUsers, (state) => state.users)
function UsersTable() {
    let usersList = useSelector(selectUsers, shallowEqual);
    return (
        <>
            {
                usersList.map((item, i) => {
                    return <User key={i} email={item.email} usersList={usersList} />
                })
            }
         </>
    );
}

export default React.memo(UsersTable);
