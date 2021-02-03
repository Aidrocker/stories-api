import React from 'react';
import 'src/styles/HistoryList.css';
import HistoryItem from '../history-item/HistoryItem';
import Tabs from '@material-ui/core/Tabs';
import {  Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const HistoryList: React.FC = () => {
    return (
        <div className='history-list'>
            <Tabs
                classes={{
                    root: 'vertical-align'
                }}
                orientation="horizontal"
                variant="scrollable"
                scrollButtons="off"
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
            <Button classes={{
                root: 'delete-history-button'
            }}>
                <HighlightOffIcon/>
            </Button>
        </div>
    )
}

export default HistoryList;