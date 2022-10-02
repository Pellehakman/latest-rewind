
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
    console.log(matches)

  
    const [nameOne, setNameOne] = useState<string>("")
    const [nameTwo, setNameTwo] = useState<string>("")

    const [teamOne, setTeamOne] = useState<string>("")
    const [teamTwo, setTeamTwo] = useState<string>("")
    const [playerOne, setPlayerOne] = useState<string>("")
    const [playerFive, setPlayerFive] = useState<string>("")
    const [kills, setKills] = useState<number>()
    const [deaths, setDeaths] = useState<number>()
    

const teams = [{
        teamOne: teamOne,
        players: [{
            playerOne: playerOne,
            playerId: Date.now(),
            kills: kills,
            deaths: deaths, 
        }],
},
{
        teamTwo: teamTwo,
        players: [{
            playerFive: playerFive,
            playerId: Date.now(),
            kills: kills,
            deaths: deaths, 
        }],
}]
        
   
const handleNameOneInput: (e:any) => void = (e:any) =>{setNameOne(e.target.value)}
const handleNameTwoInput: (e:any) => void = (e:any) =>{setNameTwo(e.target.value)}
const handleTeamOne: (e:any) => void = (e:any) =>{setTeamOne(e.target.value)}
const handleTeamTwo: (e:any) => void = (e:any) =>{setTeamTwo(e.target.value)}
const handlePlayerOne: (e:any) => void = (e:any) =>{setPlayerOne(e.target.value)}


   const handleSubmit: (e:any) => void = (e:any) => {
    e.preventDefault();
    setMatches([...matches, { matchId: Date.now(), nameOne, nameTwo, teams }]
    .sort((a, b) => {return b.matchId - a.matchId;}))
};
    
    
  
    const handleAddMatchOverlay: () => void = () => {
    setOverlay(!overlay);}

    return (         
       <section className='home-container'>
        <div className='main-container'>
        <div className='matches-container'>
            <section className='header-container'>
                <span>LAST 10 GAMES</span>
            <button className='add-btn-container' onClick={handleAddMatchOverlay}><span className='add-btn'>ADD MATCH</span></button >
            </section>

        
        {overlay && 
        <form className="add-match" onSubmit={handleSubmit}>
            
            <input type="text" id='nameOne' name='nameOne' placeholder='nameOne' onChange={(e) => handleNameOneInput(e)} />
            <input type="text" id='nameTwo' name='nameTwo' placeholder='nameTwo' onChange={(e) => handleNameTwoInput(e)} />
            <input type="text" id='teamOne' name='teamOne' placeholder='teamOne' onChange={(e) => handleTeamOne(e)} />
            <input type="text" id='teamOne' name='teamOne' placeholder='teamOne' onChange={(e) => handleTeamTwo(e)} />
                     
            <input type="text" id='playerOne' name='playerOne' placeholder='playerOne' onChange={(e) => handlePlayerOne(e)} />

            <input type="submit" />
        </form>
        }         
        
        <Matchlist matches={matches} setMatches={setMatches}  />



        
       
        </div>
        <div className='all-time-container'> 
        <section className='all-time-header'>
                <span>ALL TIME STATS</span>
           
            </section>
        
        </div>
        </div>
        
        

       </section>
    )
};

export default Home


