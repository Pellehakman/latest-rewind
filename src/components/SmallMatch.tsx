import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Match } from '../models/data';
import { RootState } from '../store';
import '../styles/SmallMatch.scss'


type Props = {
    match: Match
    
}

const SmallMatch = () => { 
    const match = useSelector((state: RootState) => state.match)
    
    
    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true);

    const handleBigMatchOverlay: () => void = () => {
    setHide(!hide);
    setOverlay(!overlay);
}
//     const handleDelete = (matchId: number) => {
//     setMatches(matches.filter((match) => match.matchId !== matchId))
// }
    
    return(
        <section className='small-match-conainer' >
             {hide && <div className='single-match'> 
            <button onClick={handleBigMatchOverlay}>VIEW GAME</button>
            <form></form>
            <span>team one:
                {match.teamOne}
      
            </span>
            <span>team two:
            {match.teamTwo}
      
            </span>

            
            
            
            
            
            </div>}
            
            {overlay && 
            //---------------//BIG CARD---------------//
            <div className='big-match-container'>
            {/* {match.matchId} */}
            
            {match.matchId}
            {/* <button onClick={() => handleDelete(match.matchId)}>delete</button> */}
            <button onClick={handleBigMatchOverlay}>CLOSE</button>
            </div>}
            </section>
    )
}

export default SmallMatch
