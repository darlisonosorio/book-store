import './Home.scss';
import logo from '../../assets/fake_logo.png'

import { Dispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/user/actions";

import MyToolbar from '../../components/organisms/MyToolbar'
import MyCard from '../../components/molecules/MyCard'

interface HomeProps {
  user: any,
  dispatch: Dispatch
}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  const [ items ] = useState([ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

  useEffect(() => {
    if (!props.user.username.length) {
      navigate('/login');
    }
  });

  const logout = () => {
    props.dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div>
      <MyToolbar title="Início"
                 username={props.user.username}
                 onLogout={logout} />
      
      <section className="my-content">
        <label className="welcome-label">
          Bem vindo <strong>{props.user.username}.</strong>
        </label>

        <div className="items-list">
          {items.map(it => (
            <MyCard key={it} title={it} img={logo} />
          ))}
        </div>
      </section>
    </div>
  )
};

export default connect(state => ({ user: state }))(Home);