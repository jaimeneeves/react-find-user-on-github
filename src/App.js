// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="container">
        <div className="row">
          <div className="col">
            <h2 className="mt-5">React Projeto GitHub</h2>
            <form id="gitHubForm" className="form-inline m-auto">
              <input id="usernameInput" className="form-control mb-5" type="text" name="username" placeholder="GitHub Username" />
              <input type="submit" className="btn btn-primary ml-2 mb-5" value="Submit" />
            </form>
              <div className="main-content"></div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
