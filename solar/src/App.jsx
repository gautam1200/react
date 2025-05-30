import logo from './logo.svg';
import './App.css';
import Hedings from './Hedings';
import Homepage from './Homepage';

import Footer from './Footer';
import Secpage from './Secpage';
// import { Login } from '@mui/icons-material';
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

function App() {
  return (
    <>
      {/* <Hedings></Hedings> */}
      {/* <Homepage></Homepage> */}
      {/* <Footer ></Footer> */}
      {/* <Signin></Signin>  */}
      {/* <Login></Login> */}
      {/* <Secpage></Secpage> */}
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Users></Users> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route  path="/Home">
            <Homepage />
          </Route>
          <Route path="/Menu">
            <Signin />
          </Route>
          <Route path="/Pages">
            <Secpage />
          </Route>
          <Route path="/AboutUs">
            <Secpage />
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
