import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";
import matchesData from '../../Assets/Dataset/matches.json';
// import './WonByTossDecision.css';

function TossWinners(matches){
    const TossWinnersCount = {}
    matches.forEach(match=>{
      if(TossWinnersCount[match.toss_winner]){
        TossWinnersCount[match.toss_winner] += 1
      }
      else{
        TossWinnersCount[match.toss_winner] = 1
      }
    })


    const data = Object.entries(TossWinnersCount)
    data.sort((winner1, winner2)=>{
      return winner2[1] - winner1[1]
    })
  
    data.length = 10
  
    const refineddata = data.map(winner => {
      return {
              name : winner[0].split(' ').map(function(item){return item[0]}).join(''),
              win : winner[1]         
      }
    })

    return refineddata
}

  
const TossWinner = (props)=>{
    
  const data = TossWinners(matchesData)
    return(
        <div className="TossWinner">            
            <h3>Top 10 Toss Winners Team</h3>
            <ResponsiveContainer height={data.length * 40} width="100%">
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="win" />
              <Tooltip />
              <Bar dataKey="win" fill="blue"/>
            </BarChart>
            </ResponsiveContainer>
      </div>
    )
}

export default TossWinner