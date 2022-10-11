import SmallMatch from "./SmallMatch"
import '../styles/MatchList.scss'
import React from "react";
import { AllTimeData, Match } from '../models/data'

import NewSmallMatch from "./NewSmallMatch";

interface Props{
    matches: Array<Match>;
    setMatches: React.Dispatch<React.SetStateAction<Match[]>>
    setSendData: React.Dispatch<React.SetStateAction<AllTimeData[]>>
    filterOverlay: boolean
    hide: boolean
    playerMatches: Array<Match>;   
}

const MatchList: React.FC<Props> = ({ matches, setMatches, setSendData, filterOverlay, playerMatches, hide }) => {
    return(<div className="match-list-container">

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
        
        {hide && <> {playerMatches.map(match => (
            <NewSmallMatch 
            match={match}
            key={match.matchId}
        />))}
        </>}
        </div>)}
  
export default MatchList;