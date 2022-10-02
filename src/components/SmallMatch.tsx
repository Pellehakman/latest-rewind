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

    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true);
   
    const handleBigMatchOverlay: () => void = () => {
    setHide(!hide); setOverlay(!overlay);
}
    const handleDelete = (matchId: number) => {
    setMatches(matches.filter((match) => match.matchId !== matchId))
}
const handlePlayer:  () => void = () => {
    console.log('you clicked', match.nameOne)
   
}
    
    return(
        <section className='small-match-conainer' >
             {hide && <div className='match'> 
            
            <form >

            </form>
            <span onClick={handlePlayer} >
                team name 1:{match.nameOne} 
            </span>

            <span onClick={handlePlayer} >
                team name 2: {match.nameTwo}
            </span>
            
            
            
            
            
            <button onClick={handleBigMatchOverlay}>VIEW GAME</button>
            </div>}
            
            {overlay && 
            //---------------//BIG CARD---------------//
            <div className='big-match-container'>

                <header className='team-names-container'>
                    <div className='teamOne-header'>TEAM ONE</div>
                    <div className='teamTwo-header'>TEAM ONE</div>
                </header>

            <div className='team-big-container'>

                <div className='team-small-container'>
                    <div className='property-container'>
                        <span>PLAYER</span>
                        <span>KILLS</span>
                        <span>DEATHS</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                </div>

                <div className='divider'></div>

                <div className='team-small-container'>
                    <div className='property-container'>
                        <span>PLAYER</span>
                        <span>KILLS</span>
                        <span>DEATHS</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                    <div className='player-container'>
                        <span>PHAWKMAN</span>
                        <span>30</span>
                        <span>13</span>
                    </div>
                </div>

                </div>
           
            
            <div className='big-match-btn-container'>
            <button className='delete-btn' onClick={() => handleDelete(match.matchId)}>DELETE</button>
            <button className='close-btn' onClick={handleBigMatchOverlay}>CLOSE</button>
            </div>
            
            
            </div>}
            </section>
    )
}

export default SmallMatch
