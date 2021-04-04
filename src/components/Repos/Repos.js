import React from 'react';
import { withRouter } from "react-router-dom";

class Repos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}/repos?access_token=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`)
    .then(response => response.json())
    .then(repos => {
        // How can we use `this` inside a callback without binding it??
        // Make sure you understand this fundamental difference with arrow functions!!!
        this.setState({
          repos: repos
        });
      });
  }

  render() {

    if (!this.state.repos) {
      return (<div className="followers-page">LOADING...</div>);
    }

    return (
      <div className="followers-page mb-5">
        <div className="mb-3">repositórios</div>
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

Repos.propTypes = {};

Repos.defaultProps = {};

export default withRouter(Repos);
