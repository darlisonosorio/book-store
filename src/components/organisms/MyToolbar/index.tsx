import './MyToolbar.scss';

import React from 'react';
import logo from '../../../assets/fake_logo.png';
import { MdLogout } from 'react-icons/md';

interface ToolbarProps {
  title: string,
  username: string,
  onLogout?: any
}

export default function MyToolbar(props: ToolbarProps) {

  return (
    <div className="my-toolbar">
      <section>
        <img className="logo"
             alt="Logo"
             src={logo}
             width="58"
             height="50" />
        <label>{props.title}</label>
      </section>
      <section>
        <strong className="username">{props.username}</strong>
        <MdLogout onClick={props.onLogout}/>
      </section>
    </div>
  );
}