import React, { Component } from 'react';
import HomeCSS from '../styles/Home.module.css';
import AddDrink from './AddDrink';
import Batching from './Batching';
import Confirmation from './Confirmation';
import DisplayDrink from './DisplayDrink';
import AdddrinkCSS from '../styles/AddDrink.module.css';
import BatchingCSS from '../styles/Batching.module.css';
import ConfirmationCSS from '../styles/Confirmation.module.css';
import DisplayDrinkCSS from '../styles/DisplayDrink.module.css';
import homepic from '../img/home-photo.png';
import adddrinkpic from '../img/adddrink-photo.png';
import batchpic from '../img/5.png';
import confirmationpic from '../img/8.png';
import displaydrinkpic from '../img/15.png';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
  }

  render() {
      switch (this.state.currentPage) {
        case 'home': return (
          <section className={HomeCSS.home}>
            <img
              className={HomeCSS.profilepic}
              src={homepic}
              alt="alexs motto"
            />
            <p>&nbsp;</p>
            <button
              className={HomeCSS.continueBtn}
              type="button"
              onClick={() => this.setState({ currentPage: 'adddrink' })}
            >
              Continue
            </button>
            <p>&nbsp;</p>
          </section>
        );
        case 'adddrink': return (
          <section className={AdddrinkCSS.adddrink}>
            <img
              className={AdddrinkCSS.adddrinkpic}
              src={adddrinkpic}
              alt="alexs motto"
            />
            <p>&nbsp;</p>
            <AddDrink />
            <span className={AdddrinkCSS.navButtons}>
            <button
              className={AdddrinkCSS.continueBtn}
              type="button"
              onClick={() => this.setState({ currentPage: 'home' })}>
              Home
            </button>
            <button
              className={AdddrinkCSS.continueBtn}
              type="button"
              onClick={() => this.setState({ currentPage: 'batching' })}>
              Continue
            </button></span><p>&nbsp;</p>
          </section>
        )
        case 'batching': return (
          <section className={BatchingCSS.batching}>
            <img
              className={BatchingCSS.batchingpic}
              src={batchpic}
              alt="alexs motto"
            />
            <p>&nbsp;</p>
            <Batching />
            <span className={BatchingCSS.navButtons}>
              <button
                className={BatchingCSS.continueBtn}
                type="button"
                onClick={() => this.setState({ currentPage: 'adddrink' })}
              >
                Return
              </button>
              <button
                className={BatchingCSS.continueBtn}
                type="button"
                onClick={() => this.setState({ currentPage: 'confirmation' })}
              >
                Confirmation
              </button></span>
            <p>&nbsp;</p>
          </section>
        );
        case 'confirmation': return (
          <section className={ConfirmationCSS.confirmation}>
            <img
              className={ConfirmationCSS.confirmationpic}
              src={confirmationpic}
              alt="alexs motto"
            />
            <p>&nbsp;</p>
            <Confirmation />
            <p>&nbsp;</p>
            <span className={ConfirmationCSS.navButtons}><button
              className={ConfirmationCSS.continueBtn}
              type="button"
              onClick={() => this.setState({ currentPage: 'batching' })}>
              Return
            </button>
            <button
              className={ConfirmationCSS.continueBtn}
              type="button"
              onClick={() => this.setState({ currentPage: 'displaydrink' })}>
              Confirmation
            </button></span><p>&nbsp;</p>
          </section>
        );
        case 'displaydrink': return (
          <section className={DisplayDrinkCSS.displaydrink}>
            <img
              className={DisplayDrinkCSS.displaydrinkpic}
              src={displaydrinkpic}
              alt="alexs motto"
            />
            <p>&nbsp;</p>
            <DisplayDrink />
            <p>&nbsp;</p>
            <span className={DisplayDrinkCSS.navButtons}>
              <button
              className={DisplayDrinkCSS.continueBtn}
              type="button"
              onClick={() => this.setState({ currentPage: 'home' })}
            >
              Home
            </button></span><p>&nbsp;</p>
          </section>
        );
        default: return <div>Our system is experiencing problems</div>;
      }
  }
}
export default Home;
