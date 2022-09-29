import AddMatch from "./AddMatch"
import SmallMatch from "./SmallMatch"
import '../styles/MatchList.scss'
import React, { useState } from "react";
import { Match } from '../models/data'
import { PrunePayload } from "vite/types/hmrPayload";

interface Props{
    matches: Array<Match>;
    setMatches: React.Dispatch<React.SetStateAction<Match[]>>
}



const MatchList: React.FC<Props> = ({matches, setMatches }) => {



    return(
    <div className="match-list-container">
        <header>This is Matchlist</header>
        {matches.map(match => (
            <SmallMatch 
            match={match} 
            key={match.matchId}
            matches={matches}
            setMatches={setMatches} />
        ))}
        
    </div>
    )
}
  
export default MatchList;