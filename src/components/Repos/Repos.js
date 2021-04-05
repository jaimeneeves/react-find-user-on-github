import React from 'react';
import { withRouter } from "react-router-dom";
import apiInterceptor from '../../services/apiInterceptor';

class Repos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    apiInterceptor.get(`users/${this.props.match.params.username}/repos`)
    .then(response => {
      this.setState({ repos: response.data });
    });
  }

  render() {

    if (!this.state.repos) {
      return (<div className="followers-page">LOADING...</div>);
    }

    return (
      <div className="followers-page mb-5">
        <h3>Repositórios de {this.props.match.params.username}</h3>
        <ul className="list-group">
        {
          this.state.repos.map(function(repo) {
            return <li key={repo.id} className="list-group-item d-flex justify-content-between align-items-center">
              <a rel="noreferrer" href={repo.html_url} target="_blank">{repo.full_name}</a>
              <span className="badge badge-primary badge-pill text-right">{repo.stargazers_count}★</span>
            </li>;
          })
        }
        </ul>
      </div>
    );
  }
}

export default withRouter(Repos);
