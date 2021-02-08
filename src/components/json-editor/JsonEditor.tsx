import React from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'src/styles/JsonEditor.css'

let value = {
    this: 'this',
    is: 'is',
    'JSON!!!111!!': 'JSON!!!111!!',
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
};

const JsonEditor: React.FC = () => {


    return (
        <div  className='riot'>
            <Editor
                name={'lol'}
                search={false}
                navigationBar={false}
                statusBar={false}
                value={value}
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
                value={value}
                mode={Editor.modes.view}
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