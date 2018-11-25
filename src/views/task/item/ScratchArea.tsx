import * as React from 'react';
import elIcon from '../../../assets/images/elephant.png';
import './scratch-area.css';

interface IProps {
  distance: number,
  calculatedWidth: number,
  handleChangeWidth(): void
}

const ScratchArea = (props:IProps) => {
  console.log('calculated width', props)
  // let newWidth;
  // if(props.distance > 200) {
  //   newWidth = 100
  // } else if(props.distance < 600) {
  //   newWidth = 66;
  // } else {
  //   newWidth = 33;
  // }

  return (
    <div className="scratch-wrapper">
      <div className="scratch-overlay" style={{width: `${props.calculatedWidth}%`}}>
        <span
          onClick={props.handleChangeWidth}
          className={`scratch-part ${props.distance >= 200 && 'active-scratch-part'}`} />
      </div>
      <div className="scratch-icon-wrapper">
        <img src={elIcon} alt="" className="scratch-icon"/>
        <img src={elIcon} alt="" className="scratch-icon"/>
        <img src={elIcon} alt="" className="scratch-icon"/>
      </div>
    </div>
  )
}

export default ScratchArea;