import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, getDefaultKeyBinding } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button, Box, Grid, Container, Card, Paper, Toolbar, AppBar, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { Node, ReactFlowProvider, useNodesState, useEdgesState } from 'reactflow';
import { Edge } from 'reactflow';
import { useGetElementProperty } from '../Hooks/getElementPropHook';
import { FlowChart } from './FlowChart';
// import { initialNodes } from '../flowchartProps/nodes';
// import { initialEdges } from '../flowchartProps/edges';

export const addNodes: Node<undefined | { label: string }>[] = [];
export const addEdges: Edge<undefined | { label: string }>[] = [];

// hiddenを使うのかもしれない
export const CreatePart = ({ containerBottom }: { containerBottom: number }) => {
    // 親コンポーネントのsetnodes, setedgesで子コンポーネントのuseStateの値を変えるために、ここで定義
    const [parentNodes, setParentNodes] = useNodesState([]);
    const [parentEdges, setParentEdges] = useEdgesState([]);

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

    const saveContent = async () => {
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

        // try {
        //     const url = "http://localhost:8080"
        //     const { data } = await axios.post(url, { src: texts });
        //     console.log(data);
        // } catch (error) {
        //     if (axios.isAxiosError(error)) {
        //         console.log(error);
        //     }
        // }

        //! 上記のコードはnetwork_errorを起こして動かないため、下記のコードで代替

        await axios.post("http://localhost:8000", { src: texts })
            .then((response) => {
                const data = response.data;
                console.log(data);
                for (let midRep of data) {
                    // console.log(midRep.id);
                    // console.log(midRep.position);
                    // console.log(midRep.data);
                    let midRepNode = { id: midRep.id, position: midRep.position, data: midRep.data };
                    console.log(midRepNode);
                    setParentNodes((nds) => nds.concat(midRepNode));
                    // console.log(midRep.edgeId);
                    // console.log(midRep.source);
                    // console.log(midRep.target);
                    if (midRep.source === null || midRep.target === null) {
                        console.log("null");
                        continue;
                    }
                    let midRepEdge = { id: midRep.edgeId, source: midRep.source, target: midRep.target };
                    console.log(midRepEdge);
                    setParentEdges((eds) => eds.concat(midRepEdge));
                    console.log("nodes: " + addNodes, "edges: " + addEdges);
                }
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    console.error(error);
                }
            });

        console.log("nodes: " + addNodes, "edges: " + addEdges);
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
                                    <ReactFlowProvider>
                                        <FlowChart parentNodes = {parentNodes} parentEdges = {parentEdges} />
                                    </ReactFlowProvider>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}