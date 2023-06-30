import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { EditorState } from 'draft-js'
import { Create_page } from '../pages/Create_page';
import { Header } from './Header';

const EditorContext = React.createContext({
    editorState: EditorState,
    setEditorState: (newState: EditorState) => EditorState
});

export const useEditorContext = React.useContext(EditorContext);

export const ContextProvider = () => {
    const [editorState, setEditorState] = React.useState<EditorState>(
        EditorState.createEmpty()
    );

    return (
        <EditorContext.Provider value={{editorState, setEditorState}}>
            <Box sx={{ height: "100%", width: "100%" }}>
                <Grid
                    container
                    direction="column"
                    sx={{ minHeight: "100vh", maxHeight: "100vh", minWidth: "100vh" }}
                >
                    <Grid item xs="auto">
                        <Header />
                    </Grid>
                    <Grid item xs sx={{ backgroundColor: "#1526" }}>
                        <Create_page />
                        {/* <TextEditor /> */}
                    </Grid>
                    {/* <Grid item xs sx={{backgroundColor: "#1526"}}> */}
                    {/* 生成画面を書く */}
                    {/* <Create_page /> */}
                    {/* </Grid> */}
                    {/* <Grid item xs="auto"> */}
                    {/* <Footer /> */}
                    {/* </Grid> */}
                </Grid>
            </Box>
        </EditorContext.Provider>
    )
}
