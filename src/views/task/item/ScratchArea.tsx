import * as React from 'react';

const ScratchArea = () => {
  return (
    <div className="scratch-wrapper">
      <div className="scratch-overlay" />
      <div className="scratch-icon-wrapper">
        <img src="http://placehold.jp/70x70.png" alt="" className="scratch-icon"/>
        <img src="http://placehold.jp/70x70.png" alt="" className="scratch-icon"/>
        <img src="http://placehold.jp/70x70.png" alt="" className="scratch-icon"/>
      </div>
    </div>
  )
}

export default ScratchArea;