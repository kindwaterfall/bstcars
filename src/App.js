import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import List from './components/list/List';

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <nav className="router"> 
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>
          </nav>

          <section className="main">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/list">
                <List />
              </Route>
            </Switch>
          </section>
        </Router>
      </div>
    </>
  );
}

export default App;
