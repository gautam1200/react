import logo from './logo.svg';
import './App.css';
import Hedings from './Hedings';
import Homepage from './Homepage';

import Footer from './Footer';
import Secpage from './Secpage';
import Signin from './Signin';
import Login from './Login';
import Home from './Home';
import About from './About';
import Users from './Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactSection from './Users';

function App() {
  return (
    <>
      {/* <Footer ></Footer> */}
      {/* <Signin></Signin>  */}
      {/* <Login></Login> */}
      {/* <Secpage></Secpage> */}
      {/* <Home></Home> */}
      {/* <About></About> */}
      <Router>
      {/* <Hedings></Hedings> */}
      <Users></Users>
      {/* <Homepage></Homepage> */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Home">
            <Homepage />
          </Route>
          <Route path="/services">
            <Signin />
          </Route>
          <Route path="/Pages">
            <Secpage />
          </Route>
          <Route path="/AboutUs">
            <Secpage />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
