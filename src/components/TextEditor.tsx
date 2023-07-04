import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button, Box, Grid, Container, Card, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import { useGetElementProperty } from './getElementPropHook';


// hiddenを使うのかもしれない
export const TextEditor = ({ containerBottom }: { containerBottom: number }) => {
    const [elementProp, setElementProp] = useState<number>(0);
    const [editorState, setEditorState] = React.useState<EditorState>(
        EditorState.createEmpty()
    );

    const targetRef = useRef(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(targetRef);

    // 代入すると0になってしまう
    useEffect(() => {
        setElementProp(getElementProperty("height"));
    }, []);

    console.log("buttonBottom", elementProp);
    console.log("containerBottom", containerBottom);

    // おそらくpadding: 2の値が50px
    const editorHeight = containerBottom - elementProp - 50;
    console.log("editorHeight", editorHeight);

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
                <Grid item xs="auto" ref={targetRef}>
                    <Button variant='outlined' onClick={saveContent} >save</Button>
                </Grid>
                <Grid item xs>
                    <Box sx={{ height: editorHeight, mt: 2 }}>
                        <Card sx={{ height: "100%" }}>
                            <Editor
                                editorState={editorState}
                                onChange={setEditorState}
                                placeholder='ここから入力する'
                            />
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}