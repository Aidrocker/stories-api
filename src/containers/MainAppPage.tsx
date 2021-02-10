import React, { useEffect, useRef, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Footer from 'src/components/footer/Footer';
import Header from 'src/components/header/Header';
import HistoryList from 'src/components/history/history-list/HistoryList';
import JsonEditor from 'src/components/json-editor/JsonEditor';
import { logout } from 'src/store/actions';


const MainAppPage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(false)
  const login = useSelector((state: RootStateOrAny) => state.auth.login);
  const sublogin = useSelector((state: RootStateOrAny) => state.auth.sublogin);
  const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth.sessionKey?.length);
  const [jsonVal, setJsonVal] = useState({})
  const app = useRef(null)
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
    <div className='main-app' ref={app}>
      <Header login={login} onSubmit={onSubmit} sublogin={sublogin} setSize={setSize} isBigSize={size} appRef={app}/>
      <HistoryList />
      <JsonEditor  setJsonVal={setJsonVal} jsonVal={jsonVal}/>
      <Footer />
    </div>
  )
}

export default withRouter(MainAppPage);