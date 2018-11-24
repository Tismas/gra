import * as React from 'react';
import ScratchCard from '../scratch-card/ScratchCard';
import './navbar.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ScratchCard />
        <ScratchCard />
        <ScratchCard />
      </div>
    )
  }
}

export default Nav;