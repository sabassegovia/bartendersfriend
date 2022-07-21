import AppCSS from './styles/App.module.css';
import React, { Component} from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked');
  }

  render() {
    var loadThisPage;
    switch (this.state.currentPage) {
      case "home": loadThisPage = <Home returnHome={this.returnHome}/>;
        break;
      case "about": loadThisPage = (<>
        <About />
        <button
          className={AppCSS.homeBtn}
          onClick={() => this.setState({ currentPage: 'home' })}>
          home
        </button></>);
        break;
      case "contact": loadThisPage = (<>
        <Contact />
        <button
          className={AppCSS.homeBtn}
          onClick={() => this.setState({ currentPage: 'home' })}>
          home
        </button></>);
        break;
      default: <h1>There appears to be an error at the moment, refresh or try again later</h1>
    }


    return (
      <div className={AppCSS.app}>
        <header
          className={AppCSS.headerStyle}
          onClick={() => this.setState({ currentPage: 'home' })}>
          <h1>Bartender's Friend</h1>
        </header>

        <nav className={AppCSS.navStyle}>
          <a
            id='home'
            href="#"
            onClick={() => this.setState({ currentPage: 'home' })}>Home</a>&#32;

          <a
            href="#"
            onClick={() => this.setState({currentPage: 'contact'})}>Contact</a></nav>
        {loadThisPage}
        <footer className={AppCSS.footerStyle}>
          <span><a href="#">&#64;Lovenbooze</a></span>
          <span>
            <a
              href="#"
              onClick={() => this.setState({currentPage: 'about'})}>About me</a></span>
        </footer>
    </div>
    );
  };
};

export default App;