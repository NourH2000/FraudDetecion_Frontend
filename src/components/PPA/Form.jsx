import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import itLocale from "date-fns/locale/it";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { Button, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import SendIcon from "@mui/icons-material/Send";
import { postFetcher } from "../../helpers/index";
import axios from "axios";
const Form = () => {
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
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      spacing={3}
      pr={1}
      pl={1}
    >
      <Grid item>
        <Typography variant="h6" sx={{ color: "black " }}>
          New training
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};

export default Form;
