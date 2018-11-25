import * as React from 'react';
import Button from '../../components/button/Button';
import Notification from '../../components/Notification/Notification';
import ScratchArea from './item/ScratchArea';
import TrackBar from './item/TrackBar';

interface IProps {
  readonly prize:number;
  readonly image:string
}

const Task = (props:IProps) => {
  console.log('render', props);
  return (
    <div className="task">
      <h3 className="ribbon">Scratch card for today</h3>
      <section className="task-scratch-section">
        <div className="daily-task-wrapper">
          <img className="task-icon" src="http://placehold.jp/70x70.png" alt=""/>
          <p>{`Znajdź ${props.image} pod warstwą ścierną i wygraj ${props.prize}`}</p>
          <TrackBar progress={60} />
          <Notification message="Wisisz mi hajs szmato" />
          <ScratchArea />
          <Button label="Spróbuj jeszcze raz" />
        </div>
      </section>
    </div>
  )
}

export default Task;
