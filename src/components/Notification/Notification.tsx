import * as React from 'react';
import './notification.css';

interface IProps {
  message:string
}

const Notification = (props:IProps) => {
  return (
    <div className="notification">
      <p className="notif-message">{props.message}</p>
    </div>
  )
}

export default Notification;