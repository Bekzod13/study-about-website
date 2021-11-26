import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './main.css';

// import components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// import pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Course from './pages/course/Course';
import Contact from './pages/contact/Contact';
import SignUp from './pages/signUp/SignUp';

const App = () => {
  return (
    <Router>

      <Navbar/>

      <Switch>

        <Route path='/' exact component={Home} />

        <Route path='/about' exact component={About} />

        <Route path='/course' exact component={Course} />

        <Route path='/contact' exact component={Contact} />

        <Route path='/sign-up' exact component={SignUp} />

      </Switch>

      <Footer/>

    </Router>
  );
}

export default App;
