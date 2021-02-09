import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Footer from 'src/components/footer/Footer';
import Header from 'src/components/header/Header';
import HistoryList from 'src/components/history/history-list/HistoryList';
import JsonEditor from 'src/components/json-editor/JsonEditor';
import { logout, setSize } from 'src/store/actions';


const MainAppPage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch()
  const login = useSelector((state: RootStateOrAny) => state.auth.login);
  const sublogin = useSelector((state: RootStateOrAny) => state.auth.sublogin);
  const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth.sessionKey?.length);
  const isBigSize = useSelector((state: RootStateOrAny) => state.auth.isBigSizeWindow);
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

  function handleSetState() {
    dispatch(setSize());
  }
  return (
    <div className='main-app'>
      <Header login={login} onSubmit={onSubmit} sublogin={sublogin} setSize={handleSetState} isBigSize={isBigSize} />
      <HistoryList />
      <JsonEditor />
      <Footer />

    </div>
  )
}

export default withRouter(MainAppPage);