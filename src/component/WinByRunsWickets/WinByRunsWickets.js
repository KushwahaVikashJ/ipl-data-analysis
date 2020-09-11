import React from 'react';
import {Table} from 'react-bootstrap'
import matchesData from '../../Assets/Dataset/matches.json';

import './WinByRunsWickets.css';

function comparison(matches){
  const refineddata = matches.map(player => {
    return (
        <tr>
            <td>{player.team1}</td>
            <td>{player.team2}</td>
            <td>{player.winner}</td>
            <td>{player.win_by_runs}</td>
            <td>{player.win_by_wickets}</td>
        </tr>       
    )
  })

  
  return refineddata
} 


const WinByRunsWickets = (props)=>{
    
    const data = comparison(matchesData)
    return(
        <div>
        <h3>Details of Win By Runs And Wickets</h3>
        <div className="TabularDetail"  id="collapse1">            
            <Table responsive striped bordered hover size="sm">
                <thead >
                    <tr>
                        <th>Team I</th>
                        <th>Team II</th>
                        <th>Winner</th>
                        <th>Win By Runs</th>
                        <th>Win By Wickets</th>
                    </tr>
                </thead>
                <tbody>
                        {data}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Team I</th>
                        <th>Team II</th>
                        <th>Winner</th>
                        <th>Win By Runs</th>
                        <th>Win By Wickets</th>
                    </tr>
                </tfoot>    
            </Table>
      </div>
      </div>  
    )
}

export default WinByRunsWickets