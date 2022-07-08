import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { color } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Toolbar } from "@mui/material";

// 1/ columns
const columns = [
  { field: "id", headerName: "Id", width: 200 },
  {
    field: "type",
    headerName: "Type",
    width: 200,
    sortable: false,
    filterable: false,
  },
  { field: "date", headerName: "Date of Training", width: 320 },
  {
    field: "status",
    headerName: "Status",
    width: 320,
  },
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
      status:
        (row?.status == 0 && "Processing") ||
        (row?.status == 1 && "Success") ||
        (row?.status == -1 && "Failed"),
    };
  });

  //Nabigation
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    // 👇️ navigate to /contacts
    navigate("/DetailOfTraining", { state: { idHistory: id } });
    console.log(id);
  };

  const [pageSize, setPageSize] = useState(20);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        sx={{ border: "none" }}
        rows={HistoryRow}
        columns={columns}
        pagination={true}
        pageSize={pageSize}
        components={{ Toolbar: GridToolbar }}
        loading={!HistoryRow.length}
        initialState={{
          sorting: { sortModel: [{ field: "id", sort: "desc" }] },
        }}
        onSelectionModelChange={(ids) => {
          navigateToDetails(ids[0]);
        }}
      />
    </div>
  );
};
export default Datagrid;
