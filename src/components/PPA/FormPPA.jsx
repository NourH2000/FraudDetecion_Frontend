import React,{useState} from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { format } from 'date-fns';
import { Button } from '@mui/material';
import moment from 'moment';


const FormPPA = () => {
  const today = format(new Date(), 'MM/dd/yyyy')
  const [value, setValue] = useState({
    from: today,
    to: today
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}  >
      <Stack spacing={3}>
        <DesktopDatePicker
          label="De"
          inputFormat="MM/dd/yyyy"
          value={value.from}
          renderInput={(params) => <TextField {...params} />}
    onChange={(e)=>setValue({...value,from:moment(e).format("DD/MM/yyyy")})}
        />

<DesktopDatePicker
          label="Jusqu'a"
          inputFormat="MM/dd/yyyy"
          value={value.to}
          renderInput={(params) => <TextField {...params} />}
          onChange={(e)=>setValue({...value,to:moment(e).format("DD/MM/yyyy")})}

        />
        <Button variant="contained"  >Contained</Button>
        </Stack>
    </LocalizationProvider>
  )
}

export default FormPPA