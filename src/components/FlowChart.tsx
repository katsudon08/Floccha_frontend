import { useCallback, useEffect } from "react"
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    applyNodeChanges,
    NodeChange,
    EdgeChange,
    applyEdgeChanges,
    Edge,
} from 'reactflow'
import "reactflow/dist/style.css"
// import { initialNodes } from "../flowchartProps/nodes";
// import { initialEdges } from "../flowchartProps/edges";
import { addNodes } from "./CreatePart"
import { addEdges } from "./CreatePart"

export const FlowChart = ({ parentNodes, parentEdges }: { parentNodes: Node[], parentEdges: Edge[] }) => {
    console.log("flowchart: " + addNodes)
    const [nodes, setNodes] = useNodesState([]);
    const [edges, setEdges] = useEdgesState([]);

    const onConnect = useCallback((params: Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodes) => applyNodeChanges(changes, nodes)),
        [addNodes]
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edges) => applyEdgeChanges(changes, edges)),
        [addEdges]
    );

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