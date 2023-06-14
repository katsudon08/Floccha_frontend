import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Create_page } from "./pages/Create_page"

function App() {
    const theme = createTheme({
        palette: {
            base_color: {
                main: "#FFFFFF"
            },
            main_color: {
                main: "#6F6F6F"
            },
            accent_color: {
                main: "#2E2E2E"
            },
            selected_text: {
                main: "#00B8E1"
            },
            unselected_text: {
                main: "#85DAFB"
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Create_page />
        </ThemeProvider>
    )
}

export default App
