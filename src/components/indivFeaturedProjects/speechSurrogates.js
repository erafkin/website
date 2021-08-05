import React from 'react';
import speechSurrogates from '../../assets/speech-surrogates.png';
import './projects.scss';
import github from '../../assets/github.png';
import open from '../../assets/open.png';

const SpeechSurrogates = (props) => {
  return (
    <div className="block" id="cs98">
      <h2 style={{ color: '#8eead1', textAlign: 'left' }}>Speech Surrogates</h2>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"><img src={speechSurrogates} className="projectPic" alt="speechSurrogates home page" /></div>

          <div className="flip-card-back">
            <div className="projectDesc">
              <div className="projectBlurb">
                Speech Surrogates is a website dedicated to musical surrogates for languges around the world. This was a site created for professor Laura McPherson at Dartmouth College. <br />
                This site includes a blog, editable pages, and an interactive database for displaying surrogate languages.
                <br />
                <a href="http://speechsurrogates.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={open} style={{ width: '25px' }} alt="open icon" /></a>
                <a href="https://github.com/erafkin/speech-surrogates-frontend" target="_blank" rel="noopener noreferrer"><img src={github} style={{ width: '25px' }} alt="github logo" /></a>

              </div>
              Tools Used
              <ul className="projectList">
                <li>Python</li>
                <li>Flask</li>
                <li>React.js</li>
                <li>Node/Express</li>
                <li>mongoDB (NoSQL)</li>
              </ul>
            </div>
          </div>

          )

        </div>

      </div>

    </div>
  );
};
export default SpeechSurrogates;
