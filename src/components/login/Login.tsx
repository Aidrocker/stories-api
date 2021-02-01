import React from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import 'src/styles/Login.css';

interface LoginProps {
    onSubmit(e: any): void
    setLogin(login: string): void
    setSubLogin(login: string): void
    setPassword(login: string): void
}

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const Login: React.FC<LoginProps> = ({ onSubmit, setLogin, setSubLogin, setPassword }) => {
    return (
        <div className='login'>
            <div className='login__icon'>
                <LogoStyled src="/icons/logo.svg" alt="" />
            </div>
            <div className='login__form-container'>
                <div className='form-container__title'>
                    <h3>API-консолька</h3>
                </div>
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

                    render={({ handleSubmit, submitting, errors }) => (

                        <form onSubmit={handleSubmit} className='login__form'>
                            <Field name="login">
                                {({ input, meta }) => (
                                    <div className='container__login'>
                                        <label>Логин</label>
                                        <input
                                            className='login-input'
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
                                    <div className='container__sublogin'>
                                        <label>Сублогин</label>
                                        <input
                                            className='sublogin__input'
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
                                    <div className='container__password'>
                                        <label>Пароль</label>
                                        <input
                                            className='password__input'
                                            {...input}
                                            onChange={(e) => {
                                                input.onChange(e)
                                                setPassword(e.target.value)
                                            }}
                                            type="password"
                                            placeholder="Password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div className="button">
                                <button type="submit" disabled={submitting} onClick={onSubmit} className='buttons__log-in'>
                                    Войти
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>

        </div>

    )
}

export default Login;