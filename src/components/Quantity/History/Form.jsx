import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { Button, Grid, Typography, Paper, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { styled, createStyles } from "@mui/material/styles";

const Form = () => {
  // item stack
  const ItemStack = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));
  //initial values
  const today = new Date();
  const [valueOne, setValueOne] = useState(moment(today).format("YYYY-MM-DD"));
  const [valueTwo, setValueTwo] = useState(moment(today).format("YYYY-MM-DD"));

  // values choosed
  const handleChangevalueOne = (newValueOne) => {
    newValueOne = moment(newValueOne).format("YYYY-MM-DD");
    setValueOne(newValueOne);
  };

  const handleChangevalueTwo = (newValueTwo) => {
    newValueTwo = moment(newValueTwo).format("YYYY-MM-DD");
    setValueTwo(newValueTwo);
  };

  // get data and call the model :
  const data = { date_debut: valueOne, date_fin: valueTwo };
  const callModel = async (data) => {
    const res = await axios.post(
      "http://localhost:8000/models/quantitymodel",
      data
    );
  };

  // call model handler button
  const callModelHandler = () => {
    callModel(data);
  };

  // find the max and min date allowed
  const [maxDate, setMaxDate] = useState(moment(today).format("YYYY-MM-DD"));
  const [minDate, setMinDate] = useState(moment(today).format("YYYY-MM-DD"));

  useEffect(() => {
    axios.get("http://localhost:8000/models/getMindate").then((response) => {
      setMinDate(response.data.date_paiement_min);
      setValueOne(response.data.date_paiement_min);
    });
  }, []);
  console.log(minDate);
  useEffect(() => {
    axios.get("http://localhost:8000/models/getMaxdate").then((response) => {
      setMaxDate(response.data.date_paiement_max);
      setValueTwo(response.data.date_paiement_max);
    });
  }, []);

  // Clear all
  const ClearAll = () => {
    setValueOne(minDate);
    setValueTwo(maxDate);
  };

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
          sx={{ fontWeight: "bold", marginBottom: "5%", marginTop: "5%" }}
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
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={2}>
            <DesktopDatePicker
              label="De"
              inputFormat="dd/MM/yyyy"
              value={valueOne}
              minDate={minDate}
              maxDate={maxDate}
              onChange={handleChangevalueOne}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "dd/mm/aaaa",
                  }}
                />
              )}
            />

            <DesktopDatePicker
              label="Jusqu'a"
              inputFormat="dd/MM/yyyy"
              value={valueTwo}
              minDate={minDate}
              maxDate={maxDate}
              onChange={handleChangevalueTwo}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "dd/mm/aaaa",
                  }}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
      </ItemStack>
      <ItemStack
        elevation={0}
        sx={{
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="text"
            endIcon={<SendIcon />}
            onClick={callModelHandler}
          >
            Send
          </Button>
          <IconButton aria-label="delete" size="large" onClick={ClearAll}>
            <ClearAllIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </ItemStack>
    </Stack>
  );
};

export default Form;
