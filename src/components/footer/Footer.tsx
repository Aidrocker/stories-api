import {  Typography } from '@material-ui/core';
import React from 'react';
import 'src/styles/Footer.css';


const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footer__send'>
                <button type="submit" className='button__send'>
                    Отправить
                </button>
            </div>
            <div className='footer__link-github'>
                <Typography>@link-to-your-github</Typography>
            </div>
            <div className='footer__format'>
                    <button className='format__button'>
                        <img src='/icons/align-right.svg' alt='format' />
                        <Typography>Форматировать</Typography>
                    </button>
            </div>
        </div>
    )
}

export default Footer