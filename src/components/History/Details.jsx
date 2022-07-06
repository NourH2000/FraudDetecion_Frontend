import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { color } from "@mui/system";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

// 1/ columns
const columns = [
  { field: "id", headerName: "Id", width: 300 },
  { field: "Médicament", headerName: "Médicament", width: 300 },
  { field: "Nombre_total", headerName: "total", width: 300 },
  {
    field: "Nombre_suspécieux",
    headerName: "cas suspécieux",
    width: 300,
  },
];
const Details = () => {
  const location = useLocation();

  //data

  const [tableData, setTableData] = useState([]);

  // fetch the data :
  const idHistory = location.state.idHistory;

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/historique/QuantityResultGroupedByNumEnrAndId",
        {
          params: {
            idEntrainement: idHistory,
          },
        }
      )
      .then((response) => {
        setTableData(response.data);
      });
  }, []);

  const HistoryRow = tableData.map((row) => {
    return {
      id: row?.id,
      Médicament: row?.num_enr,
      Nombre_total: row?.count_medicament,
      Nombre_suspécieux: row?.count_medicament_suspected,
    };
  });

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Typography variant="h6" sx={{ color: "black " }}>
        Result of training number {idHistory}
      </Typography>
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

export default Details;
