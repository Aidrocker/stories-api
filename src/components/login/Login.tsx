import React from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import 'src/styles/Login.css';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

interface LoginProps {
    onSubmit(e: any): void
    setLogin(login: string): void
    setSubLogin(login: string): void
    setPassword(login: string): void
    loading: boolean
    isError: boolean
}

const LogoStyled = styled.img`
 
`;

const Login: React.FC<LoginProps> = ({ onSubmit, setLogin, setSubLogin, setPassword, loading, isError }) => {
    
    return (
        <div className='login'>
            <div className='login__icon'>
                <LogoStyled src="/icons/logo.svg" alt="" />
            </div>
            <div className='login__form-container'>
                <div className='form-container__title'>
                    <h3>API-консолька</h3>
                </div>
                {isError && <ErrorBoundary text='Вход не вышел' src={'/icons/meh.svg'}/>}
                <Form
                    action='/'
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting, pristine }) => (
                        <form onSubmit={handleSubmit} className='login__form'>
                            <Field name="login">
                                {({ input }) => (
                                    <div className={`container__login ${isError && 'container__error'}`}>
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
                                    </div>
                                )}
                            </Field>
                            <Field name="sublogin">
                                {({ input }) => (
                                    <div className='container__login'>
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
                                    </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input }) => (
                                    <div className={`container__login ${isError && 'container__error'}`}>
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
                                    </div>
                                )}
                            </Field>
                            <div className="button">
                               
                                {loading ? 
                                    <button className='button__loading'>
                                        <LogoStyled src="/icons/loader.svg" alt="" />
                                    </button>
                                   : 
                                   <button type="submit" disabled={submitting || pristine} onClick={onSubmit} className='button__log-in'>
                                        Войти
                                   </button>
                                }
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>

    )
}

export default Login;