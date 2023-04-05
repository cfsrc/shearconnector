import * as React from 'react';

function ProjectCard({ className, title, content }) {

  return (
    <div className={`${className || ""} px-8 py-4 my-4 mx-6 rounded-2xl bg-red-200`}>
      <div className="my-1 flex items-center justify-center gap-3">

        <div className="text-3xl font-semibold text-red-600">
          {title}
        </div>
      </div>
      {content}
    </div>
  );
}

export default ProjectCard;