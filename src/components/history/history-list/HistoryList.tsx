import React from 'react';
import 'src/styles/HistoryList.css';
import HistoryItem from '../history-item/HistoryItem';

const HistoryList: React.FC = () => {
    return (
        <div className='history-list'>
            <div className='history-list__wrapper'>
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
            <div className='history-list__delite'>
                <button className='delite__button'>
                    <img src='/icons/x.svg' alt='delete'/>
                </button>
            </div>
        </div>


    )
}

export default HistoryList;