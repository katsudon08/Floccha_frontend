import React, { useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid';
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { useGetElementProperty } from "./Hooks/getElementPropHook";
import { Header } from "./components/Header";
import { CreatePart } from "./components/CreatePart";

function App() {
    const [elementProp, setElementProp] = useState<number>(0);

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

    const containerRef = useRef(null);
    const {getElementProperty} = useGetElementProperty(containerRef);

    useEffect(() => {
        setElementProp(getElementProperty("height"))
    }, [])

    // console.log("functionOut", elementProp);

    return (
        // contextかuseStateのどちらかを使って同会層での値の受け渡しを行う
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ minHeight: "100vh" }} ref={containerRef}>
                <CreatePart containerBottom={elementProp} />
            </Box>
        </ThemeProvider >
    )
}

export default App
