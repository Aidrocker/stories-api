import React from 'react';
import 'src/styles/HistoryItem.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const HistoryItem: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='history-item'>
            <div className='history-item__status status-active'></div>
            <span className='history-item__title'>
                track.get
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

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem key='Выполнить' onClick={handleClose}>
                    Выполнить   
                </MenuItem>
                <MenuItem key='Скопировать' onClick={handleClose}>
                    Скопировать
                </MenuItem>
                <MenuItem key='Удалить' onClick={handleClose}>
                    Удалить
                </MenuItem>
            </Menu>
        </div>
    )
}

export default HistoryItem;