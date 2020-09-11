import React from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  ResponsiveContainer,
  Bar,
  Tooltip
} from "recharts";


import matchesData from '../../Assets/Dataset/matches.json';
// import './NormalTie.css';

function yearWiseResultCount(matches){
    const resultCount = {}
    matches.forEach(match=>{
      if(resultCount[match.result]){
        resultCount[match.result] += 1
      }
      else{
        resultCount[match.result] = 1
      }
    })
    return resultCount
  }

const NormalTie = (props)=>{
    
    const resultCount = yearWiseResultCount(matchesData)
    const data = Object.keys(resultCount).map(
      key=>{
        return{
          name:key,
          matches:resultCount[key]
        }
      }
    )

    return(
        <div className="NormalTie">            
            <h3>In Whole Season Normal, Tie, No Result</h3>
            <ResponsiveContainer height={data.length * 100} width="100%">
            <BarChart
              data={data}
              layout="vertical"
              barCategoryGap="20%"
              barGap={2}
              maxBarSize={40}
            >
              <CartesianGrid horizontal={false} stroke="#a0a0a0" strokeWidth={0.5} />
              <XAxis
                type="number"
                axisLine={false}
                stroke="#a0a0a0"
                // domain={[0, 10]}
                // ticks={[0, 2.5, 5, 7.5, 10]}
                strokeWidth={0.5}
              />
              <YAxis type="category" dataKey={"name"} width={60} minTickGap={0} />
              <Tooltip/>
              <Bar
                dataKey="matches"
                animationDuration={1000}
                label={{ position: "right", backgroundColor: "#fff" }}
              />
            </BarChart>
          </ResponsiveContainer>
      </div>
    )
}

export default NormalTie