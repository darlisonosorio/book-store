import './MyCheckbox.scss';
import { ChangeEventHandler } from 'react';

interface CheckboxProps {
  name: string,
  defaultChecked?: boolean,
  label?: string,
  onChange?: ChangeEventHandler
}

export default function MyCheckbox(props: CheckboxProps) {
  return (
    <div className="my-checkbox">
      <input id={props.name}
             name={props.name}
             defaultChecked={props.defaultChecked}
             onChange={props.onChange}
             type="checkbox"
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}