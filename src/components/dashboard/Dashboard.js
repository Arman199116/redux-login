import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, clearStateUser } from "../../redux/store";
import {addDataToLocalstorage} from '../../functions/addDataToLocalstorage'
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";

function Dashboard() {
    const user = useSelector(selectUser);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearStateUser({type : "DELETE"}));
    }
    addDataToLocalstorage(user);
    const dispatch = useDispatch();
    //const memoUserInfo = useMemo(() => {<UserInfo handleSubmit={handleSubmit} />},[])
    //const memoChartJS = useMemo(() => {})

    return (
        <div className="container">
            <UserInfo handleSubmit={handleSubmit} />
            <ChartJS />
        </div>
    );
}

export default Dashboard;
