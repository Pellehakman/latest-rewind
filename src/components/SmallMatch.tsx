import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Match } from '../models/data';
import { RootState } from '../store';
import '../styles/SmallMatch.scss'
import { GiExpand } from "react-icons/gi";
import '../styles/Bigmatch.scss'
import { IoClose, IoExpand } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";




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
    console.log('you clicked', match.matchName)
   
}
    
    return(
        <section className='small-match-conainer' >
            {hide && 
                <div className='small-match'>
                    
                    <div className='small-match-display'>
                        <div className='small-match-time-container'>
                            <span className='small-match-date'>{match.date}</span>
                            
                        </div>
                    <div className='white-divider'></div>
                    
                    <span className='small-match-headerName'>{match.matchName}</span>
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
                    <div className='teamOne-header'>{match.players.playerOne}</div>
                    <div className='vs'>VS</div>
                    <div className='teamTwo-header'>{match.players.playerTwo}</div>
                </header>

            <div className='team-big-container'>
            
                        

                <div className='big-match-team'>
                    <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-players"><span>PLAYERS</span></div>
                        <span className="items">{match.players.playerOne}</span>
                        
                        
                    </div>
                </div>
                
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-kills"><span>KILLS</span></div>
                        <div className="item">{match.players.playerOneK}</div>
                    </div>
                </div>
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-deaths"><span>DEATHS</span></div>
                        <div className="item">{match.players.playerOneD}</div> 
                    </div>
                </div>
                </div>      

                <div className='big-divider'></div>

                <div className='big-match-team'>
                    <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-players"><span>PLAYERS</span></div>
                        <span className="items">{match.players.playerTwo}</span>
                    </div>
                </div>
                
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-kills"><span>KILLS</span></div>
                        <div className="item">{match.players.playerTwoK}</div>                
                    </div>
                </div>
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-deaths"><span>DEATHS</span></div>
                        <div className="item">{match.players.playerTwoD}</div>
                    </div>
                </div>
                </div>
                    
                
             

            </div>
           
            
            <div className='big-match-btn-container'>
            <AiOutlineDelete className='dropdown-delete' onClick={() => handleDelete(match.matchId)}/>
            {/* <button className='delete-btn' onClick={() => handleDelete(match.matchId)}>DELETE</button> */}
            <button className='close-btn' onClick={handleBigMatchOverlay}>CLOSE</button>
            
            </div>
            
            
            </div>}
            </section>
    )
}

export default SmallMatch
