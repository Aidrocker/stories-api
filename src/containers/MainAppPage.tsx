import React from 'react';
import Header from 'src/components/header/Header';


export const MainApp: React.FC = () => {

    return (
        <div>
            <Header/>
            <div>
                <div>
                    <div>Title</div>
                    <div>Window </div>
                </div>
            </div>

            <div>
                <div>
                    <div>Title</div>
                    <div>Window </div>
                </div>
                <div>
                    <div>Title</div>
                    <div>Window </div>
                </div>
            </div>

            <div>
                <div>
                    <div>Button send</div>
                </div>
                <div>
                    <div>Link to github</div>
                </div>
                <div>
                    <div>Align right</div>
                    <div>форматировать</div>
                </div>
            </div>

        </div>
    )
}