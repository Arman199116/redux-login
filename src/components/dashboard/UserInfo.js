import React from "react";
import Submit from "../inputs/Submit";
import { selectUser } from "../../redux/store";
import { useSelector } from "react-redux";

const UserInfo = ({handleSubmit}) => {
    const user = useSelector(selectUser);

    return (
        <div className="user-info">
                
                <h3>Welcome <span>{ user.name } </span></h3>
                <span>Email { user.email }</span>
                <Submit value={'Logout'} handleSubmit={handleSubmit} />
        </div>
    )
}

export default UserInfo;