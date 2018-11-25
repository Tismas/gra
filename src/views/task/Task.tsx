import * as React from 'react';
import Button from '../../components/button/Button';
import Notification from '../../components/Notification/Notification';
import ScratchArea from './item/ScratchArea';
import TrackBar from './item/TrackBar';

interface IProps {
  readonly prize: number;
  readonly image: string;
}

const Task = (props:IProps) => {
  return (
    <div className="task">
      <h3 className="ribbon">Scratch card for today</h3>
      <section className="task-scratch-section">
        <div className="daily-task-wrapper">
          <img className="task-icon" src={require(`../../assets/images/${props.image}.png`)} alt={props.image}/>
          <p>{`Find ${props.image} beneath the scratch area and won ${props.prize}zl!`}</p>
          <TrackBar progress={60} />
          <Notification message="Wisisz mi hajs szmato" />
          <ScratchArea />
          <Button label="Try again" />
        </div>
      </section>
    </div>
  )
}

export default Task;
