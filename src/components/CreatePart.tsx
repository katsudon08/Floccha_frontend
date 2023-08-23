import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, getDefaultKeyBinding } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button, Box, Grid, Container, Card, Paper, Toolbar, AppBar, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { useGetElementProperty } from '../Hooks/getElementPropHook';
import { FlowChart } from './FlowChart';
import { initialNodes } from '../flowchartProps/nodes';
import { initialEdges } from '../flowchartProps/edges';

// export const initialNodes = [];
// export const initialEdges = [];

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
        // console.log("buttonBottom", elementProp);
        // console.log("containerBottom", containerBottom);
    }, []);

    const editorHeight = containerBottom - elementProp[0] - 30;
    const editorWidth = elementProp[1] / 5 * 3;
    // console.log("editorHeight", editorHeight);

    const saveContent = () => {
        const currentContent = editorState.getCurrentContent();
        const raw = convertToRaw(currentContent);
        const contentBlock = raw.blocks;
        console.log(contentBlock);
        let texts: string[] = [];
        for (let val of contentBlock) {
            texts.push(val.text);
        }
        console.log("text", texts);
        // console.log(typeof (editorState))
        // console.log(typeof (setEditorState))
        // console.log(editorState)
        // console.log(setEditorState)

        axios.post("http://localhost:8000", { src: texts })
            .then(async (response) => {
                const data = response.data;
                console.log(data);
                for await (let midRep of data) {
                    // console.log(midRep.id);
                    // console.log(midRep.position);
                    // console.log(midRep.data);
                    let midRepNode = { id: midRep.id, position: midRep.position, data: midRep.data };
                    console.log(midRepNode);
                    initialNodes.push(midRepNode);
                    // console.log(midRep.edgeId);
                    // console.log(midRep.source);
                    // console.log(midRep.target);
                    if (midRep.source === null || midRep.target === null) {
                        console.log("null");
                        continue;
                    }
                    let midRepEdge = { id: midRep.edgeId, source: midRep.source, target: midRep.target };
                    console.log(midRepEdge);
                    await initialEdges.push(midRepEdge);
                    console.log("nodes" + initialNodes, "edges" + initialEdges);
                }
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    console.error(error);
                }
            });

        // try {
        //     const url = "http://localhost:8080"
        //     const { data } = await axios.post(url, { src: texts });
        //     console.log(data);
        // } catch (error) {
        //     if (axios.isAxiosError(error)) {
        //         console.log(error);
        //     }
        // }

        console.log(`initialNodes: ${initialNodes}`);
        console.log(`initialEdges: ${initialEdges}`);
    }

    // * Tabの実装は難しいかもしれない
    // const onTab = (e: React.KeyboardEvent<{}>) => {
    //     const newEditorState = RichUtils.onTab(e, editorState, 4);
    //     setEditorState(newEditorState);
    //     console.log("Tab")
    // }

    // const { data } = await axios.post("http://localhost:8000", {

    // });

    // 画面のちらつきが気になるので、修正すること
    return (
        <>
            <Grid container direction="column">
                <Grid item xs="auto" ref={targetRef}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Typography sx={{ flexGrow: 1 }} />
                            <Button color='base_color' variant='outlined' onClick={saveContent} >save</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs >
                    <Grid container direction="row" sx={{ paddingRight: 2, paddingLeft: 2 }}>
                        <Grid item xs>
                            <Box sx={{ height: editorHeight, width: editorWidth, mt: 2, border: 1, borderColor: "divider", overflowX: "auto", borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }}>
                                <Box sx={{ height: "100%", width: "100%", padding: 1, overflowY: "auto", whiteSpace: "nowrap", position: "relative" }}>
                                    <Editor
                                        editorState={editorState}
                                        onChange={setEditorState}
                                        placeholder='ここから入力する'
                                    // onTab={onTab}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box sx={{ height: editorHeight, width: "100%", mt: 2, border: 1, borderColor: "divider", overflowX: "auto", borderTopRightRadius: 7, borderBottomRightRadius: 7 }}>
                                <Box sx={{ height: "100%", width: "100%", padding: 1, overflowY: "auto", whiteSpace: "nowrap", position: "relative" }}>
                                    {/* <Container sx={{height: "100%", width: "100%"}}> */}
                                    <FlowChart />
                                    {/* </Container> */}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}