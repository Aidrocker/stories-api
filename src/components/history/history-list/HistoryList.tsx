import React from 'react';
import 'src/styles/HistoryList.css';
import HistoryItem from '../history-item/HistoryItem';

const HistoryList: React.FC = () => {
    const handleTarget = (e) =>{
        // e.stopPropagation();
        // e.preventDefault();
        // console.log(e.target)
    }
    return (
        <div className='history-list'>
            <div className='history-list__wrapper' onClick={handleTarget}>
                <div className='history-list__wrapper--after' onClick={e => e.preventDefault()}/>
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L19 19" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19 1L1 19" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default HistoryList;