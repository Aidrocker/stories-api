import React from 'react';
import 'src/styles/HistoryList.css';
import HistoryItem from '../history-item/HistoryItem';


const HistoryList:React.FC = () => {
    return (
        <div className='history-list'>
            <HistoryItem title='track.get'/>
        </div>
    )
}

export default HistoryList;