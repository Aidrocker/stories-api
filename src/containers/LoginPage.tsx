import React, {useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
// import {Form, Field} from 'react-final-form';
import styled from 'styled-components';

import {authenticate} from 'src/store/actions/auth';

interface HomeProps extends RouteComponentProps<any> {
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const LoginPage: React.FC<HomeProps> = (props) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state:RootStateOrAny) => state.auth.loading);
  const isLoggedIn = useSelector((state:RootStateOrAny) => !!state.auth.sessionKey?.length)
  console.log('isLoggedIn', isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      props.history.push('/console');
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

  function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    doLogin();
  }
  // action="/"
  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <div onSubmit={onSubmit} >
        <input name="login"  value={login} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} placeholder="Логин" />
        <input name="sublogin"  value={sublogin} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubLogin(e.target.value)} placeholder="Сублогин" />
        <input name="password"  value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder="Пароль" />
        <button type="submit"  onClick={onSubmit}>
          Отправить
        </button>
      </div>
    </Wrapper>
  );
}

// component="input"
// component="input"
// component="input"

export default withRouter(LoginPage);
