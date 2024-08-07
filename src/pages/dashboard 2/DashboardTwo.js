import styles from "./dashboard2.module.css";
import { useEffect, useState } from "react"
import { useValue } from "../../context/mainContext";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { BarChart2 } from "../../components/BarChart2";
import { Table2 } from "../../components/Table2";
import { LineChart2 } from "../../components/LineChart2";

export const DashboardTwo=()=>{
    const [compareDate, setCompareDate]=useState(new Date());
    const [date, setDate]=useState(new Date());
    const {transactions, setTransactions} =useValue();
    const [chartData, setChartData]=useState(transactions);
    useEffect(()=>{
        async function getTransactions(){
            try{
                const res1=await fetch(`http://localhost:5001/api/transactions/filter/?date=${date.toDateString()}`);
                const date1Data=await res1.json();
                const res2=await fetch(`http://localhost:5001/api/transactions/filter/?date=${compareDate.toDateString()}`);
                const date2Data=await res2.json();
               
                const allProducts = new Set();
                date1Data.data.forEach(item => allProducts.add(item.name));
                date2Data.data.forEach(item => allProducts.add(item.name));

                const combinedSalesData = Array.from(allProducts).map(name => {
                    const item1 = date1Data.data.find(item => item.name === name);
                    const item2 = date2Data.data.find(item => item.name === name);
                    return {
                        name,
                        category: (item1 ? item1.category : item2.category),
                        date1SalesAmount: item1 ? item1.amount : 0,
                        date2SalesAmount: item2 ? item2.amount : 0,
                        difference: (item1 ? item1.amount : 0) - (item2 ? item2.amount : 0),
                    };
                });
                setTransactions(combinedSalesData);
                setChartData(combinedSalesData);
            }catch(err){
                console.log(err);
            }
        }
        getTransactions();
    }, [date, compareDate])
    return (
        <div className={styles.mainDiv}>
            <h2 className={`text-center my-4`}>Dashboard 2</h2>
            <div className={styles.dateInput}>
                <div>
                    <label className="form-label">Date 1:</label>
                    <DatePicker selected={date} onChange={(d) => setDate(d)} />
                </div>
                <div>
                    <label className="form-label">Date 2:</label>
                    <DatePicker selected={date} onChange={(d) => setCompareDate(d)} />
                </div>
            </div>
            <div className={styles.flexDiv}>
                <div className={styles.tableDiv}>
                <Table2 setChartData={setChartData} />
                </div>
                <div className={styles.chartDiv}>
                    <div className={styles.barDiv}>
                        <BarChart2 chartData={chartData} />
                    </div>
                    <div className={styles.lineDiv}>
                        <LineChart2 chartData={chartData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}