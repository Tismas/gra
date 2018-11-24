import * as React from "react";
import Navbar from '../../components/navbar/Navbar';

import map from "./Selection_011.png";

class Map extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <img src={map} />
      </React.Fragment>
    );
  }
}

export default Map;
