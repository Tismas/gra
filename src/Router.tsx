import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    );
  }
}
export default Router;