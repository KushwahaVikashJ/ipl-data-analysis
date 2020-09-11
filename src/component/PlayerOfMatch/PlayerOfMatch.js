import React from 'react';
import { ResponsiveContainer, Tooltip, PieChart, Pie } from "recharts";
import matchesData from '../../Assets/Dataset/matches.json';

// import './TabularDetail.css';

function topTenManOfMatchWinners(matches){
  const playersList = {}
  matches.forEach(match => {
    if(playersList[match.player_of_match]){
     playersList[match.player_of_match] += 1
    }
    else{
     playersList[match.player_of_match] = 1
    }
  });
  
  const data = Object.entries(playersList)
  data.sort((player1, player2)=>{
    return player2[1] - player1[1]
  })

  data.length = 10

  const refineddata = data.map(player => {
    return {
      name : player[0],
      won : player[1]         
    }
  })
  
  return refineddata
} 

const PlayerOfMatch = (props)=>{
    
    const data = topTenManOfMatchWinners(matchesData)    
    return(
        <div className="TabularDetail">            
            <h3>Top 10 Player of Match</h3>
            <ResponsiveContainer height={data.length * 50} width="100%">
              <PieChart height={250}>
              <Tooltip />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="won"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    won,
                    index
                  }) => {
                    console.log("handling label?");
                    const RADIAN = Math.PI / 180;
                    
                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#8884d8"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {data[index].name} ({won})
                      </text>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
      </div>
    )
}

export default PlayerOfMatch