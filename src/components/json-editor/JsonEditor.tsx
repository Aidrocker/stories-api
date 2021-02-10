import React, {  useState } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'src/styles/JsonEditor.css';
import ace from 'brace';
import Ajv from 'ajv';

interface JsonEditorProps {
    setJsonVal(obj:object): void
    jsonVal: object

}

const JsonEditor:React.FC<JsonEditorProps> = ({setJsonVal, jsonVal}) => {
    const [isDown, setPositionMouseEvent] = useState(false);
    const [editorOneWidth, setEditorOneWidth] = useState(100)

    const mouseDown = (e: { clientX: any; }) => {
        setPositionMouseEvent(true)
        let prevX = e.clientX;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        
        function mousemove (e){
            setEditorOneWidth(prev => prev - (prevX - e.clientX))
            prevX = e.clientX
        }

        function mouseup(){
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            setPositionMouseEvent(false)
        }
    }

    function handleChange(json) {
        setJsonVal(json)
    }
    const schema = {
        type: 'object',
        properties: {
            some: {
                type: 'integer'
            }
        },
        required: ['some']
    };

    return (
        
        <div className='riot'>
            
            <Editor
                name={'lol'}
                schema={schema}
                search={false}
                navigationBar={false}
                statusBar={false}
                value={jsonVal}
                mode={Editor.modes.code}
                htmlElementProps={{
                    style: {
                        width: `${editorOneWidth}rem`
                    }
                }}
                ace={ace}
                onChange={handleChange}
                ajv={Ajv({ allErrors: true, verbose: true })}
            />
            <div className='drower' onMouseDown={mouseDown}>
                <svg
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='drower__svg'
                >
                    <path d="M12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s
                 0.9 2 2 2 Z m 0 2 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s 
                 -0.9 -2 -2 -2 Z m 
                 0 6 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 
                 2 s 2 -0.9 2 -2 s -0.9
                -2 -2 -2 Z" />
                </svg>
            </div>
            <Editor
                search={false}
                navigationBar={false}
                statusBar={false}
                value={jsonVal}
                mode={Editor.modes.view}
                htmlElementProps={{
                    style: {
                        width: '100%'
                    }
                }}
            />
        </div>
    );


}

export default JsonEditor;