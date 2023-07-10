import React, { useCallback } from "react"
// import ReactFlow, {
//     useNodesState,
//     useEdgesState,
//     addEdge,
//     Connection,
//     Edge
// } from "reactflow"
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Edge,
    Connection,
} from 'reactflow'
import "reactflow/dist/style.css"
import { Container, Box } from "@mui/material";

const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "最初" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "終わり" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const FlowChart = () => {
    const [nodes, setnodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    return (
        <ReactFlow
            // nodes={nodes}
            // nodes={initialNodes}
            // edges={edges}
            // edges={initialEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >
            <Controls />
            <MiniMap />
            <Background gap={12} size={1} />
        </ReactFlow>
    )
}
