import React from 'react';
import github from '../assets/github.png';

const OtherProjects = (props) => {
  return (
    <div
      className="block"
    >
      <h1> Other Projects</h1>
      <div style={{ textAlign: 'center' }}>
        <div className="otherProject">
          <h2 style={{ color: ' #8eead1' }}> Chicago Ward Emailer </h2>
          <p>This was a project that I threw together for the 2020 BLM movement to auto email Chicago Aldermen (local representatives) to demand a change in policing policy. </p> <br />
          <a href="https://github.com/erafkin/ward-emailer" target="_blank" rel="noopener noreferrer"><img src={github} style={{ width: '25px' }} alt="github logo" /></a>
        </div>
        <div className="otherProject">
          <h2 style={{ color: ' #8eead1' }}>Spotify Playlist Generator</h2>
          <p>This was a fun personal project playing around with the Spotify API. It allows you to generate playlists based off of genres that you listen to the most.</p> <br />
          <a href="https://github.com/erafkin/spotify-api-test" target="_blank" rel="noopener noreferrer"><img src={github} style={{ width: '25px' }} alt="github logo" /></a>
        </div>
        <div className="otherProject">
          <h2 style={{ color: ' #8eead1' }}> Minimum Edit Distance</h2>
          <p>A python project to calculate the minimum edit distance between words, effectively creating a spell check</p> <br />
          <a href="https://github.com/erafkin/min_edit_distance" target="_blank" rel="noopener noreferrer"><img src={github} style={{ width: '25px' }} alt="github logo" /></a>
        </div>
        <div className="otherProject">
          <h2 style={{ color: ' #8eead1' }}>Poetry Texts</h2>
          <p>This is a quick backend project that pings a database to populate a text with a random poem that is then sent to certain phone numbers once a day</p> <br />
          <a href="https://github.com/erafkin/PoetryTexts" target="_blank" rel="noopener noreferrer"><img src={github} style={{ width: '25px' }} alt="github logo" /></a>
        </div>
      </div>

    </div>

  );
};
export default OtherProjects;
