import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell,Tooltip} from "recharts";
import matchesData from '../../Assets/Dataset/matches.json';
// import './WinningPercentage.css';

function yearWiseWinnerCount(matches){
  const winnerCount = {}
  matches.forEach(match=>{
    if(winnerCount[match.winner]){
      winnerCount[match.winner] += 1
    }
    else{
      winnerCount[match.winner] = 1
    }
  })
  return winnerCount
}



const WinningPercentage = (props)=>{

  const winnerCount = yearWiseWinnerCount(matchesData)
  const data = Object.keys(winnerCount).map(
    key=>{
      return{
        name:key.split(' ').map(function(item){return item[0]}).join(''),
        win:winnerCount[key]
      }
    }
  )

 const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A'];

    const RenderLabelContent = ({ percent, x, y, midAngle, classes, value }) => {
        return (
          <g
            transform={`translate(${x}, ${y})`}
            textAnchor={midAngle < -90 || midAngle >= 90 ? "end" : "start"}
          >
            {/* <text x={0} y={-5}>{`${value}`}</text> */}
            <text x={0} y={5}>{`${(
              percent * 100
            ).toFixed(2)}`}</text>
          </g>
        );
      };

    const handleHeight = () => {
        return data.length > 3 ? 320 + data.length * 14 : 370;
    };  

    return(
        <div className="WinningPercentage">            
            <h3>Winning Percentage of Teams</h3>
            <ResponsiveContainer height={data.length * 50} width="100%">
            <PieChart width={320} height={handleHeight()}>
            <Tooltip />
            
            <Pie
              data={data}
              dataKey="win"
              cy={150}
              startAngle={180}
              endAngle={-180}
              innerRadius={50}
              outerRadius={100}
              label={<RenderLabelContent />}
              paddingAngle={12}
              isAnimationActive={true}
            >
              
              {data.map((_, index) => (
                <Cell
                  key={`slice-${index}`}
                  strokeWidth={"3"}
                  stroke={null}
                  fill={colors[index]}
                />
                
              ))}
            </Pie>
          </PieChart>
          </ResponsiveContainer>
      </div>
    )
}

export default WinningPercentage