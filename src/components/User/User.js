import React from 'react';
// import { Link } from "react-router-dom";

const style = {
  img: {
    width: '100px',
  },
  listItems: {
    width: '100px'
  }
};

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      repos: []
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
    .then(response => response.json())
    .then(user => {
      this.setState({ user: user });
    });
  }

  /**
   * This method is used as a mapping function. Eventually this could be factored out to its own component.
   * @param {Object} stat
   */
  renderStat(stat) {
    return (
      <li key={stat.name} className="list-inline-item text-center p-1 mr-4" style={style.listItems}>
        <div to={stat.url} className="text-decoration-none">
          <h2 className="mb-0">{stat.value}</h2>
          <div>{stat.name}</div>
          <a href={stat.url}
            className={['btn btn-block btn-sm text-decoration-none mt-2', `btn-${stat.btnType}`].join(' ')}>
            Visualizar
          </a>
        </div>
      </li>
    );
  }

  render() {
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.user) {
      return (<div className="user-page">LOADING...</div>);
    }

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
                    style={style.img}/>

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
        {/* <div className="user-extra">
                {this.props.children}
              </div>  */}
      </div>
    );
  }
}

export default User;
