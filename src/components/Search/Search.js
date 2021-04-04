import React from 'react';
import { withRouter } from "react-router-dom";

const style = {
  form: {
    width: '100%',
    textAlign: 'center',
    display: 'block'
  },
  inputSearch: {
    width: '400px'
  }
};

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.history.push(`/user/${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="text-center">
        <h2 className="mt-5 mb-4">Buscar usuário no GitHub</h2>
        <form onSubmit={this.handleSubmit} className="form-inline m-auto" style={style.form}>
          <input id="usernameInput" className="form-control mb-5" type="text"
            name="username" placeholder="Nome do usuário no GitHub"
            onChange={this.handleChange}
            style={style.inputSearch}/>
          <input type="submit" className="btn btn-primary ml-2 mb-5" value="Pesquisar" />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
