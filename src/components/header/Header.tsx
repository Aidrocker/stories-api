import React from 'react';
import 'src/styles/Header.css';


const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header__icont-and-title'>
                <div className='header__icon'>
                    <img src='/icons/logo.svg' alt='' />
                </div>
                <div className='header_title'>
                    <h3>API-консолька</h3>
                </div>
            </div>
            <div className='header__actions'>
                <div className='header__user'>
                    some@email.com :  sublogin
                </div>
                <div className='header__log-out'>
                    <div className='log-out__title'>
                        Выйти
                    </div>
                    <div className='log-out__button'>
                        <button className='header__log-out-button'>
                            <img src="/icons/log-out.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className='header__scale'>
                    <button className='header__button-scale'>
                        <img src='/icons/vector.svg' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;