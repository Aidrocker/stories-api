import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { logout } from 'src/store/actions';
import 'src/styles/Header.css';

const Header: React.FC<RouteComponentProps> = ({history}) => {
    const dispatch = useDispatch();

    const doLogOut = () => {
        dispatch(
          logout()
        );
        history.push('/')
      };
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
                <Button variant="outlined">
                    some@email.com :  sublogin
                </Button>
                
                <div className='header__log-out'>
                    <Button className='header__log-out-button' onClick={doLogOut}>
                            <img src="/icons/log-out.svg" alt="" />
                    </Button>
                </div>
                <div className='header__scale'>
                    <Button className='header__button-scale'>
                        <img src='/icons/vector.svg' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);