import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Header from 'src/components/header/Header';
import HistoryList from 'src/components/history/history-list/HistoryList';


const MainAppPage: React.FC<RouteComponentProps>  = ({history}) => {

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

export default withRouter(MainAppPage);