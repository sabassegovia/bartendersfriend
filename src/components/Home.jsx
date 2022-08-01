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
          <p> </p>
          <button
            className={HomeCSS.continueBtn}
            type="button"
            onClick={() => this.setState({ currentPage: 'adddrink' })}
          >
            Continue
          </button>
        </section>
      );
      case 'adddrink': return (
        <section className={AdddrinkCSS.adddrink}>
          <img
            className={AdddrinkCSS.adddrinkpic}
            src={adddrinkpic}
            alt="alexs motto"
          />
          <p> </p>
          <AddDrink />
          {/* <br></br><br></br> */}
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
          </button>
        </section>
      )
      case 'batching': return (
        <section className={BatchingCSS.batching}>
          <img
            className={BatchingCSS.batchingpic}
            src={adddrinkpic}
            alt="alexs motto"
          />
          <p> </p>
          <Batching />
          <br />
          <br />
          <button
            className={HomeCSS.continueBtn}
            type="button"
            onClick={() => this.setState({ currentPage: 'adddrink' })}
          >
            Return
          </button>
          <button
            className={HomeCSS.continueBtn}
            type="button"
            onClick={() => this.setState({ currentPage: 'confirmation' })}
          >
            Confirmation
          </button>
        </section>
      );
      case 'confirmation': return (
        <section className={ConfirmationCSS.confirmation}>
          <img
            className={ConfirmationCSS.confirmationpic}
            src={adddrinkpic}
            alt="alexs motto"
          />
          <p> </p>
          <Confirmation />
          <br />
          <br />
          <button
            className={HomeCSS.continueBtn}
            type="button"
            onClick={() => this.setState({ currentPage: 'batching' })}>
            Return
          </button>
          <button
            className={HomeCSS.continueBtn}
            type="button"
            onClick={() => this.setState({ currentPage: 'displaydrink' })}>
            Confirmation
          </button>
        </section>
      );
      case 'displaydrink': return (
        <section className={DisplayDrinkCSS.displaydrink}>
          <img
            className={DisplayDrinkCSS.displaydrinkpic}
            src={adddrinkpic}
            alt="alexs motto"
          />
          <br />
          <p> </p>
          <DisplayDrink />
          <br />
          <br />
          <button
            className={HomeCSS.continueBtn}
            type="button"
            onClick={() => this.setState({ currentPage: 'home' })}
          >
            Home
          </button>
        </section>
      );
      default: return <div>Our system is experiencing problems</div>;
    }
  }
}
export default Home;
