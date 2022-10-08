import AddMatch from "./AddMatch"
import SmallMatch from "./SmallMatch"
import '../styles/MatchList.scss'
import React, { useState } from "react";
import { AllTimeData, Match } from '../models/data'
import { matchRoutes } from "react-router-dom";


interface Props{
    matches: Array<Match>;
    setMatches: React.Dispatch<React.SetStateAction<Match[]>>
    setSendData: React.Dispatch<React.SetStateAction<AllTimeData[]>>
}



const MatchList: React.FC<Props> = ({ matches, setMatches, setSendData }) => {

    return(
    <div className="match-list-container">
        {matches.map(match => (
            <SmallMatch 
                match={match}
                key={match.matchId}
                matches={matches}
                setMatches={setMatches}
                setSendData={setSendData}               
        />))}
    </div>)}
  
export default MatchList;