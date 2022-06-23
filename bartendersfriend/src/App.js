import AppCSS from './styles/App.module.css';
import React, { Component} from 'react';
import Home from './components/Home.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    }
  }

  render() {
    return (
      <div className={AppCSS.app}>
        <header className={AppCSS.headerStyle}><h1>Bartender's Friend</h1></header>
        <nav className={AppCSS.navStyle}><a href="#">Home</a>&#32;<a href="#">Contact</a></nav>
        <Home />
        <footer className={AppCSS.footerStyle}>
          <span><a href="#">&#64;Lovenbooze</a></span>
          <span><a href="#">About me</a></span>
        </footer>
    </div>
    );
  };
};

export default App;