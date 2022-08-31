import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { createSelector } from 'reselect';
import { selectUsers} from "./../../redux/store";


function UsersTable({users}) {
    //let users = useSelector(selectUsers);
    return (
        <>
            {
                users.map((item, i) => {
                    return <User key={i} email={item.email} usersList={users} />
                })
            }
         </>
    );
}

let getUsers = createSelector([ selectUsers ], (users) => {
    console.log('new state users');
    return { users };
});

const mapStateToProps = (state) => {
    const { users } = getUsers(state);
    return  { users };
}

export default connect(mapStateToProps)(UsersTable);
