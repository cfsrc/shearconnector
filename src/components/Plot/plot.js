import * as React from "react"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis, 
  CartesianGrid, ResponsiveContainer, Legend
} from "recharts";
// import chroma from "chroma-js"
import { nanoid } from "nanoid"


function Plot({dataSet, xLabel,onClick: handleOnClick, yLabel, xDomain, yDomain, toolTip}) {

  const studTypes = Array.from(new Set(dataSet.map(item => item.Group)));
  const dataByStudType = studTypes.reduce(
    (accum, cur) => {
      return {...accum, [cur]: dataSet.filter(item => item.Group === cur)}
    }, {});
  const COLORS = ['#f032e6','#c6c6c6', '#3cb44b', '#f58231','#0047FD'];

    return (
        <>
        {/* <h1 className="text-left text-4xl font-black text-gray-500 mt-2 ml-8 mb-0">
        Data Playground
        </h1> */}
        <ResponsiveContainer width="95%" aspect={2.2}>
          <ScatterChart
             margin={{
              top: 50,
              right: 50,
              bottom: 50,
              left: 150,
             }} >
           <CartesianGrid />
           <XAxis
              type="number"
              dataKey="d_d"
              name="Deck depth"
              label={{
                 value: xLabel, 
                 position: "bottom",
                 fontSize: "1.25em",
                 fill: "rgba(107, 114, 128)"
               }}
               domain={xDomain}  />
           <YAxis
              yAxisId="left"
              type="number"
              dataKey="P_e"
              name="Normalized stud strength"
              label={{
                 value: yLabel,
                 dx: -30,
                 angle: -90,
                 position: "center",
                 fontSize: "1.25em",
                 fill: "rgba(107, 114, 128)"
               }} 
               domain={yDomain}
              />
            {toolTip}
            {/* <Tooltip cursor={{ strokeDasharray: "3 3" }} /> */}
            {Object.keys(dataByStudType).map((Group, index) =>
            <Scatter yAxisId="left" name={Group} data={dataByStudType[Group]}
            // fill={chroma.scale(['#f58231','#f032e6', '#FFBB28', '#0047FD','#a9a9a9']).colors(studTypes.length)[index]}
            fill={COLORS[index % COLORS.length]}
            fillOpacity={0.7}
            onClick={handleOnClick}
            key={nanoid()}
            isAnimationActive={true}
            />
            
            )}
          <Legend verticalAlign="top" height={48}/>
          </ScatterChart>

        </ResponsiveContainer>
        </>
    )

}



export default Plot