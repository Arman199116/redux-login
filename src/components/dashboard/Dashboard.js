import React  from "react";
import { useDispatch } from "react-redux";
import { checkUserExists } from "../../redux/store";
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";

function Dashboard() {
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkUserExists({
            type : "ISEXISTS",
            isExists : false
        }));
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
