import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import itLocale from "date-fns/locale/it";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";

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
  );
};

export default Form;
