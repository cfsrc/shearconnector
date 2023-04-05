import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function SponsorCard({ className, title, content }) {

  return (
    <div className={`${className || ""} px-8 py-4 my-4 mx-6 rounded-2xl bg-red-200`}>
      <div className="my-1 flex items-center justify-center gap-3">

        <div className="text-3xl font-semibold text-red-600">
          {title}
        </div>
      </div>
      
      <StaticImage
        src="../../images/sdilogo.jpg"
        alt="SDI logo"
        width={150}
        className="col-xs-10 col-sm-5"
      /> 
      <StaticImage
        src="../../images/aisclogo.png"
        alt="SDI logo"
        width={80}
        className="col-xs-10"
      />
      <StaticImage
        src="../../images/sjilogo.png"
        alt="SDI logo"
        width={80}
        className="col-xs-10"
      />      
    </div>
  );
}

export default SponsorCard;