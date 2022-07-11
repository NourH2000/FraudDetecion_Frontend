import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { color } from "@mui/system";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Typography, Paper, Stack, Divider } from "@mui/material";
import Cards from "./CardsDetails";
import { makeStyles } from "@mui/styles";
import { styled, createStyles } from "@mui/material/styles";
// 1/ columns
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 300,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Médicament",
    headerName: "Médicament",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Nombre_total",
    headerName: "total",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Nombre_suspécieux",
    headerName: "cas suspect",
    width: 300,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
];
const DataGridTraining = () => {
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));
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
    <Stack
      direction="column"
      alignItems="stretch"
      spacing={0}
      sx={{ height: 700, width: "100%" }}
    >
      <ItemStack elevation={0}>
        <Typography
          color="black"
          sx={{ fontWeight: "bold", marginBottom: "2%", marginTop: "2%" }}
          variant="h6"
          gutterBottom
        >
          Result of training number {idHistory}
        </Typography>
        <Divider />
      </ItemStack>
      <ItemStack
        elevation={0}
        sx={{
          textAlign: "center",
          height: "180%",
          "& .super-app-theme--header": {
            backgroundColor: " #e7eaf6",

            color: "black",
          },
        }}
      >
        <DataGrid
          sx={{ border: "none" }}
          autoHeight
          rows={HistoryRow}
          columns={columns}
          pageSize={12}
        />
      </ItemStack>
    </Stack>
  );
};

export default DataGridTraining;
