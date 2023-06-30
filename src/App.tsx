import React from "react";
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { EditorState } from 'draft-js'
import { ContextProvider } from "./components/ContextProvider";

function App() {
    // editorState, setEditorStateの型を確認
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    )

    interface IEditorContext {
        eitorState: string;
        setEditorState: React.FC;
    }

    const editorContext = React.createContext<IEditorContext | null>({
        editorState: "",
        setEditorState: (newState: string) => {}
    });

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
            <></>
        </ThemeProvider >
    )
}

export default App
