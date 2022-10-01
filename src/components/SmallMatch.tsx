import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Match } from '../models/data';
import { RootState } from '../store';
import '../styles/SmallMatch.scss'


type Props = {
    match: Match
    matches: Match[];
    setMatches: React.Dispatch<React.SetStateAction<Match[]>>
}

const SmallMatch = ({match, matches, setMatches}: Props) => { 
   
    console.log('this match', match)
   
    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true);
   

    const handleBigMatchOverlay: () => void = () => {
    setHide(!hide);
    setOverlay(!overlay);
}
    const handleDelete = (matchId: number) => {
    setMatches(matches.filter((match) => match.matchId !== matchId))
}
const handlePlayer:  () => void = () => {
    console.log('you clicked', match.teamOne)
   
}
    
    return(
        <section className='small-match-conainer' >
             {hide && <div className='single-match'> 
            <button onClick={handleBigMatchOverlay}>VIEW GAME</button>
            <form >

            </form>
            <span onClick={handlePlayer} >
                team name 1:{match.teamOne} 
            </span>

            <span onClick={handlePlayer} >
                team name 2: {match.teamTwo}
            </span>
            
            
            
            
            
            
            </div>}
            
            {overlay && 
            //---------------//BIG CARD---------------//
            <div className='big-match-container'>
            {match.matchId}
            
            
            <button onClick={() => handleDelete(match.matchId)}>delete</button>
            <button onClick={handleBigMatchOverlay}>CLOSE</button>
            </div>}
            </section>
    )
}

export default SmallMatch
