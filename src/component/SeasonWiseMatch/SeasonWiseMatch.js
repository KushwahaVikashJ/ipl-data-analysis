import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip} from 'recharts';

import matchesData from '../../Assets/Dataset/matches.json';

function yearWiseMatchCount(matches){
  const matchesCount = {}
  matches.forEach(match=>{
    if(matchesCount[match.season]){
      matchesCount[match.season] += 1
    }
    else{
      matchesCount[match.season] = 1
    }
  })
  return matchesCount
}

const SeasonWiseMatches = (props)=>{

    const matchCount = yearWiseMatchCount(matchesData)
    const data = Object.keys(matchCount).map(
      key=>{
        return{
          year:parseInt(key),
          matches:matchCount[key]
        }
      }
    )

    return(
        <div className="SeasonWiseMatches">            
            <h3>Season Wise Matches</h3>
            <ResponsiveContainer height={data.length * 40} width="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis dataKey="matches" />
              <Tooltip />
              <Area type="monotone" dataKey="matches" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </ResponsiveContainer>
      </div>
    )
}

export default SeasonWiseMatches