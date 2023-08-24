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
    Node,
} from 'reactflow'
import "reactflow/dist/style.css"
// import { initialNodes } from "../flowchartProps/nodes";
// import { initialEdges } from "../flowchartProps/edges";
import { addNodes } from "./CreatePart"
import { addEdges } from "./CreatePart"

type Props = {
    parentNodes: Node[];
    parentEdges: Edge[];
}

export const FlowChart = (props: Props) => {
    const [nodes, setNodes] = useNodesState([]);
    const [edges, setEdges] = useEdgesState([]);

    const onConnect = useCallback((params: Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodes) => applyNodeChanges(changes, nodes)),
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edges) => applyEdgeChanges(changes, edges)),
        []
    );

    useEffect(() => {
        setNodes((nds) => nds.concat(props.parentNodes))
    }, [props.parentNodes]);

    useEffect(() => {
        setEdges((eds) => eds.concat(props.parentEdges));
    }, [props.parentEdges]);

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