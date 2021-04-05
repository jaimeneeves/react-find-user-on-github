import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { stylesInlines } from '../../shared/utils';
import apiInterceptor from '../../services/apiInterceptor';

class Followers extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    apiInterceptor.get(`users/${this.props.match.params.username}/followers`)
    .then(response => {
      this.setState({ followers: response.data });
    });
  }

  render() {
    const items = this.state.followers.map(function(user) {
      return (
        <li className="list-group-item d-flex align-items-center" key={user.id}>
          <Link to={`/user/${user.login}`} key={user.id}>
          <img className="mr-3 rounded-circle"
            alt={`${user.login} avatar`}
            src={user.avatar_url}
            style={stylesInlines.followers.img} />
            {user.login}
          </Link>
        </li>
      );
    });

    return (
      <div className="mb-5">
        <h3>Seguidores de {this.props.match.params.username}</h3>
        <ul className="list-group">{items}</ul>
      </div>
    );
  }

}

export default withRouter(Followers);
