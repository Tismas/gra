import * as React from 'react';
import Button from '../../components/button/Button';
import ScratchArea from './item/ScratchArea';
import TrackBar from './item/TrackBar';


const Task = () => {
  return (
    <div className="task">
      <h3 className="task-title">Zdrapka na dziś</h3>
      <section>
        <div className="section-ribbon">Zdrapka na dziś</div>
        <div className="daily-task-wrapper">
          <img className="task-icon" src="" alt=""/>
          <p>Znajdź -słonia- pod warstwą ścierną i wygraj -45 000zł-</p>
          <TrackBar />
          <span className="task-message">
            wisisz mi hajs szmato
          </span>
          <ScratchArea />
          <Button label="Spróbuj jeszcze raz" />
        </div>
      </section>
    </div>
  )
}

export default Task;
