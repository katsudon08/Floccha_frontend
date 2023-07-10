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
    Node,
} from 'reactflow'
import "reactflow/dist/style.css"
import { Container, Box } from "@mui/material";

const initialNodes: Node<undefined | { label: string }>[] = [
    // { id: "node-1", position: { x: 0, y: 0 }, data: { label: "node1" } },
    // { id: "node-2", position: { x: 0, y: 100 }, data: { label: "node2" } },
    // { id: "node-3", position: { x: 200, y: 100 }, data: { label: "node3" } },
];

const initialEdges: Edge<undefined>[] = [
    // { id: "edge-1", source: "node-1", target: "node-2" },
    // { id: "edge-2", source: "node-1", target: "node-3" },
];

export const FlowChart = () => {
    const [nodes, setnodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            // nodes={initialNodes}
            edges={edges}
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
