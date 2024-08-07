import styles from "./component.module.css"
import { Chart as ChartJs } from "chart.js/auto"
import { Bar } from "react-chartjs-2"
export const BarChart2=({chartData})=>{
    let keys=[];
    let valArr1=[];
    let valArr2=[];
    if(chartData){
        for(let valObj of chartData){
            keys.push(valObj.name);
            valArr1.push(valObj.date1SalesAmount);
            valArr2.push(valObj.date2SalesAmount);
        }
    }
    
    const d={
        labels: keys,
        datasets:[
            {
                label:"Product Sold on Date 1",
                data:valArr1,
                backgroundColor:["blue"],
                barPercentage: 0.3,
            },
            {
                label:"Product Sold on Date 2",
                data:valArr2,
                backgroundColor:["green"],
                barPercentage: 0.3,
            }
        ]
    }
    
    const opt = {
        scales: {
        //   y: {
        //         ticks: {
        //         stepSize: 1, 
        //         }
        //     }
        }
      };
      
    return (
        <>
            <Bar className={styles.bar} data={d} options={opt}/>
        </>
    )
}