import React from "react";

import { 
  InputAdornment, FormControl, Box, OutlinedInput, InputLabel, Stack, TextField, MenuItem, FormLabel, Radio, RadioGroup, FormControlLabel, Checkbox, Slider} from "@mui/material";

const MuiText = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}>
      <Stack spacing={4}>
        <Stack display="block" spacing={2} direction="row">
          <FormControl variant="outlined" size="small" required>
            <InputLabel htmlFor="static-label-textfield">Name</InputLabel>
            <OutlinedInput
              id="static-label-textfield"
              label="Name"
              startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
          </FormControl>
          <TextField type="password" label="Password" size="small" required helperText="Do not share your password" />
          <TextField type="password" label="Password" size="small" required disabled />
          <TextField label="Read Only" size="small" value="Srujana" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
          <TextField label='Amount' size='small' 
            InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
          <TextField label='Weight' size='small' 
            InputProps={{endAdornment: <InputAdornment position="end">Kg</InputAdornment>}}/>
        </Stack>
        <Stack display='block'>
          <TextField 
            label="select country" 
            select 
            size='small' 
            style={{width:200}}
          >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AUS'>Australia</MenuItem>
          </TextField>
        </Stack>
        <Box>
          <FormControl>
            <FormLabel id='job-experience-label'>
              Years Of Experience
            </FormLabel>
            <RadioGroup name='job-experience' aria-label="job-experience-label">
              <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
              <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
              <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControlLabel label='I accept terms and conditions' control={<Checkbox />} />
        </Box>
        <Box 
          sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: 200, 
            height: '100px' 
          }}
        >
          <Slider color="primary" max={200} defaultValue={30} step={20} />
        </Box>
      </Stack>
    </Box>
  );
}

export default MuiText