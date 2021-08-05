import React from 'react';
import tracking from '../../assets/tracking.png';
import graphs from '../../assets/graphs.png';

import './projects.scss';


const Flourish = (props) => {
  return (
    <div className="block" id="cs98">
      <h2 style={{ color: '#8eead1', textAlign: 'left' }}>Flourish</h2>

      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <img src={tracking} className="rootedShop" alt="tracking" />
            <img src={graphs} className="rootedInv" alt="graphs" />
          </div>

          <div className="flip-card-back">
            <div className="projectDesc">
              <div className="projectBlurb">
                This DALI project is a mobile app that helps patients with chronic illness track and analyze their symptoms,
                triggers, treatments, and underlying health factors. This app was built from scratch and aims to help users with diagnosed and undiagnosed chronic illnesses
                understand the best way to manage and treat their symptoms.
                I was both the lead developer and mentor on this project. <br />
              </div>
              Tools Used
              <ul className="projectList">
                <li>React Native</li>
                <li>Redux</li>
                <li>Node/Express</li>
                <li>MongoDB (noSQL)</li>

              </ul>
            </div>
          </div>

          )

        </div>

      </div>

    </div>
  );
};
export default Flourish;
