import React from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'src/styles/JsonEditor.css'

let defaultValue = {
    
};

const JsonEditor: React.FC = () => {


    return (
        <div  className='riot'>
            <Editor
                name={'lol'}
                search={false}
                navigationBar={false}
                statusBar={false}
                value={defaultValue}
                mode={Editor.modes.code}
                htmlElementProps={{
                   style: {
                       width: '100%'
                   }
                }}
            />
            <div className='drower'>
                <svg
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='drower__svg'
                >
                    <path d="M12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 0 2 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z m 0 6 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z" />
                </svg>
            </div>
            <Editor
                search={false}
                navigationBar={false}
                statusBar={false}
                value={defaultValue}
                mode={Editor.modes.text}
                htmlElementProps={{
                    style: {
                        width: '100%'
                    }
                 }}
            />
        </div>
    )
}

export default JsonEditor;