import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Detalis from './components/Detalis/Detalis/Detalis';
import Login from './components/Login/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home" >
          <Home></Home>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="/Service" >
            <Course></Course>
          </Route>
          <Route path="/contact" >
            <Contact></Contact>
          </Route>
          <Route path="/detalis/:serviceId">
            <Detalis></Detalis>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          

          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;