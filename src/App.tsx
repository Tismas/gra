import * as React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Map from './views/map/Map';

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
