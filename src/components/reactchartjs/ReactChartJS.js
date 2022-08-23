import React, { useEffect, useState, useMemo} from "react";
import  "chart.js/auto";
import getData from "./data/fetch_data";
import { optionsChartjs_2 } from "./options";
import { dataLabel } from "./data/dataLabel";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import HeaderToolBar from "../reactchartjs/HeaderToolBar";
//import { showLoading } from "./../../redux/store";
import ClipLoader from 'react-spinners/ClipLoader';

function ChartJS_2() {
    //const dispatch = useDispatch();
    const [isLoading, setIsloading] = useState(false)
    const days = useSelector(state => state.chartDay);
    //const isLoadingTrue = useSelector(state => state.check.isLoadin);
    const [memoData, setMemoData] = useState(new Map());
    
    const [data, setData] = useState({
        labels: [],
        datasets: [],
    });
    
    const HeaderSpans = useMemo(() => <HeaderToolBar />, [])
    const lineChartJS = useMemo(() => <Line data={data} options={optionsChartjs_2} height={300} width={600}  />, [data])

    useEffect(() => {
        // dispatch(showLoading({
        //     type : 'SHOWLOADIN',
        //     isLoadin : true
        // }))
        setIsloading(true)
        if (!memoData.has(days)) {
            getData(days).then(value => {
                let dataObj = dataLabel.addData(value);
                console.log( dataObj );
                setData(dataObj);
                setMemoData(updMap => updMap.set(days, dataObj));
            });
        } else {
            setData(memoData.get(days));
        }
        //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

    },[days, memoData]);
    useEffect(() => {
        setIsloading(false);
    },[data]);
    
    return (
        <>
            {isLoading ? 
                <div className="loading-board">
                    <ClipLoader color={'red'} size={100} />
                    <p>Please wait</p>
                </div>
            :
                
                <div id="chart" className='chart-board'>
                    { HeaderSpans }
                    { lineChartJS }
                 </div>
            }
        </>
    );
}

export default ChartJS_2;
