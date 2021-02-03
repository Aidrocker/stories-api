import React from 'react';
import Header from 'src/components/header/Header';
import HistoryItem from 'src/components/history/history-item/HistoryItem';
import HistoryList from 'src/components/history/history-list/HistoryList';


export const MainApp: React.FC = () => {

    return (
        <div className='main-app'>
            <Header/>
            <HistoryList/>
            {/* <div>
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
            </div> */}

        </div>
    )
}