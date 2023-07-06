import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button, Box, Grid, Container, Card, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import { useGetElementProperty } from './getElementPropHook';
import { FlowChart } from './FlowChart';


// hiddenを使うのかもしれない
export const CreatePart = ({ containerBottom }: { containerBottom: number }) => {
    const [elementProp, setElementProp] = useState<number[]>([0]);
    const [editorState, setEditorState] = React.useState<EditorState>(
        EditorState.createEmpty()
    );

    const targetRef = useRef(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(targetRef);

    // 代入すると0になってしまう
    useEffect(() => {
        setElementProp([getElementProperty("height"), getElementProperty("width")]);
    }, []);

    console.log("buttonBottom", elementProp);
    console.log("containerBottom", containerBottom);

    // おそらくpadding: 2の値が50px
    const editorHeight = containerBottom - elementProp[0] - 50;
    const editorWidth = elementProp[1] / 5 * 3;
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
                <Grid item xs >
                    <Grid container direction="row">
                        <Grid item xs>
                            <Box sx={{ height: editorHeight, width: editorWidth, mt: 2, border: 1, borderColor: "divider", overflowX: "auto", borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }}>
                                <Box sx={{ height: "100%", width: "100%", padding: 1, overflowY: "auto", whiteSpace: "nowrap", position: "relative" }}>
                                    <Editor
                                        editorState={editorState}
                                        onChange={setEditorState}
                                        placeholder='ここから入力する'
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box sx={{ height: editorHeight, width: "100%", mt: 2, border: 1, borderColor: "divider", overflowX: "auto", borderTopRightRadius: 7, borderBottomRightRadius: 7 }}>
                                <Box sx={{ height: "100%", width: "100%", padding: 1, overflowY: "auto", whiteSpace: "nowrap", position: "relative" }}>
                                    <FlowChart />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}