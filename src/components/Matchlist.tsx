import AddMatch from "./AddMatch"
import SmallMatch from "./SmallMatch"
import '../styles/MatchList.scss'
import React, { useState } from "react";
import { AllTimeData, Match } from '../models/data'
import { matchRoutes } from "react-router-dom";
import NewSmallMatch from "./NewSmallMatch";


interface Props{
    matches: Array<Match>;
    setMatches: React.Dispatch<React.SetStateAction<Match[]>>
    setSendData: React.Dispatch<React.SetStateAction<AllTimeData[]>>
    setPlayerMatches: React.Dispatch<React.SetStateAction<Match[]>>
    
    filterOverlay: boolean
    playerMatches: Array<Match>;
    
}



const MatchList: React.FC<Props> = ({ matches, setMatches, setSendData, filterOverlay, setPlayerMatches, playerMatches }) => {
    console.log(playerMatches)
    
    // const [filterOverlay, setFilterOverlay] = useState<boolean>(true);

    return(

    <div className="match-list-container">
        {filterOverlay && <>
        {matches.map(match => (
            <SmallMatch 
                match={match}
                key={match.matchId}
                matches={matches}
                setMatches={setMatches}
                setSendData={setSendData}               
        />))}
</>}
{<> {playerMatches.map(match => (
            <NewSmallMatch 
        match={match}
        key={match.matchId}

        setMatches={setMatches}
        setSendData={setSendData} 
        matches={[]}        />))}


HOLY SHIT</>}
    </div>)}
  
export default MatchList;