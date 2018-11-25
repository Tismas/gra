import * as React from 'react';
import { asyncComponent } from 'react-async-component';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';


const Login = asyncComponent({
  resolve: () => import('./views/login/Login'),
});
const Map = asyncComponent({
  resolve: () => import('./views/map/Map'),
});
const ScratchList = asyncComponent({
  resolve: () => import('./views/scratch-list/ScratchList'),
});
const TaskWrapper = asyncComponent({
  resolve: () => import('./views/task/TaskWrapper'),
});
const PageNotFound = asyncComponent({
  resolve: () => import('./views/404/PageNotFound'),
});

const redirectToLogin = () => {
  return <Redirect to="/login" />;
}

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" render={redirectToLogin} />
        <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
        <Route path="/task" component={TaskWrapper} />
        <Route path="/scratch-list" component={ScratchList} />

        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;
