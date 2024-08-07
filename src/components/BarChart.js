import styles from "./component.module.css"
import { Chart as ChartJs } from "chart.js/auto"
import { Bar } from "react-chartjs-2"
export const BarChart=({data})=>{
    let keys=[];
    let valArr=[];
    if(data){
        keys=data.map(p=>p.name);
        valArr=data.map(p=>p.amount);
    }
    const d={
        labels: keys,
        datasets:[
            {
                label:"Product Sold By Name",
                data:valArr,
                backgroundColor:["blue"],
                barPercentage: 0.3,
            }
        ]
    }
    const opt = {
        // scales: {
        //   y: {
        //     ticks: {
        //       stepSize: 1, 
        //     }
        //   }
        // }
      };
    return (
        <>
            <Bar className={styles.bar} data={d} options={opt}/>
        </>
    )
}