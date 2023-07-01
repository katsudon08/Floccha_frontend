import React from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button, Box, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';

// hiddenを使うのかもしれない
export const TextEditor = () => {
    const [editorState, setEditorState] = React.useState<EditorState>(
        EditorState.createEmpty()
    );

    const saveContent = () => {
        const currentContent = editorState.getCurrentContent();
        const raw = convertToRaw(currentContent);
        console.log(raw);
        // console.log(typeof (editorState))
        // console.log(typeof (setEditorState))
        // console.log(editorState)
        // console.log(setEditorState)
    }

    return (
        <>
            <Grid container direction="column">
                <Grid item xs="auto">
                    <Button variant='outlined' onClick={saveContent} sx={{ marginBottom: 1 }}>save</Button>
                </Grid>
                <Grid item xs>
                    <Box sx={{
                        border: 1, borderRadius: 1, borderColor: "divider"
                    }}>
                        <Editor
                            editorState={editorState}
                            onChange={setEditorState}
                            placeholder='ここから入力する'
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}