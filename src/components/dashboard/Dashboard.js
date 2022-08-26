import React  from "react";
import { useDispatch } from "react-redux";
import { checkUserExists } from "../../redux/store";
import UserInfo from "./UserInfo";
import ChartJS from "./../reactchartjs/ReactChartJS";
import UsersTable from "./UsersTable";

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
            <UsersTable />
        </div>
    );
}

export default Dashboard;
