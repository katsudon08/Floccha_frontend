import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Create_page } from "./pages/Create_page"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
    const theme = createTheme({
        palette: {
            base_color: {
                main: "#FFFFFF"
            },
            main_color: {
                main: "#383838"
            },
            accent_color: {
                main: "#2E2E2E"
            },
            selected_text: {
                main: "#00B8E1"
            },
            unselected_text: {
                main: "#85DAFB"
            },
            selected_base_color: {
                main: "#919191"
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Grid
                    container
                    direction="column"
                    sx={{ minHeight: "100vh" }}
                >
                    <Grid item xs="auto">
                        <Header />
                    </Grid>
                    <Grid item xs sx={{backgroundColor: "#1526"}}>
                        {/* 生成画面を書く */}
                        <Create_page />
                    </Grid>
                    <Grid item xs="auto">
                        <Footer />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default App
