import React from 'react';

const IndivJob = (props) => {
  return (
    <div
      className="job"
    >
      <h2> {props.title} @
        <a href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="spanlink"
        >
          <span>
            {props.location}
          </span>
        </a>
      </h2>
      <h3> {props.start} {props.end ? '-' : ''} {props.end}</h3>
      {props.intro
        ? (
          <div>
            <p>{props.intro}<br /> </p>
            <ul className="jobList">
              <li> {props.duty1}</li>
              <li>{props.duty2}</li>
              <li>{props.duty3}</li>
            </ul>
            <p>{props.extra}</p>
          </div>
        )
        : null}
    </div>
  );
};

export default IndivJob;
