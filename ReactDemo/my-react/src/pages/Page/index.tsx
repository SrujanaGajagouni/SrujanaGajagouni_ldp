import React from "react";
import TemplatePage from "../../components/template/TemplatePage";
import { ThemeProvider } from "@emotion/react";
import theme from '../../../src/Theme'

const FinalPage : React.FC = () => {
    return(
        <ThemeProvider theme={theme}>
            <TemplatePage />
        </ThemeProvider>
        
    )
}
export default FinalPage