
import * as React from 'react';
import TeamCard from "./team-card"
import AboutCard from "./about-card"

function Project({ className }) {

  return (
    <div className={`${className || ""} mt-2 mb-4`} id="project">
      <h1 className="text-left text-4xl font-black text-gray-500 mt-4 ml-8">
        Project
      </h1>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <AboutCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default Project;