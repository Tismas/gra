import * as React from "react";
import { Link } from 'react-router-dom';
import '../../components/button/button.css';

import map from "./Selection_011.png";

class Map extends React.Component {
  render() {
    return(
      <React.Fragment>
        <img style={{height: '100vh', width: '100vw'}} src={map} />
        <Link
          className="button button-float"
          to="/task" >
          Zagraj
        </Link>
      </React.Fragment>
    );
  }
}

export default Map;
