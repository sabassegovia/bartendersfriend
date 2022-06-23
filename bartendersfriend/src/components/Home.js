import React, {Component} from 'react';
import HomeCSS from '../styles/Home.module.css';
import AdddrinkCSS from '../styles/AddDrink.module.css';
import BatchingCSS from '../styles/Batching.module.css';
import ConfirmationCSS from '../styles/Confirmation.module.css';
import DisplayDrinkCSS from '../styles/DisplayDrink.module.css';
import homepic from "../img/home-photo.png"
import adddrinkpic from "../img/adddrink-photo.png"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
  }

  render() {

    switch (this.state.currentPage) {
      case "home": return (
        <section className={HomeCSS.home}>
          <img
            className={HomeCSS.profilepic}
            src={homepic}
            alt="alexs motto" />
          <p>
            Let's make a drink
          </p>
          <button
            className={HomeCSS.continueBtn}
            onClick={() => this.setState({ currentPage: 'adddrink' })}>
            Continue
          </button>
        </section>
      )
      case "adddrink": return (
        <section className={AdddrinkCSS.adddrink}>
          <img
            className={AdddrinkCSS.adddrinkpic}
            src={adddrinkpic}
            alt="alexs motto" />
          <p>
            Let's make a drink!
          </p>
          <button
            className={AdddrinkCSS.continueBtn}
            onClick={() => this.setState({ currentPage: 'home' })}>
            Home
          </button>
          <button
            className={AdddrinkCSS.continueBtn}
            onClick={() => this.setState({ currentPage: 'batching' })}>
            Continue
          </button>
        </section>
      )
      case "batching": return (
        <section className={BatchingCSS.batching}>
        <img
          className={BatchingCSS.batchingpic}
          src={adddrinkpic}
          alt="alexs motto" />
        <p>
          How much are we batching up today?
        </p>
        <button
          className={HomeCSS.continueBtn}
          onClick={() => this.setState({ currentPage: 'adddrink' })}>
          Return
        </button>
        <button
          className={HomeCSS.continueBtn}
          onClick={() => this.setState({ currentPage: 'confirmation' })}>
          Confirmation
          </button>
          </section>
      )
      case "confirmation": return (
        <section className={ConfirmationCSS.confirmation}>
        <img
          className={ConfirmationCSS.confirmationpic}
          src={adddrinkpic}
          alt="alexs motto" />
        <p>
         Here's the ingredients list:
        </p>
        <button
          className={HomeCSS.continueBtn}
          onClick={() => this.setState({ currentPage: 'batching' })}>
          Return
        </button>
        <button
          className={HomeCSS.continueBtn}
          onClick={() => this.setState({ currentPage: 'displaydrink' })}>
          Confirmation
          </button>
          </section>
      )
      case "displaydrink": return (
        <section className={DisplayDrinkCSS.displaydrink}>
        <img
          className={DisplayDrinkCSS.displaydrinkpic}
          src={adddrinkpic}
          alt="alexs motto" />
        <p>
          Voila, here's what you'll need:
        </p>
        <button
          className={HomeCSS.continueBtn}
          onClick={() => this.setState({ currentPage: 'home' })}>
          Home
          </button>
          </section>
      )
      default: return <div>Our system is experiencing problems</div>
    }
  }
}
export default Home;