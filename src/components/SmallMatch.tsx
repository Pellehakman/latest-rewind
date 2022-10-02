import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Match } from '../models/data';
import { RootState } from '../store';
import '../styles/SmallMatch.scss'
import { GiExpand } from "react-icons/gi";
import { IoClose, IoExpand } from "react-icons/io5";



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
            {hide && 
                <div className='small-match'>
                    
                    <div className='small-match-display'>
                        <div className='small-match-time-container'>
                            <span className='small-match-date'>2022-09-25</span>
                            <span className='small-match-time'>22:33</span>
                        </div>
                    <div className='white-divider'></div>
                    
                    <span className='small-match-headerName'>{match.nameOne}</span>
                    <div className='white-divider'></div>
                    <span className='small-match-headerWin'>WIN</span>
                    <div className='white-divider'></div>
                    <div className='drowdown-container'>

                    <GiExpand className='dropdown' onClick={handleBigMatchOverlay}/>
                    </div>

                    </div>
                    
                    
                    
                    
                    
                
                </div>}
            
            {overlay && 
            //---------------//BIG CARD---------------//
            <div className='big-match-container'>

                <header className='team-names-container'>
                    <div className='teamOne-header'>TEAM ONE</div>
                    <div className='teamTwo-header'><span>TEAM TWO</span>
                    <IoClose className='dropdown' onClick={handleBigMatchOverlay}/>
                    
                    </div>
                    
                </header>

            <div className='team-big-container'>

               

            

              

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
