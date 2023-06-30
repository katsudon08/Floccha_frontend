import React from "react";
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ContextProvider } from "./components/ContextProvider";

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
            <ContextProvider />
        </ThemeProvider >
    )
}

export default App
