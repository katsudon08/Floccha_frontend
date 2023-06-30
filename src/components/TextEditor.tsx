import React from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'

// hiddenを使うのかもしれない
export const TextEditor = () => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    )

    const saveContent = () => {
        const currentContent = editorState.getCurrentContent();
        const raw = convertToRaw(currentContent);
        console.log(raw);
    }

    return (
        <>
            <div>
                <button onClick={saveContent}>保存</button>
            </div>
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                placeholder='ここから入力する'
            />
        </>
    );
}
