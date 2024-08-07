import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useValue } from '../context/mainContext';

export const Table = ({setChartData, pageSize, pageSizeOptions, loading}) => {
  
  const {transactions, setTransactions} =useValue();
  const gridRef=useRef();
  
  useEffect(()=>{
    if(gridRef.current.api)
      gridRef.current.api.setFilterModel(null);
  }, [transactions]); 

  useEffect(()=>{
    if(gridRef.current.api){
      if(loading)
        gridRef.current.api.showLoadingOverlay();
      else
        gridRef.current.api.hideOverlay();
    }
  }, [loading]);

  const hanldeFilteredData = (params) => {
    const filteredData = [];
    params.api.forEachNodeAfterFilter(node => filteredData.push(node.data));
    setChartData(filteredData);
   
  };
  const rowData = transactions;
  let columnDefs= [
      { headerName: 'Product', field: 'name', sortable: true, filter: true },
      { headerName: 'Category', field: 'category', sortable: true, filter: true },
      { headerName: 'Total Sale Quantity', field: 'quantity', sortable: true, filter: true },
      { headerName: 'Total Sale Amount', field: 'amount', sortable: true, filter: true  },
      { headerName: 'Date Of Sale', field: 'date', sortable: true, filter: false  },
    ];
 
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact 
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, minWidth: 150, resizable: true }}
        onFilterChanged={hanldeFilteredData}
        ref={gridRef}

        pagination={true}
        paginationPageSize={pageSize || 10}
        paginationPageSizeSelector={pageSizeOptions || [10, 20, 50, 100]}
      />
    </div>
  );
};

export default Table;
