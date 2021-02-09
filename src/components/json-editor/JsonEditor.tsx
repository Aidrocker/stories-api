import React, { Component } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'src/styles/JsonEditor.css';

type JsonEditorProps = {
    isDown: boolean
    editorTwoWidth: string
    editorOneWidth: number
}

const defaultValue = {};

class JsonEditor extends Component<{}, JsonEditorProps> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isDown: false,
            editorTwoWidth: '100%',
            editorOneWidth: 700
        }
    }

    mouseDown = (e: { clientX: any; }) => {
        this.setState({isDown: true});
        let prevX = e.clientX;

        const mousemove =  (e) =>{
            this.setState({editorOneWidth: this.state.editorOneWidth - (prevX - e.clientX)})
            prevX = e.clientX
        }

        const mouseup = () => {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            this.setState({isDown: false})
        }

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
    }

   

    renderEditors = () => {
        return (
            <div className='riot'>
                <Editor
                    name={'lol'}
                    search={false}
                    navigationBar={false}
                    statusBar={false}
                    value={defaultValue}
                    mode={Editor.modes.code}
                    htmlElementProps={{
                        style: {
                            width: `${this.state.editorOneWidth}px`
                        }
                    }}
                />
                <div className='drower' onMouseDown={this.mouseDown}>
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
                    value={defaultValue}
                    mode={Editor.modes.text}
                    htmlElementProps={{
                        style: {
                            width: this.state.editorTwoWidth
                        }
                    }}
                />
            </div>
        )
    }
    setmouseEvent = (isIt: any) => this.setState({ isDown: isIt });

    render() {
        window.addEventListener('mouseup', () => {
            console.log('element')
            return this.setState({editorOneWidth: 300})
        })
        return (
            <>
                {this.renderEditors()}
            </>
        );

    }
}

export default JsonEditor;