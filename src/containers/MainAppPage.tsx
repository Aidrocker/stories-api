import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Header from 'src/components/header/Header';
import HistoryList from 'src/components/history/history-list/HistoryList';
import { logout } from 'src/store/actions';


const MainAppPage: React.FC<RouteComponentProps>  = ({history}) => {
    const dispatch = useDispatch()
    const login =  useSelector((state:RootStateOrAny) => state.auth.login);
    const sublogin =  useSelector((state:RootStateOrAny) => state.auth.sublogin);
    const isLoggedIn = useSelector((state:RootStateOrAny) => state.auth.sessionKey?.length)
    useEffect(() => {
        if (!isLoggedIn) {
          history.push('/');
        }
      }, [isLoggedIn, history]);
    
      const doLogOut = () => {
        dispatch(
          logout()
        );
      };

      function onSubmit(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        doLogOut();
      }
    return (
        <div className='main-app'>
            <Header login={login } onSubmit={onSubmit} sublogin={sublogin}/>
            <HistoryList/>
            {/* <div>
                <div>
                    <div>Title</div>
                    <div>Window </div>
                </div>
            </div>

            <div>
                <div>
                    <div>Title</div>
                    <div>Window </div>
                </div>
                <div>
                    <div>Title</div>
                    <div>Window </div>
                </div>
            </div>

            <div>
                <div>
                    <div>Button send</div>
                </div>
                <div>
                    <div>Link to github</div>
                </div>
                <div>
                    <div>Align right</div>
                    <div>форматировать</div>
                </div>
            </div> */}

        </div>
    )
}

export default withRouter(MainAppPage);