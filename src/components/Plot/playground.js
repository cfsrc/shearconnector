import * as React from 'react';
import Plot from "./plot"
// import PlotSD from './plot_sd';
import { convertToMetricData } from "../../utils/convertToMetricData"
import { Tooltip } from "recharts"
import CurveTooltip from "./tooltip"
import VersionTag from "./version-tag"

function DataPlayground({ className, dataSet, isMetric}) {


  return (
    <div className={`${className} w-screen relative mb-6`} id="playground">

        <Plot
          dataSet={isMetric ? dataSet.map(item => convertToMetricData(item)) : dataSet}
          xLabel={`Deck depth ${isMetric ? "(mm)" : "(in)"}`}
          yLabel={`Normalized stud strength`}
          xDomain={isMetric ? [0, 165] : ([0, 6.5])}
          // yDomain={isMetric ? [0, 160] : ([0, 36])}
          toolTip={<Tooltip cursor={false} content={CurveTooltip} isMetric={isMetric}/>}
        /> 
        {/* <PlotSD
          dataSet={isMetric ? dataSet.map(item => convertToMetricData(item)) : dataSet}
          xLabel={`Stud height ${isMetric ? "(mm)" : "(in)"}`}
          yLabel={`Stud strength ${isMetric ? "(kN)" : "(kips)"}`}
          xDomain={isMetric ? [0, 254] : ([0, 10])}
          yDomain={isMetric ? [0, 160] : ([0, 36])}
          toolTip={<Tooltip cursor={false} content={CurveTooltip} isMetric={isMetric}/>}
        />  */}
      <VersionTag className="absolute top-16 sm:top-14 md:top-26 right-14"/>
      <div className={`-mt-6 text-gray-400 px-14`}>
      </div>
    </div>
  )
}

export default DataPlayground