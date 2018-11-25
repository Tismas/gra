import * as React from 'react';
import '../task.css';

interface IProps {
  progress:number;
}

const TrackBar = (props:IProps) => {
  return (
    <div className="track-wrapper">
      <span className="track">
        <span style={{width: `${props.progress}`}} className="track-progress" />
      </span>
    </div>
  )
}

export default TrackBar;