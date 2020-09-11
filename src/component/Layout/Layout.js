import React,{Component} from 'react';

import WinByRunsWickets from '../WinByRunsWickets/WinByRunsWickets';
import PlayerOfMatch from '../PlayerOfMatch/PlayerOfMatch';
import NormalTie from '../NormalTie/NormalTie';
import WinningPercentage from '../WinningPercentage/WinningPercentage';
import SeasonWiseMatches from '../SeasonWiseMatch/SeasonWiseMatch';
import TossWinner from '../TossWinner/TossWinner';
import './Layout.css'

class Layout extends Component{
    render(){

        return(
            <div className="layout">
                <div className="header">
                    <div className="header-item">
                        <p>Total Matches</p>
                        <p>636</p>           
                    </div>              
                    <div className="header-item">
                        <p>Indian Premier League</p>
                        <p>Matches: 2008 - 2017</p>       
                    </div>                   
                </div>
                <div className="analysis">
                    <div className="charted">
                        <SeasonWiseMatches/>
                    </div>
                    <div className="charted">
                        <NormalTie/>
                    </div>
                    <div className="charted">
                        <WinningPercentage/>
                    </div>
                    <div className="charted">
                        <TossWinner/>
                    </div>
                    <hr></hr>
                    <div className="charted">
                        <PlayerOfMatch/>
                    </div>
                    <div className="charted">
                        <WinByRunsWickets/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;