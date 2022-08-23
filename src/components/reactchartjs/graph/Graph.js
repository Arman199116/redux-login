import React, { useEffect, useState, useContext} from "react";
import ReactApexChart from "react-apexcharts";
import getData from "./../data/fetch_data";
import { options } from "./options";
import { Context } from "../data/Context";



function Graph() {
    
    const [data, setData] = useState([])
    const { days } = useContext(Context);

    useEffect(() => {
        getData(days).then(val => {
          
            setData(val.prices)
        });
    },[days]);
    const series = [{
        name : 'Prices',
        data: data
    }];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} height={400} /> 
            
        </div>
    );
}

export default Graph;
