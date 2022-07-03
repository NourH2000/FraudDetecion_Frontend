import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import itLocale from "date-fns/locale/it";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { Button, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Form = () => {
  const [valueOne, setValueOne] = React.useState(new Date());

  const handleChangevalueOne = (newValueOne) => {
    newValueOne = moment(newValueOne).format("YYYY-MM-DD");
    setValueOne(newValueOne);
    console.log(newValueOne);
  };

  const [valueTwo, setValueTwo] = React.useState(new Date());

  const handleChangevalueTwo = (newValueTwo) => {
    newValueTwo = moment(newValueTwo).format("YYYY-MM-DD");
    setValueTwo(newValueTwo);
  };

  return (
    <Grid>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="De"
            inputFormat="dd/MM/yyyy"
            value={valueOne}
            onChange={handleChangevalueOne}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{ ...params.inputProps, placeholder: "dd/mm/aaaa" }}
              />
            )}
          />

          <DesktopDatePicker
            label="Jusqu'a"
            inputFormat="dd/MM/yyyy"
            value={valueTwo}
            onChange={handleChangevalueTwo}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{ ...params.inputProps, placeholder: "dd/mm/aaaa" }}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Contained</Button>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Grid>
  );
};

export default Form;
