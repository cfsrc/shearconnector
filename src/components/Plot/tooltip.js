import * as React from 'react'
import { nanoid } from "nanoid"

function CurveTooltip({ active, payload, isMetric }) {

  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-100 opacity-90 rounded p-2">
        <ul>
          <li key={nanoid(10)}>{
            `${payload[0].name} : ${payload[0].value.toFixed(1)} 
            ${isMetric ? "mm" : "in"}`}
          </li>
          <li key={nanoid(10)}>{`${payload[0].payload.Group}`}</li>
          <li key={nanoid(10)}>
            {payload[1].name} : {payload[1].value.toFixed(2)} 
          </li>
          <li key={nanoid(10)}>{`Reference: ${payload[0].payload.Reference}`}</li>
        </ul>
      </div>
    );
  }

  return null;
}

export default CurveTooltip;