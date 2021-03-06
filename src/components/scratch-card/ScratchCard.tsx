import * as React from 'react';
import { useState } from 'react';
import './scratch-card.css';

const ScratchCard = () => {
  const [isVisible, setVisible] = useState(false);

  const clickHandle = () => {
    setVisible(true);
  }

  return (
    <button
      onClick={clickHandle}
      className="scratch-card">
      {
        isVisible
        ? <img className="scratch-card-image" src="http://placehold.jp/70x70.png" />
        : 'SCRATCH'
      }
    </button>
  )
}

export default ScratchCard;