import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function UsersTable() {
    let usersList = useSelector(state => state.users);
    return (
    
        <div  className="users-table" >
            {
                usersList.map((item, i) => {
                    return <User key={i} email={item.email} />
                })
            }
         </div>
    );
}

export default React.memo(UsersTable);
