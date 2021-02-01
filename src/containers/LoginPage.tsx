import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { authenticate } from 'src/store/actions/auth';


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
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading);
  const isLoggedIn = useSelector((state: RootStateOrAny) => !!state.auth.sessionKey?.length)

  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn)
      props.history.push('/mainapp');
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
  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <Form
        action='/'
        onSubmit={onSubmit}
        validate={(values: any) => {
          const errors: any = {}
          if (!values.login) {
            errors.login = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          if (!values.sublogin) {
            errors.sublogin = 'Required'
          }
          return errors
        }}

        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name="login">
              {({ input, meta }) => (
                <div>
                  <label>Login</label>
                  <input
                    {...input}
                    onChange={(e) => {
                      input.onChange(e)
                      setLogin(e.target.value)
                    }}
                    type="text"
                    placeholder="Login" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="sublogin">
              {({ input, meta }) => (
                <div>
                  <label>Sublogin</label>
                  <input
                    {...input}
                    onChange={(e) => {
                      input.onChange(e)
                      setSubLogin(e.target.value)
                    }}
                    type="text"
                    placeholder="Sublogin" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input
                    {...input}
                    onChange={(e) => {
                      input.onChange(e)
                      setPassword(e.target.value)
                    }}
                    type="text"
                    placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting} onClick={onSubmit}>
                Войти
              </button>
            </div>
          </form>
        )}
      />

    </Wrapper>
  );
}

export default withRouter(LoginPage);
