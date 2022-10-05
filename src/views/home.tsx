
import { useState } from 'react';

import Matchlist from '../components/Matchlist'

import SmallMatch from '../components/SmallMatch';
import { actions as matchActions } from '../features/matchReducer'
import { Match } from '../models/data';
import '../styles/Home.scss'
import useLocalStorage from '../components/hooks/use-local-storage';



interface Props {
    match: Match;
};

const Home: React.FC<Props> = () => { 


    const [overlay, setOverlay] = useState<boolean>(false);
    const [matches, setMatches] = useLocalStorage<Match[]>('matches',[])
    const [date, setDate] = useState<string>("")
    const [matchName, setMatchName] = useState<string>("")

    const [playerOne, setPlayerOne] = useState<string>("")
    const [playerOneK, setPlayerOneK] = useState<string>("")
    const [playerOneD, setPlayerOneD] = useState<string>("")

    const [playerTwo, setPlayerTwo] = useState<string>("")
    const [playerTwoK, setPlayerTwoK] = useState<string>("")
    const [playerTwoD, setPlayerTwoD] = useState<string>("")

    const handleAddMatchOverlay: () => void = () => {setOverlay(!overlay);}






   const handleSubmit: (e:any) => void = (e:any) => {
    e.preventDefault();
    setMatches([...matches, { matchId: Date.now(), date, matchName, players:{
        playerOne, playerTwo, playerOneK, playerOneD, playerTwoK, playerTwoD}
    }
].sort((a, b) => {return b.matchId - a.matchId;}))
    setOverlay(!overlay)   
};
    

   

return (         
    <section className='home-container'>
    <div className='main-container'>
        <div className='matches-container'>
        <section className='header-container'>
            <span>LAST 10 GAMES</span>
            <button className='add-btn-container' onClick={handleAddMatchOverlay}><span className='add-btn'>ADD MATCH</span></button >
        </section>

        
        {overlay && <div className="add-match" onSubmit={handleSubmit}>
            <div className='big-match-container'>
                <header className='team-names-container'>
                    <div className='add-teamOne-header'>{playerOne}</div>
                    <div className='vs'>VS</div>
                    <div className='add-teamTwo-header'>{playerTwo}</div>
                </header>

<div className='team-big-container'>
            
                        

                <div className='big-match-team'>
                    <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-players"><span>PLAYERS</span></div>
                        <span className="items"><input className='add-player'  type="text" id='playerOne' name='playerOne' placeholder='Player 1' onChange={(e) => setPlayerOne(e.target.value)} /></span>
                    </div>
                </div>
                
                     
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-kills"><span>KILLS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills' placeholder='K' onChange={(e) => setPlayerOneK(e.target.value)} /></span>
                       
                        
                    </div>
                </div>
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-deaths"><span>DEATHS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills' placeholder='D' onChange={(e) => setPlayerOneD(e.target.value)} /></span>
                    </div>
                </div>
                </div>      

                <div className='big-divider'></div>

                <div className='big-match-team'>
                    <div className='b-m-row'>
                    <div className='b-m-col'>
                    <div className="b-m-players"><span>PLAYERS</span></div>
                    <span className="items"><input className='add-player'  type="text" id='playerOne' name='playerOne' placeholder='Player 2' onChange={(e) => setPlayerTwo(e.target.value)} /></span>
                        
                        
                    </div>
                </div>
                
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-kills"><span>KILLS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills' placeholder='K' onChange={(e) => setPlayerTwoK(e.target.value)} /></span>
                       
                        
                    </div>
                </div>
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-deaths"><span>DEATHS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills' placeholder='D' onChange={(e) => setPlayerTwoD(e.target.value)} /></span>
                    </div>
                </div>


                </div>
                    
                
             

            </div>
            <div>
            
<div>
            <input type="date" onChange={(e:any) => setDate(e.target.value)}/>
            <input type="text" onChange={(e:any) => setMatchName(e.target.value)} />
            </div>
            
  
            </div>
            <div className='big-match-btn-container'>
                
            <button className='close-btn' onClick={handleAddMatchOverlay}>CLOSE</button>
            <button className='save-btn' onClick={(e) => handleSubmit(e)}>SAVE</button>
            
            </div>

</div>      

        </div>
        }         
        
        <Matchlist matches={matches} setMatches={setMatches}  />



        
       
        </div>
        <div className='all-time-container'> 
        <section className='all-time-header'>
                <span >ALL TIME STATS</span>
           
            </section>
            <div className='all-time-player'>TGLTN</div>
        
        </div>
        </div>
        
        

       </section>
    )
};

export default Home


