import React from 'react';
import AboutSection from '../components/AboutSection';

function About() {
  const internContent = [
    {
      jobTitle: 'Software Engineering Intern',
      description: [
        'Developed and implemented a vaccination profile page using Rails and Angular to address the increased demand of users for storing employee COVID-19 vaccination details', 
        'Enhanced user experience by transforming plain-text email templates into visually appealing designs using Tailwind CSS, in line with the company’s move to a newer, modern look',
        'Contributed to maintaining ISO certification standards by identifying and resolving security issues including access control vulnerabilities that affect customer data',
      ],
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Nov 2022 – Feb 2022'],
      orgLogo: '/images/talenox_logo.png'
    },
  ];
  const uniContent = [
    {
      jobTitle: 'Tutor',
      description: ['Conducted four one-hour weekly study sessions for 10 weeks for students taking challenging Year 2 units to enhance their understanding of the content',
      'Worked closely with the head lecturer of the unit weekly to update on the students’ progress and discuss ways to improve the students’ learning experience',
      'Tutored FIT2014 Theory of Computation (a unit on formal languages and computational models) and FIT2004 Algorithms and Data Structures (a unit on algorithmic design, analysis amd implementation)'
      ],
      orgInfo: ['Monash University', 'Malaysia', 'Jun 2021 – Nov 2021'],
      orgLogo: '/images/monash_university_logo.svg'
    },
  ];
  const talenoxContent = [
    {
      jobTitle: 'Software Engineer',
      description: [
        'Designed and implemented a manager-based architecture to sync leave applications to Google Calendar which manages rate limiting and ensures eventual consistency in calendars',
        'Reduced number of related customer support tickets by 75% after replacing the Resque-based implementation with the newly designed architecture for Google Calendar integration',
        'Led backend development of the Claims app focusing on employee benefits and claims, ensuring alignment with business requirements, robust security, and authentication, while adhering to REST API standards',
      ],
      orgInfo: ['Talenox Pte. Ltd.', 'Singapore', 'Mar 2022 – present'],
      orgLogo: '/images/talenox_logo.png'
    },
  ];

  const currentYear = new Date().getFullYear();
  const age = currentYear - 2000;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">about me</h1>
      </div>
      <div className="mx-auto grid w-2/3 mb-12 text-lg">
          <p>Hi there, I'm Joshua! An aspiring software engineer with a passion for problem-solving and a commitment to living life to the fullest. Currently {age}-years old, I bring several years of experience working on dynamic Rails projects, but am also constantly seeking opportunities to learn and embrace new technology stacks.
          </p>
          <br></br>
          <p>In my journey, I've developed a deep appreciation for the art of coding and the intricacies of software development. I love discussing and solving problems, always questioning everything to ensure a thorough understanding. My enthusiasm extends to designing robust and scalable architectures that will still be usable in the future.
          </p>
          <br></br>
          <p>Beyond the world of coding, I love food and travelling. Discovering new cuisines and experiencing different cultures makes me happiest.
          </p>
      </div>

      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">my experiences</h1>
      </div>
      {talenoxContent.map((content, index) => (
        <div key={index} className="mb-12">
          <AboutSection content={content} />
        </div>
      ))}

      {internContent.map((content, index) => (
        <div key={index} className="mb-8">
          <AboutSection content={content} />
        </div>
      ))}

      {uniContent.map((content, index) => (
        <div key={index} className="mb-8">
          <AboutSection content={content} />
        </div>
      ))}

      <div className="mb-16 mt-12">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">things i've built</h1>
      </div>
      <div className="mx-auto grid w-2/3 mb-12 text-lg"></div>

    </div>
  );
}

export default About;
