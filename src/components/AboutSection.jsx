import React from 'react';

function AboutSection({ content }) {
  return (
    <div className="mx-auto grid grid-cols-3 w-2/3 text-lg">
      <div className="col-span-1 border-r border-red-500 p-4">
        <img src={ content.orgLogo } alt="Logo"></img>
        <div className="mt-12 text-right">
          {content.orgInfo.map((text, index) => (
            <div key={index} className="text-bold">
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 p-4">
        <h1 className="font-bold text-base md:text-xl lg:text-2xl">{content.jobTitle}</h1>
        <div className="mt-2 ml-5">
          <ul className="list-disc">
            {content.description.map((text, index) => (
              <li key={index}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
