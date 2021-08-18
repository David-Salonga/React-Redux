import logo from './logo.svg';
import './App.css';
import TodoList from './features/components/TodoList';
import DoneList from './features/components/DoneList';
import NotFound from './features/NotFoundPage/NotFound';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Todo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <Link to="/">Home</Link> */}
              <a class="nav-link active"  href="/">Home</a>
            </li>
            <li class="nav-item">
              {/* <Link to="/done">Done List</Link> */}
              <a class="nav-link active"  href="/done">Done List</a>
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
