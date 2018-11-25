import * as React from 'react';
import './button.css';

interface IProps {
  label: string;
}

const Button = (props:IProps) => {
  return (
    <button className="button">
      {props.label}
    </button>
  )
}

export default Button;