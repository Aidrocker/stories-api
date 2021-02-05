import React from 'react';
import 'src/styles/HistoryList.css';
import HistoryItem from '../history-item/HistoryItem';

const HistoryList: React.FC = () => {
    return (
        <div className='history-list'>
            <div className='wrapper'>
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
            </div>
            <div>
               X
            </div>
        </div>


    )
}

export default HistoryList;