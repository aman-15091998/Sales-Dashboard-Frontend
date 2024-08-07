import styles from "./component.module.css"
import { Chart as ChartJs } from "chart.js/auto"
import { Line } from "react-chartjs-2"
export const LineChart=({data})=>{
    let mergedData={};
    if(data){
    mergedData = data.reduce((acc, item) => {
        const { category, amount} = item;
      
        if (!acc[category]) {
          acc[category] = { amount: 0 };
        }
        acc[category].amount += amount;
        return acc;
      }, {});
    }
    let keys=[];
    let valArr=[];
    if(mergedData){
        for(let obj in mergedData){
            keys.push(obj);
            valArr.push(mergedData[obj].amount);
        }
    }

    const d={
        labels: keys,
        datasets:[
            {
                label:"Category",
                data:valArr,
                backgroundColor:["blue"]
            }
        ]
    }
    return (
        <>
            <Line className={styles.line} data={d}/>
        </>
        
    )
}