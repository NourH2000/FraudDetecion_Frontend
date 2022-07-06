import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { color } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 1/ columns
const columns = [
  { field: "id", headerName: "Id", width: 300 },
  { field: "type", headerName: "Type", width: 300 },
  { field: "date", headerName: "Date of Training", width: 300 },
  { field: "training", headerName: "Training id", width: 300 },
];

const Datagrid = () => {
  //data

  const [tableData, setTableData] = useState([]);

  // fetch the data :

  useEffect(() => {
    axios
      .get("http://localhost:8000/historique/HistoryOfTraining")
      .then((response) => {
        setTableData(response.data);
      });
  }, []);

  const HistoryRow = tableData.map((row) => {
    return {
      id: row?.id,
      type: row?.type,
      date: row?.date,
      training: row?.date,
    };
  });

  //Nabigation
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    // 👇️ navigate to /contacts
    navigate("/Details", { state: { idHistory: id } });
  };

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        sx={{ border: "none" }}
        autoHeight
        rows={HistoryRow}
        columns={columns}
        pageSize={12}
        onSelectionModelChange={(ids) => {
          navigateToDetails(ids[0]);
        }}
      />
    </div>
  );
};
export default Datagrid;
