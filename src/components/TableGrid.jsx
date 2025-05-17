import React from "react";
import { DataGrid } from "react-data-grid";
import "react-data-grid/lib/styles.css";
import "./TableGrid.css";

const columns = [
  { key: "id", name: "ID" },
  { key: "month", name: "월" },
  { key: "utilization", name: "가동률 (%)" },
];

const data = [
  { id: 1, month: "1월", utilization: 75 },
  { id: 2, month: "2월", utilization: 82 },
  { id: 3, month: "3월", utilization: 68 },
  { id: 4, month: "4월", utilization: 90 },
  { id: 5, month: "5월", utilization: 74 },
];

const TableGrid = () => {
  return (
    <>
      <div className='no-select' style={{ height: 300 }}>
        <DataGrid columns={columns} rows={data} />
      </div>
    </>
  );
};

export default TableGrid;
