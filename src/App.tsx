import * as React from 'react';
import './App.css';

import Map from './components/map/Map';
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Map />
      </div>
    );
  }
}

export default App;
