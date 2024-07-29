import { Stack} from '@mui/material'
import React, { Children } from 'react';
import Main from '../../organisms/Main.tsx';

interface SummaryProps{
    children:React.ReactNode;
}

const SummaryTemplate: React.FC<SummaryProps> = () => {
    
    return(
        <Stack >
            <Main>{Children}</Main>
        </Stack>
    )
}
export default SummaryTemplate