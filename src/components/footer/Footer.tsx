import { Typography } from '@material-ui/core';
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* <g opacity="0.8"> */}
                            <path d="M21 10H7" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 6H3" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 14H7" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 18H3" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        {/* </g> */}
                    </svg>
                    <Typography>Форматировать</Typography>
                </button>
            </div>
        </div>
    )
}

export default Footer