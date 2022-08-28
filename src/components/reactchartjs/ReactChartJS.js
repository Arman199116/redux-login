import React, { useEffect, useState, useMemo} from "react";
import  "chart.js/auto";
import getData from "./data/fetch_data";
import { optionsChartjs_2 } from "./options";
import { dataLabel } from "./data/dataLabel";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import HeaderToolBar from "../reactchartjs/HeaderToolBar";
import { changeDays } from "./../../redux/store";
import ClipLoader from 'react-spinners/ClipLoader';

function ChartJS_2() {
    const dispatch = useDispatch();
    const [isLoading, setIsloading] = useState(false)
    const days = useSelector(state => state.chartDay);

    let dayData = useSelector(state => state.chartData[days]);

    const [data, setData] = useState({
        labels: [],
        datasets: [],
    });

    const HeaderSpans = useMemo(() => <HeaderToolBar />, [])
    const lineChartJS = useMemo(() => <Line data={data} options={optionsChartjs_2} />, [data])
    useEffect(() => {
        setIsloading(true)
        if (!dayData) {
            getData(days).then(value => {
                let dataObj = dataLabel.addData(value);
                setData(dataObj);
                dispatch(changeDays({
                    type : 'ADDNEWDATA',
                    data : {
                        day : days,
                        value : dataObj
                    }
                }))
            });
        } else {
            setData(dayData);
        }

    },[days, dispatch, dayData]);
    useEffect(() => {
        setIsloading(false);
    },[data]);

    return (
        <>
            <div className="loading-board" style={{display: isLoading ? 'block' : 'none'}}  >
                <ClipLoader color={'red'} size={100} />
                <p>Please wait</p>
            </div>

            <div id="chart" className='chart-board' style={{display: !isLoading ? 'block' : 'none' }}>
                { HeaderSpans }
                { lineChartJS }
            </div>
        </>
    );
}





export default React.memo(ChartJS_2);
