import React from 'react';
import AboutCSS from '../styles/About.module.css';
import aboutpic from '../img/adddrink-photo.png';

function About() {
  return (
    <section className={AboutCSS.about}>
      <img
        className={AboutCSS.aboutpic}
        src={aboutpic}
        alt="alexs motto"
      />
      <p>
        [dfgjdgjdkljgdk gjd lkg  jj sfjfksjf sdkfjsd fs jklgjklj dfkj df]
      </p>
      <p>
        [dkfjgdkfjg dj kfgjklgjklgjdf klgjd skg dkgjdlk ]
      </p>
      <p>
        [kdfjg kdfgjgd fgjdklfg jdfkl gj]
      </p>

    </section>
  );
}
export default About;
