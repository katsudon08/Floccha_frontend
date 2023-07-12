import { useCallback } from "react"
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
} from 'reactflow'
import "reactflow/dist/style.css"
import { initialNodes } from "../flowchartProps/nodes";
import { initialEdges } from "../flowchartProps/edges";

export const FlowChart = () => {
    const [nodes, setnodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
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