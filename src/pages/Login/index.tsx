  import './Login.scss';

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

import logo from '../../assets/fake_logo.png'
import MyInput from '../../components/atoms/MyInput';
import MyPrimaryButton from '../../components/atoms/MyPrimaryButton';
import MyCheckbox from '../../components/atoms/MyCheckbox';
import User from '../../model/User';
import { loginUser } from '../../store/user/actions'
import { Dispatch } from '@reduxjs/toolkit';

interface LoginProps {
  user: any,
  dispatch: Dispatch
}

const Login = (props: LoginProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.user.username.length > 0) {
      navigate('/');
    }
  });

  const [login, setLogin ] = useState(new User());

  const onLogin = (e: any) => {
    e.preventDefault();
    if (login.password.length < 4) {
      alert('Senha muito curta!');
      return;
    }
    if (login.username.trim().length < 4) {
      alert('Nome de usuário muito curto!');
      return;
    }
    
    props.dispatch(loginUser(login))
    navigate('/');
    
  };
  
  const setUsername = (event: any) => 
    setLogin({ ...login, username: event.target.value });

  const setPassword = (event: any) =>
    setLogin({ ...login, password: event.target.value });

  const setConnected = () =>
    setLogin({ ...login, keepConnection: !login.keepConnection });

  return (
    <div className="login">
      <form className="card" onSubmit={onLogin}>

        <img className="logo"
             alt="Logo"
             src={logo}
             width="220"
             height="200" />

        <MyInput name="username"
                 value={login.username}
                 onChange={setUsername}
                 label="Usuário"
                 type="text" />

        <MyInput name="password"
                 value={login.password}
                 onChange={setPassword}
                 label="Senha"
                 type="password" />

        <MyCheckbox name="keep-connected"
                    defaultChecked={login.keepConnection}
                    onChange={setConnected}
                    label="Manter conectado" />
                    
        <MyPrimaryButton text="Entrar" />

      </form>
    </div>
  );
}

export default connect(state => ({ user: state }))(Login);