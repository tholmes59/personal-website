import React from 'react';
import './App.css';
import Home from './components/Home';
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (
    <div className="App">
      <ScrollUpButton />
      <Router>
        <Route>
          <NavBar />
        </Route>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
