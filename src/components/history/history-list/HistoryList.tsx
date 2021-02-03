import React from 'react';
import 'src/styles/HistoryList.css';
import HistoryItem from '../history-item/HistoryItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const HistoryList: React.FC = () => {
    return (
        <div className='history-list'>
            
            <Tabs
                classes={{
                    root: 'history-list'
                }}
                orientation="horizontal"
                variant="scrollable"
            >
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
                <HistoryItem title='track.get' />
            </Tabs>
        </div>
    )
}

export default HistoryList;