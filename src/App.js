import { React, Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='mainComponents'>
          <Home />
          <div className='aboutBackground'>
            <About />
          </div>
          <Portfolio />
          <Contact />
        </div>
      </div>
    )
  }
}