import React from 'react';
import SpeechSurrogates from './indivFeaturedProjects/speechSurrogates';
import MyBallot from './indivFeaturedProjects/myballot';
import Flourish from './indivFeaturedProjects/flourish';

const FeaturedProjects = (props) => {
  return (
    <div style={{ margin: '5%' }}>
      <h1>Featured Projects</h1>
      <SpeechSurrogates />
      <MyBallot />
      <Flourish />
    </div>
  );
};
export default FeaturedProjects;
