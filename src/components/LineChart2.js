import styles from "./component.module.css"
import { Chart as ChartJs } from "chart.js/auto"
import { Line } from "react-chartjs-2"
export const LineChart2=({chartData})=>{
    let mergedChartData1={};
    let mergedChartData2={};
   
    if(chartData){
        mergedChartData1 = chartData.reduce((acc, item) => {
            const { category, date1SalesAmount} = item;
        
            if (!acc[category]) {
            acc[category] = { amount: 0 };
            }
            acc[category].amount += date1SalesAmount;
            return acc;
        }, {});
        mergedChartData2 = chartData.reduce((acc, item) => {
            const { category, date2SalesAmount} = item;
        
            if (!acc[category]) {
            acc[category] = { amount: 0 };
            }
            acc[category].amount += date2SalesAmount;
            return acc;
        }, {});
    }
    let keys=[];
    let valArr1=[];
    if(mergedChartData1){
        for(let obj in mergedChartData1){
            keys.push(obj);
            valArr1.push(mergedChartData1[obj].amount);
        }
    }
    let valArr2=[];
    if(mergedChartData2){
        for(let obj in mergedChartData1){
            valArr2.push(mergedChartData2[obj].amount);
        }
    }
    const d={
        labels: keys,
        datasets:[
            {
                label:"Date 1",
                data:valArr1,
                backgroundColor:["blue"]
            },
            {
                label:"Date 2",
                data:valArr2,
                backgroundColor:["green"]
            }
        ]
    }
    return (
        <>
            <Line className={styles.line} data={d}/>
        </>
        
    )
}