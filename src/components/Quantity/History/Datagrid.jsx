import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { color } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  Alert,
  Grid,
  Snackbar,
  Stack,
  Toolbar,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import clsx from "clsx";
import { styled, createStyles } from "@mui/material/styles";

// 1/ columns
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 200,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
    sortable: false,
    filterable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Date of Training",
    width: 320,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",

    width: 320,
    cellClassName: (params) => {
      return clsx("super-app", {
        Success: params.value == "Success",
        Failed: params.value == "Failed",
        Processing: params.value == "Processing",
      });
    },
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
];

const HistoryDatagrid = () => {
  // item stack
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));
  //data

  const [tableData, setTableData] = useState([]);

  // fetch the data :

  useEffect(() => {
    axios
      .get("http://localhost:8000/historiqueQ/ByTraining")
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

  //Navigation
  const navigate = useNavigate();

  // snackBar
  const [open, setOpen] = useState(false);
  const [alertOption, setAlertOption] = useState({});

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigateToDetails = (row) => {
    // 👇️ navigate to /contacts in the case  : training is done
    if (row.status === "Success") {
      navigate("/history/quantity/oneTraining", {
        state: { idHistory: row.id },
      });
      // navigate(`/anotherRoute/${row.id}`);
    }
    if (row.status === "Processing") {
      setAlertOption({
        msg: "this training is not completed yet",
        severity: "warning",
      });
      setOpen(true);
    }
    if (row.status === "Failed") {
      console.log(" the failed taining has no details");
      setAlertOption({
        msg: "the failed taining has no details",
        severity: "error",
      });
      setOpen(true);
    }
  };

  const [pageSize, setPageSize] = useState(20);

  return (
    <Stack
      direction="column"
      alignItems="stretch"
      spacing={0}
      sx={{ height: "100%", width: "100%" }}
    >
      <ItemStack elevation={0} sx={{ textAlign: "left" }}>
        <Typography
          color="black"
          sx={{ fontWeight: "bold", marginBottom: "2%", marginTop: "0%" }}
          variant="h6"
          gutterBottom
        >
          Result of training number
        </Typography>
        <Divider />
      </ItemStack>
      <ItemStack
        elevation={0}
        sx={{
          height: "100%",
          width: "100%",
          marginTop: "2%",
          "& .super-app.Failed": {
            color: "#c71d10",

            fontWeight: "600",
          },
          "& .super-app.Success": {
            color: "#12782d",

            fontWeight: "600",
          },
          "& .super-app.Processing": {
            color: "#ffcd55",

            fontWeight: "600",
          },
          "& .super-app-theme--header": {
            backgroundColor: " #e7eaf6",

            color: "black",
          },
        }}
      >
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
          onRowClick={(e) => navigateToDetails(e.row)}
        />
      </ItemStack>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={alertOption.severity}>
          <strong>{alertOption.msg}</strong>
        </Alert>
      </Snackbar>
    </Stack>
  );
};
export default HistoryDatagrid;
