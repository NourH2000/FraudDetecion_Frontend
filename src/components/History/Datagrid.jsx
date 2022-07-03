import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { color } from "@mui/system";
import { getFetcher } from "../../helpers/index";

// 1/ columns
const columns = [
  { field: "id", headerName: "Id", width: 300 },
  { field: "type", headerName: "Type", width: 300 },
  { field: "date", headerName: "Date of Training", width: 300 },
];
const Datagrid = () => {
  const [tableData, setTableData] = useState([]);

  // fetch the data :

  useEffect(() => {
    fetch("http://localhost:8000/historique/HistoryOfTraining")
      .then((res) => res.json())
      .then((json) => setTableData(json));
  }, []);

  const HistoryRow = tableData?.map((row) => {
    return {
      id: row?.id,
      type: row?.type,
      date: row?.date,
    };
  });

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        sx={{ border: "none" }}
        autoHeight
        rows={HistoryRow}
        columns={columns}
        pageSize={12}
      />
    </div>
  );
};
export default Datagrid;
