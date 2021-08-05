import React from 'react';
import myballot from '../../assets/myballot.png';
import './projects.scss';

const MyBallot = (props) => {
  return (
    <div className="block" id="cs98">
      <h2 style={{ color: '#8eead1', textAlign: 'left' }}>MyBallot</h2>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"><img src={myballot} className="projectPic" alt="myballot home page" /></div>

          <div className="flip-card-back">
            <div className="projectDesc">
              <div className="projectBlurb">
                MyBallot was my senior culminating project that aimed to help people understand who was running in their local elections.
                It is an app that scrapes the internet for all information on all candidates in all races on the user&apos;s ballot,
                extracts common topics/issues across the race, and finds the overall position of the candidate on that topic. The webapp displays the results.
                I worked on the NLP/ML portion of the project, using RAKE for keyphrase extraction, GloVe to find semantically relevant phrases, and Watson for the sentiment analysis.
                Attached are the Medium articles that we wrote about this project. <br />
                <a href="https://medium.com/dartmouth-cs98/scraping-the-internet-for-information-on-local-elections-963aca4c801a" target="_blank" rel="noopener noreferrer">General article</a>
                <br />
                <a href="https://medium.com/dartmouth-cs98/myballot-how-it-works-94b1443747d1" target="_blank" rel="noopener noreferrer">How we did it</a>
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
export default MyBallot;
