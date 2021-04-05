import React from 'react';
import { withRouter, Link } from "react-router-dom";
import apiInterceptor from '../../services/apiInterceptor';
import { stylesInlines } from '../../shared/utils';

class Following extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: []
    }
  }

  componentDidMount () {
    apiInterceptor.get(`users/${this.props.match.params.username}/following`)
    .then(response => {
      this.setState({ following: response.data });
    });
  }

  render() {
    return (
      <div className="followers-page">
        <h3>Followed by {this.props.match.params.username}</h3>
        <ul className="list-group">
        {
          this.state.following.map(function(user) {
            return <li className="list-group-item d-flex align-items-center" key={user.id}>
              <Link className="github-usertag" to={`/user/${user.login}`}>
                <img className="mr-3 rounded-circle"
                  alt={`${user.login} avatar`}
                  src={user.avatar_url}
                  style={stylesInlines.following.img}/>
                {user.login}
              </Link></li>;
          })
        }
        </ul>
      </div>
    );
  }
}

export default withRouter(Following);
