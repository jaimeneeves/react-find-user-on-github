import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Home from './components/Home/Home';
import User from './components/User/User';
import Search from './components/Search/Search';

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-12 align-self-center">
            <Search />
            <div className="mt-3">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/user/:username" component={User} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(App);
