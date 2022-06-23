import React, {Component} from 'react';
import HomeCSS from '../styles/Home.module.css';
import AdddrinkCSS from '../styles/AddDrink.module.css';
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
            Let's make a drink
          </p>
          <button
            className={AdddrinkCSS.continueBtn}
            onClick={() => this.setState({ currentPage: 'home' })}>
            Return
          </button>
          <button
            className={AdddrinkCSS.continueBtn}
            onClick={() => this.setState({ currentPage: 'batching' })}>
            Continue
          </button>
        </section>
      )
      case "batching": return <>in batching</>
      case "confirmation": return <>in confirmation</>
      case "displaydrink": return <>in displaydrink</>
      default: return <div>Our system is experiencing problems</div>
    }
  }
}
export default Home;