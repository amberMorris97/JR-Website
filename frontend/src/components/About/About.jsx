import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';
const gray = './images/gray.jpg';

const About = () => {

  return (
    <div id="about-page" className="fullscreen">
      <div className="about-heading">
        <h1 id="about-title" className="marcellus">DEI Consultant</h1>
        <p className="openSans" id="about-text">Together, we can help your workplace evolve.</p>
      </div>
      <img src={gray} alt="img" height="700" width="600" />
      <div id="about-content">
        <p className="openSans about-para">Lorem Ipsum... Brown guilty eyes and little white lies yea I played dumb but I always knew. That you talked to her, maybe, did even worse. I kept quiet so I could keep you. Aint it funny? How you ran to her, the second that we called it quits. And aint it funny, how you said you were friends. Now it sure as hell don't look like it. You betrayed me. And I know that you'll never feel sorry, for the I hurt. Yeah, you talked to her when we were together loved you at your worst but that didn't matter. It took you two weeks, to go off and date her, guess you didn't cheat. But you're still a traitor.</p>
        <button className="btn" id="work-with-me-btn">WORK WITH ME</button>
      </div>
    </div>
  );
};

export default About;