import React from 'react';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedIn from '../assets/linkedin.png';
import doc from '../assets/document.png';


const Touch = (props) => {
  return (
    <div className="block">
      <div className="touch">
        <div> I am always looking for new projects to work on, feel free to reach out!
        </div>
        <br />
        <div>
          <a href="https://tinyurl.com/vxp4zdwv" target="_blank" rel="noopener noreferrer"><img src={doc} alt="doc icon" /></a>
          <a href="https://github.com/erafkin/" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/emma-rafkin-2966406b/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn icon" /></a>
          <a href="mailto:emmarafkin@gmail.com"><img src={email} alt="email icon" /></a>
        </div>


      </div>
    </div>
  );
};
export default Touch;
