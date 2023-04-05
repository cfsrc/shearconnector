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


function PlotSD({dataSet, xLabel,onClick: handleOnClick, yLabel, xDomain, yDomain, toolTip}) {

  const studTypes = Array.from(new Set(dataSet.map(item => item.d_s)));
  const dataByStudType = studTypes.reduce(
    (accum, cur) => {
      return {...accum, [cur]: dataSet.filter(item => item.d_s === cur)}
    }, {});
  const COLORS = ['#F41A1A', '#0088FE', '#FFBB28', '#00C49F'];

    return (
        <>
        {/* <h1 className="text-left text-4xl font-black text-gray-500 mt-2 ml-8 mb-0">
        Data Playground
        </h1> */}
        <ResponsiveContainer width="90%" aspect={2.1}>
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
              dataKey="h_s"
              name="Stud height"
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
              name="Stud strength"
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
            {Object.keys(dataByStudType).map((d_s, index) =>
            <Scatter yAxisId="left" name={d_s} data={dataByStudType[d_s]}
            // fill={chroma.scale(['#FD2D00','#0047FD','#A542F1','#30FF27']).colors(studTypes.length*2)[index*2]}
            fill={COLORS[index % COLORS.length]}
            fillOpacity={0.75}
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



export default PlotSD