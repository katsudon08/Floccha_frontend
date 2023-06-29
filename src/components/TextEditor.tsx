import React from 'react';
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'

// react useContextでデータを共有？

// hiddenを使うのかもしれない
export const TextEditor = () => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    )

    return (
        <Editor
            editorState={editorState}
            onChange={setEditorState}
            placeholder='ここから入力する'
        />
    );
    // return <div>TextEditor</div>
}
