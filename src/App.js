import logo from './logo.svg';
import './App.css';
import TodoList from './features/components/TodoList';
import DoneList from './features/components/DoneList';
import NotFound from './features/NotFoundPage/NotFound';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import "animate.css";


function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active navbar-text" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-text" to="/done">Done List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <Switch>
        <Route exact path="/" component={TodoList}></Route>
        <Route exact path="/done" component={DoneList}></Route>
        <Route exact path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
