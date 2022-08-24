import React  from "react";
import { useDispatch } from "react-redux";
import { clearStateUser } from "../../redux/store";
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";

function Dashboard() {
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearStateUser({type : "DELETE"}));
    }
    const dispatch = useDispatch();

    return (
        <div className="container">
            <UserInfo handleSubmit={handleSubmit} />
            <ChartJS />
        </div>
    );
}

export default Dashboard;
