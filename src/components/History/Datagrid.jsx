import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
];
const Datagrid = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("/historique/HistoryOfTraining")
      .then((data) => data)
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
};
export default Datagrid;
