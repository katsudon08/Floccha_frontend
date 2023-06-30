import React from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { useEditorContext } from './ContextProvider';

// hiddenを使うのかもしれない
export const TextEditor = () => {
    const {editorState, setEditorState} = useEditorContext();

    const saveContent = () => {
        const currentContent = editorState.getCurrentContent();
        const raw = convertToRaw(currentContent);
        // console.log(raw);
        console.log(typeof(editorState))
        console.log(typeof(setEditorState))
        console.log(editorState)
        console.log(setEditorState)
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
