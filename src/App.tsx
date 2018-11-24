import * as React from 'react';
import './App.css';

import Map from './components/map/Map.jsx';
import Navbar from './components/navbar/Navbar.jsx';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <Map />
      </div>
    );
  }
}

export default App;
