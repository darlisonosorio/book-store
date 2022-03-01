import './MyInput.scss';
import React, { ChangeEventHandler } from 'react';

interface InputProps {
  name: string,
  value?: any,
  type?: any,
  label?: string,
  placeholder?: string,
  onChange?: ChangeEventHandler
}


export default function MyInput(props: InputProps) {
  return (
    <div className="my-input">
      <label>{props.label}</label>
      <input name={props.name}
             type={props.type}
             value={props.value}
             placeholder={props.placeholder}
             onChange={props.onChange} />
    </div>
  )
}