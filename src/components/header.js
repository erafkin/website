import React from 'react';
import doc from '../assets/document.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedIn from '../assets/linkedin.png';

const Header = (props) => {
  return (
    <div className="links">
      <a href="https://tinyurl.com/vxp4zdwv" target="_blank" rel="noopener noreferrer"><img src={doc} alt="doc icon" /></a>
      <a href="https://github.com/erafkin/" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon" /></a>
      <a href="https://www.linkedin.com/in/emma-rafkin-2966406b/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn icon" /></a>
      <a href="mailto:emmarafkin@gmail.com"><img src={email} alt="email icon" /></a>
    </div>

  );
};
export default Header;
