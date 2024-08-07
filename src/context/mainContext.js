import { createContext, useContext, useState } from "react";

const Context=createContext();

export const MainContext=({children})=>{
    const [transactions, setTransactions]=useState(null);
     
    return (
        <Context.Provider value={{transactions, setTransactions}}>
            {children}
        </Context.Provider>
    )
}

export const useValue=()=>{
    return useContext(Context);
}