import React from "react";
import SummaryTemplate from "../../components/template/Template";
import Main from "../../components/organisms/Main.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/index.tsx";
const SummaryPage : React.FC = () => {
    return(
        <ThemeProvider theme={theme}>
            <SummaryTemplate>
                <Main />
            </SummaryTemplate>
        </ThemeProvider>
    )
}

export default SummaryPage