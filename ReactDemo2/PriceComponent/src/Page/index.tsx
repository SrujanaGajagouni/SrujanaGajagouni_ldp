import Template from "../components/template";
import { Stack, ThemeProvider } from "@mui/material";
import theme from "../Theme";


const MainPage = () => {
  return (
    <Stack>
        <ThemeProvider theme={theme}>
            <Template />
        </ThemeProvider>
    </Stack>
  )
}

export default MainPage
