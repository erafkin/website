import React from 'react';
import Header from './components/header';
import Landing from './components/landing';
import About from './components/about';
import Qualifications from './components/qualifications';
import Jobs from './components/jobs';
import FeaturedProjects from './components/featuredProjects';
import OtherProjects from './components/otherProjects';
import Touch from './components/touch';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Landing />
      <About />
      <Qualifications />
      <Jobs />
      <FeaturedProjects />
      <OtherProjects />
      <Touch />
    </div>
  );
};

export default App;
