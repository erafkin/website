import React from 'react';
import IndivJob from './indivJob';

const Jobs = (props) => {
  return (
    <div id="jobs">
      <h1> Work Experience</h1>
      <IndivJob
        title="Software Engineer"
        link="https://www.jhuapl.edu/"
        location="Johns Hopkins University Applied Physics Lab"
        start="Starting August 2021"
      />
      <IndivJob
        title="Software Engineer"
        link="http://dali.dartmouth.edu/"
        location="DALI Lab"
        start="January 2019"
        end="Present"
        intro="DALI is a fast-paced, student run experiential learning lab at Dartmouth. As a software developer, I..."
        duty1="Develop full stack websites for startups and researchers"
        duty2="Collaborate with designers and partners three times a week"
        duty3="Use a wide range of tech stacks including React, Node/Express, and Mongodb"
        extra="From June 2020-June 2021, I was a memeber of the core executive board and was the Women in Science Project Lead for DALI."
      />
      <IndivJob
        title="Software Engineer Intern"
        link="https://www.alarm.com/"
        location="Alarm.com"
        start="June 2020"
        end="August 2020"
        intro="Alarm.com is a smart home application that integrates security and utility hardwear for homes and buisnesses. As a software engineer intern, I..."
        duty1="Enhanced a previously existing report and created a new report to help property managers stay up to date on the battery levels of all of the devices across their many units"
        duty2="Learned an entirely new code base and worked on creating thorough unit tests for every ticket"
        duty3="Worked in both C# and Ember.js"
      />
      <IndivJob
        title="Software Engineer Intern"
        link="https://www.cambly.com/english?lang=en"
        location="Cambly Inc"
        start="January 2020"
        end="March 2020"
        intro="The Cambly app gives English learners instant 1-on-1 access to friendly native speakers over video chat. There are web and mobile platforms. As a software engineer intern I..."
        duty1="Implemented the new courses feature on the Android app--retrieving and manipulating data as well as implmenting UI designs"
        duty2="Worked to upgrade the Android app to keep it up to date as Cambly expands"
        duty3="Worked in Kotlin and Java"
      />
      <IndivJob
        title="Teaching Assistant"
        link="https://cs.dartmouth.edu/~cs10/"
        location="Dartmouth College Computer Science"
        start="September 2018"
        end="November 2018"
        intro="I was a teaching assistant for the Object Oriented Programming class at Dartmouth. As a teaching assistant, I..."
        duty1="Held a weekly review session to go over that week's topics"
        duty2="Held office hours three times a week to answer student questions"
        duty3="Graded tests and homeworks"
      />
      <IndivJob
        title="Computer Help Desk Technician"
        link="https://computing.thayer.dartmouth.edu/"
        location="Thayer School of Engineering"
        start="January 2018"
        end="June 2018"
        intro="Thayer computing services assists engineering students, faculty, and staff with any computing problems that may arise. As a help desk technician, I..."
        duty1="Replaced and fixed broken computer parts"
        duty2="Restructured and replaced the tablet informational system in the building"
        duty3="Answered any computing questions that people had"
      />
      <IndivJob
        title="Camp Counselor"
        link="https://campnicolet.com/"
        location="Camp Nicolet"
        start="June 2017"
        end="August 2018"
        intro="Camp Nicolet is a space where girls can grow to be independent young leaders. As a counselor I.."
        duty1="Was responsible for the wellbeing of 8 13 year old girls"
        duty2="Was a waterfront, waterskiing, and tennis instructor"
        duty3="Ran the elite waterskiing program"
      />
    </div>
  );
};
export default Jobs;
