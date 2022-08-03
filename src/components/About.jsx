import React from 'react';
import AboutCSS from '../styles/About.module.css';
import aboutpic from '../img/1.png';

function About() {
  return (
    <section className={AboutCSS.about}>
      <img
        className={AboutCSS.aboutpic}
        src={aboutpic}
        alt="alexs motto"

      />
      <p>&nbsp;</p>
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
