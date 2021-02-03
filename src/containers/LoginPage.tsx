import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { authenticate } from 'src/store/actions/auth';
import Login from 'src/components/login/Login';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading);
  const isLoggedIn = useSelector((state: RootStateOrAny) => !!state.auth.sessionKey?.length);
  const date = useSelector((state:RootStateOrAny) => state);
  console.log(date)

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/mainapp');
    }
  }, [isLoggedIn]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  function onSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    doLogin();
  }
  return (
    <Wrapper>
      <Login 
        setLogin={setLogin} 
        setPassword={setPassword} 
        setSubLogin={setSubLogin} 
        onSubmit={onSubmit} 
        loading={loading} 
        isLoggedIn={isLoggedIn}
      />
    </Wrapper>
  );
}

export default withRouter(LoginPage);
