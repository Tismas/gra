import * as React from 'react';
import '../task.css';

const TrackBar = () => {
  return (
    <div className="track-wrapper">
      <span className="track">
        <span className="track-progress" />
      </span>
    </div>
  )
}

export default TrackBar;