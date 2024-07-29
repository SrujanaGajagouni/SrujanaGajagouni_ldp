import React from "react";
import { Button, ButtonGroup, IconButton,  Stack, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiPrac = () =>{
    return(
        <Stack  spacing={4}>
            <Typography variant='h3'>H3 heading</Typography>
            <Typography variant ='subtitle1'>Sub title1</Typography>
            <Typography variant ='subtitle2'>Sub title2</Typography>

            <Stack display='block'spacing={2} direction='row'>
                <Button variant='contained' size='small'>Contained</Button>
                <Button variant='outlined' size='medium'>Outlined</Button>
                <Button variant='text' size='large'>Text</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained'color='secondary'>Secondary</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='inherit'>Inherit</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <ButtonGroup variant='contained' color="primary">
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon/>} >Send</Button>
                <Button variant='contained'endIcon={<SendIcon/>}>Send</Button>
                <IconButton color="success"><SendIcon /></IconButton>
            </Stack>

        </Stack>
        
    )
}
export default MuiPrac 