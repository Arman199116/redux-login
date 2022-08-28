import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function UsersTable() {
    let usersList = useSelector(state => state.users);
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
