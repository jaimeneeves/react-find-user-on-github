import React from 'react';
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Repos from '../Repos/Repos';
import Followers from '../Followers/Followers';
import Following from '../Following/Following';
import { stylesInlines } from '../../shared/utils';
import apiInterceptor from '../../services/apiInterceptor';

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      repos: []
    };
  }

  componentDidMount() {
    apiInterceptor.get(`users/${this.props.match.params.username}`)
    .then(response => {
      this.setState({ user: response.data });
    });
  }

  /**
   * This method is used as a mapping function. Eventually this could be factored out to its own component.
   * @param {Object} stat
   */
  renderStat(stat) {
    return (
      <li key={stat.name} className="list-inline-item text-center p-1 mr-4" style={stylesInlines.user.listItems}>
        <div to={stat.url} className="text-decoration-none">
          <h2 className="mb-0">{stat.value}</h2>
          <div>{stat.name}</div>
          <Link to={stat.url} className={['btn btn-block btn-sm text-decoration-none mt-2', `btn-${stat.btnType}`].join(' ')}>
            Visualizar
          </Link>
        </div>
      </li>
    );
  }

  render() {
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.user) {
      return (<div className="user-page">LOADING...</div>);
    }

    const { path } = this.props.match;

    // If we get to this part of `render`, then the user is loaded
    const user = this.state.user;

    // Gather up some number stats about the user, to be used in a map below
    const stats = [
      {
        name: 'Repositório',
        value: user.public_repos,
        btnType: 'primary',
        url: `/user/${this.props.match.params.username}/repos`
      },
      {
        name: 'Seguidores',
        value: user.followers,
        btnType: 'info',
        url: `/user/${this.props.match.params.username}/followers`
      },
      {
        name: 'Seguindo',
        value: user.following,
        btnType: 'success',
        url: `/user/${this.props.match.params.username}/following`
      }
    ];

    return (
      <div>
        <div>
          <div className="mt-5">
            <div className="row">
              <div className="col">
                <div className="media">
                  <img className="mr-3 rounded-circle"
                    src={user.avatar_url}
                    alt={`${user.login} avatar`}
                    style={stylesInlines.user.img}/>

                  <div className="media-body">
                    <h5 className="mt-0">{user.name}</h5>
                    <h6>{user.login}</h6>
                    <p>{user.bio}</p>
                  </div>
                </div>
              </div>
              <div className="col text-right">
                <ul className="list-inline">
                  {stats.map(this.renderStat)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="user-extra">
          <Switch>
            <Route path={`${path}/repos`} component={Repos}/>
            <Route path={`${path}/followers`} component={Followers}/>
            <Route path={`${path}/following`} component={Following}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(User);

