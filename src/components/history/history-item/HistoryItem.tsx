import React from 'react';
import 'src/styles/HistoryItem.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';

interface HistoryItemProps {
    title: string
}



const HistoryItem: React.FC<HistoryItemProps> = ({ title }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event.stopPropagation();
        console.log(event)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className='history-item'>
            <Box onClick={handleClick} className='history-item__container'>
                <div className='history-item__status status-active'></div>
                <span className='history-item__title'>
                    {title}
                </span>
                <svg
                    onClick={handleClick}
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='svg'
                >
                    <path d="M12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 0 2 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z m 0 6 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z" />
                </svg>
            </Box>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem key='Выполнить' onClick={handleClose} classes={{ gutters: 'execute' }}>
                    Выполнить
                </MenuItem>
                <MenuItem key='Скопировать' onClick={handleClose} classes={{ root: 'copy' }}>
                    Скопировать
                </MenuItem>
                <MenuItem key='Удалить' onClick={handleClose} classes={{ root: 'delete' }}>
                    Удалить
                </MenuItem>
            </Menu>

        </Box>
    )
}

export default HistoryItem;