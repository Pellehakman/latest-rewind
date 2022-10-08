
import { useEffect, useState } from 'react';

import Matchlist from '../components/Matchlist'

import SmallMatch from '../components/SmallMatch';
import { actions as matchActions } from '../features/matchReducer'
import { AllTimeData, Match } from '../models/data';
import '../styles/Home.scss'
import useLocalStorage from '../components/hooks/use-local-storage';

import newData from '../data/new.json'



interface Props {
    match: Match;
    setSendData: React.Dispatch<React.SetStateAction<AllTimeData[]>>
    sendData: AllTimeData
   
    setWin: boolean
   
    
    
    
};

const Home: React.FC<Props> = () => { 
    


 

    // const matchesCopy = [...matches];

    // matchesCopy.push(data);
    // setMatches(matchesCopy);

    const [overlay, setOverlay] = useState<boolean>(false);
    const [matches, setMatches] = useLocalStorage<Match[]>('matches',[])
    const [playerMatches, setPlayerMatches] = useState<Match[]>([])
    console.log(playerMatches)
    const [date, setDate] = useState<string>("")
    const [matchName, setMatchName] = useState<string>("ERANGEL")
    const [sendData, setSendData] = useState<AllTimeData[]>([])
 
    

    // console.log('shiiit', matches)


    const [playerOne, setPlayerOne] = useState<string>("")
    const [playerOneK, setPlayerOneK] = useState<string>("")
    const [playerOneD, setPlayerOneD] = useState<string>("")

    const [playerTwo, setPlayerTwo] = useState<string>("")
    const [playerTwoK, setPlayerTwoK] = useState<string>("")
    const [playerTwoD, setPlayerTwoD] = useState<string>("")


    const handleAddMatchOverlay: () => void = () => {setOverlay(!overlay);}

    const handleSubmit: (e:any) => void = (e:any) => {
    e.preventDefault();
        
        function playerOneWin() {
            if(playerOneK > playerTwoK){
                return "WIN"
            }
            if (playerOneK < playerTwoK) {
                return "LOOSE";
            }
            if (playerOneK === playerTwoK){
                return "DRAW"
            }
            return ""
        }
        const playerOneWinner = playerOneWin()


        function playerTwoWin() {
            if(playerTwoK > playerOneK){
                return "WIN"
            }
            if (playerTwoK < playerOneK) {
                return "LOOSE";
            }
            if (playerTwoK === playerOneK){
                return "DRAW"
            }
            return ""
        }
        const playerTwoWinner = playerTwoWin()
       
        
            
       
    setMatches([...matches, { matchId: Date.now(), playerOneWinner, playerTwoWinner, date, matchName, players:{
        playerOne, playerTwo, playerOneK, playerOneD, playerTwoK, playerTwoD}
    }].sort((a, b) => {return b.matchId - a.matchId;}))
    setOverlay(!overlay)   
};

const handlePlayerMatches: (e: any) => void = (e: any) => {
        
    let playerOneClick = sendData.allTimeName
    let showPlayerMatch = matches.filter(obj => {
        return obj.players.playerOne === `${playerOneClick}`})

        setPlayerMatches(showPlayerMatch)




   
}

return (         
    <section className='home-container'>
    <div className='main-container'>
        <div className='matches-container'>
        <section className='header-container'>
            <span>10 MIN DEATHMATCH</span>
            <button className='add-btn-container' onClick={handleAddMatchOverlay}><span className='add-btn'>ADD MATCH</span></button >
        </section>

        
        {overlay && <form className="add-match" onSubmit={handleSubmit}>
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
                        <div className="b-m-players"><span>YOU</span></div>
                        <span className="items"><input className='add-player'  type="text" id='playerOne' name='playerOne' required placeholder='Enter your name'  onChange={(e) => setPlayerOne(e.target.value)} /></span>
                    </div>
                </div>
                
                     
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-kills"><span>KILLS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills' required placeholder='K'  onChange={(e) => setPlayerOneK(e.target.value)} /></span>
                       
                        
                    </div>
                </div>
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-deaths"><span>DEATHS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills'required placeholder='D'  onChange={(e) => setPlayerOneD(e.target.value)} /></span>
                    </div>
                </div>
                </div>      

                <div className='big-divider'></div>

                <div className='big-match-team'>
                    <div className='b-m-row'>
                    <div className='b-m-col'>
                    <div className="b-m-players"><span>ENEMY</span></div>
                    <span className="items"><input className='add-player'  type="text" id='playerOne' name='playerOne' required placeholder='Enter enemy'  onChange={(e) => setPlayerTwo(e.target.value)} /></span>
                        
                        
                    </div>
                </div>
                
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-kills"><span>KILLS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills'required placeholder='K'  onChange={(e) => setPlayerTwoK(e.target.value)} /></span>
                       
                        
                    </div>
                </div>
                <div className='b-m-row'>
                    <div className='b-m-col'>
                        <div className="b-m-deaths"><span>DEATHS</span></div>
                        <span className="item"><input className='add-number'  type="text" id='playerOne' name='kills'required placeholder='D'  onChange={(e) => setPlayerTwoD(e.target.value)} /></span>
                    </div>
                </div>


                </div>
                    
                
             

            </div>
            <div>
            
<div>
            
            </div>
            
  
            </div>
            <div className='big-match-btn-container'>
            <input className='date-btn' type="date" onChange={(e:any) => setDate(e.target.value)}/>
            <div className='big-divider'></div>
            <select className='map-btn' onChange={(e:any) => setMatchName(e.target.value)}>

                <option value="ERANGEL">ERANGEL</option>
                <option value="MIRAMAR">MIRAMAR</option>
                <option value="PARAMO">PARAMO</option>
                <option value="VIKENDI">VIKENDI</option>
            </select>
                
            
            
            </div>
            
            <div className='big-match-btn-container'>
                
            <button className='close-btn' onClick={handleAddMatchOverlay}>CLOSE</button>
            <input type="submit" className='save-btn' onClick={(e) => handleSubmit(e)} value="SAVE" />
            
            </div>

</div>      

        </form>
        }         
        
        <Matchlist 
        matches={matches} 
        setMatches={setMatches} 
        setSendData={setSendData}
        // setAllTime={setAllTime}
        />



        
       
        </div>
        <div className='all-time-container'> 
        <section className='all-time-header'>
                <span >LAST 10 GAMES</span>
           
            </section>
           
            <div className='all-time-player'>
                
                {sendData.allTimeName}
                {/* {sendData.allTimeName} */}
                
                {/* {allTime.map(f => (f.allTimeName))} */}
                </div>
                
                
                <button onClick={handlePlayerMatches}>{sendData.allTimeName}S GAMES</button>
               
                <div className='all-time-list'>
                    <span>kills: {sendData.allTimeKills}</span>
                    <span>wins: {sendData.totalWin}</span>
                    <span>draw: {sendData.totalDraw}</span>
                    <span>loose: {sendData.totalLoose}</span>

                </div>
             
        
        </div>
        </div>
        
        

       </section>
    )
};

export default Home


