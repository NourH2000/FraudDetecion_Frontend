import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Paper, Stack, Divider } from "@mui/material";
import { styled, createStyles } from "@mui/material/styles";

// 1/ columns
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "prescription",
    headerName: "prescription",
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "nassuré",
    headerName: "Insured number",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "quantityPrescripted",
    headerName: " Prescripted Quantity",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "quantityPridected",
    headerName: "predicted Quantity ",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "quantityRejected",
    headerName: " Rejected Quantity ",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
];

const OneMedicationdataGrid = () => {
  // item stack
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
  const medicament = location.state.medicament;

  useEffect(() => {
    axios
      .get("http://localhost:8000/DetailsOfMedicationQ/OneMedication", {
        params: {
          idEntrainement: idHistory,
          NumEnR: medicament,
        },
      })
      .then((response) => {
        setTableData(response.data);
      });
  }, []);

  // auto increment ID

  let i = 0;
  const inc = () => {
    i = i + 1;
    return i;
  };

  const HistoryRow = tableData.map((row) => {
    return {
      id: inc(i),
      prescription: row?.fk,
      nassuré: row?.no_assure,
      quantityPrescripted: row?.quantite_med,
      quantityPridected: row?.quantite_predicted,
      quantityRejected: row?.qte_rejet_predicted,
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
          Training Number : {idHistory} with medication number : {medicament}
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

export default OneMedicationdataGrid;
