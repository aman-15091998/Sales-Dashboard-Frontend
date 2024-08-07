import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useValue } from '../context/mainContext';


export const Table2 = ({setChartData, pageSize, pageSizeOptions}) => {
  
  const {transactions, setTransactions} =useValue();
  
  
  const hanldeFilteredData = (params) => {
    const filteredData = [];
    params.api.forEachNodeAfterFilter(node => filteredData.push(node.data));
    setChartData(filteredData);
  };
 
  const rowData = transactions;
  let columnDefs= [
      { headerName: 'Product', field: 'name', sortable: true, filter: true },
      { headerName: 'Category', field: 'category', sortable: true, filter: true },
      { headerName: 'Date 1 Sale Amount', field: 'date1SalesAmount', sortable: true, filter: true },
      { headerName: 'Date 2 Sale Amount', field: 'date2SalesAmount', sortable: true, filter: true  },
      { headerName: 'Difference', field: 'difference', sortable: true, filter: false  },
    ];
  

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact 
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, minWidth: 150, resizable: true }}
        onFilterChanged={hanldeFilteredData}

        pagination={true}
        paginationPageSize={pageSize || 10}
        paginationPageSizeSelector={pageSizeOptions || [10, 20, 50, 100]}
      />
    </div>
  );
};

export default Table2;
