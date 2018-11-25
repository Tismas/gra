import * as React from 'react';
import elIcon from '../../../assets/images/elephant.png';
import './scratch-area.css';

const ScratchArea = () => {
  return (
    <div className="scratch-wrapper">
      <div className="scratch-overlay" />
      <span className="active-scratch-part" />
      <div className="scratch-icon-wrapper">
        <img src={elIcon} alt="" className="scratch-icon"/>
        <img src={elIcon} alt="" className="scratch-icon"/>
        <img src={elIcon} alt="" className="scratch-icon"/>
      </div>
    </div>
  )
}

export default ScratchArea;