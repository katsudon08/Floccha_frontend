import React from "react";
import Grid from '@mui/material/Grid';
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { Create_page } from "./pages/Create_page";
import { Header } from "./components/Header";
import { TextEditor } from "./components/TextEditor";

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
        // contextかuseStateのどちらかを使って同会層での値の受け渡しを行う
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ padding: 2, minHeight: "100vh" }}>
                <TextEditor />
            </Box>
        </ThemeProvider >
    )
}

export default App
