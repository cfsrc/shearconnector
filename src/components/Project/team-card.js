import * as React from 'react';
import YAMLData from '../../../content/projectinfo.yaml';
import ProjectCard from "./project-card"

function TeamCard({ className }) {

  return (
    <ProjectCard
      className={`${className || ""}`}
      title="Team"
      content={
        YAMLData.team.map(item => {
          return (
            <div
              className="py-1 text-xl"
            >
              <div className="text-red-600 font-semibold">{item.person.name}</div>
              <div className="text-gray-600">{item.person.university}</div>
            </div>
          );
       })
      }
    />
  );
}

export default TeamCard;