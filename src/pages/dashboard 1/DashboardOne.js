import styles from "./dashboard1.module.css";
import { useEffect, useState } from "react"
import { useValue } from "../../context/mainContext";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Table from "../../components/Table";
import { BarChart } from "../../components/BarChart";
import { LineChart } from "../../components/LineChart";

export const DashboardOne=()=>{
    const [date, setDate]=useState(new Date());
    const {transactions, setTransactions} =useValue();
    const [chartData, setChartData]=useState(transactions);
    const [loading, setLoading]=useState(true);
    
    useEffect(()=>{
        async function getTransactions(){
            try{
                setLoading(true);
                const res=await fetch(`https://sales-dashboard-backend-rn35.onrender.com/api/transactions/filter/?date=${date.toDateString()}`);
                const dataObj=await res.json();
                setTransactions(dataObj.data);
                setChartData(dataObj.data);
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }
        getTransactions();
    }, [date]);
    
    return (
        <div className={styles.mainDiv}>
            <h2 className={`text-center my-4`}>Dashboard 1</h2>
            <div className={styles.dateInput}>
                <div>
                    <label className="form-label">Date:</label>
                    <DatePicker selected={date} onChange={(d) => setDate(d)} />
                </div>
            </div>
            <div className={styles.flexDiv}>
                <div className={styles.tableDiv}>
                <Table setChartData={setChartData} loading={loading}/>
                </div>
                <div className={styles.chartDiv}>
                    <div className={styles.barDiv}>
                        <BarChart data={chartData}/>
                    </div>
                    <div className={styles.lineDiv}>
                        <LineChart data={chartData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}