import { Chart  } from 'chart.js';
import 'chartjs-adapter-moment';
import {CrosshairPlugin} from 'chartjs-plugin-crosshair';
Chart.register(CrosshairPlugin);

////////// ApexChart optioins /////////////

export const options = {
    chart: {
        id: 'chart',
        toolbar: {
            show: false
        },
        zoom: {
            autoScaleYaxis: true
        },
    },

    annotations: {
        yaxis: [{
            xAxisIndex: 0,
            borderColor: '#999',
            label: {
                show: true,
                text: 'Coin MarketCup',
                style: {
                    color: "#0a1113",
                }
            }
        }],
        xaxis: [{
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
                show: true,
                style: {
                    color: "#fff",
                    background: '#775DD0'
                }
            }
        }]
    },

    dataLabels: { enabled: false },
    colors: ['#16C784'],
    stroke: {
        curve: ['straight'],
        width: 2
    },
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        tickAmount: 12,  
        tooltip: {
            enabled: true,
            offsetX: 0,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yyyy h:m:s',
        },
    },
    fill: {
        type: 'gradient',
        colors: ['#16C784'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.7,
            stops: [0, 50, 100]
        }
    },
}

////// react-chartjs-2 options //////////////////

export let optionsChartjs_2 = {
    elements: { point: { radius: 0 } } ,
    plugins: {
        crosshair: {
       
            line: {
                color: "#d1d1d1",
                width: 2,
            },
        },
        legend: {
            display: false
        },
        tooltip: {

            mode: 'index',
            intersect: false,
            backgroundColor: '#FFFFFF',
            bodyColor: "black",
            padding: 20,
            titleColor: 'black',
            callbacks: {
                label: function(chart) {
                    return ' Price $' + chart.formattedValue 
                },
                labelColor: function(chart) {
                    return {   
                        backgroundColor: '#16C784',
                        borderWidth: 3,
                        borderRadius: 5,
                    };
                },
            },
        },
    },

    scales: {

        x: {
            grid: {
                display: false
            },
            type: "time",
            distribution: "linear",

            time: {
                parser: "dd/mm/yyyy",    
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
            }    
        },
        y: {
            ticks: {
                beginAtZero: true,
                autoSkip: true,
                maxTicksLimit: 12,  
                callback: function(value) {
                    return  (Number.parseFloat(value).toFixed(2)) + 'K';
                },
            },
        },
    }
}