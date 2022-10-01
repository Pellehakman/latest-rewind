
import { useState } from 'react';

import Matchlist from '../components/Matchlist'

import SmallMatch from '../components/SmallMatch';
import { actions as matchActions } from '../features/matchReducer'
import { Match } from '../models/data';
import '../styles/Home.scss'
import useLocalStorage from '../components/hooks/use-local-storage';
import AddPlayer from '../components/AddPlayer';


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
    const [playerOne, setPlayerOne] = useState<string>("")
    

    const players = [{
        playerOne: playerOne
    }]
  

    const teams = [{
        teamOne: players

    }]
        
    

const handleNameOneInput: (e:any) => void = (e:any) =>{setNameOne(e.target.value)}
const handleNameTwoInput: (e:any) => void = (e:any) =>{setNameTwo(e.target.value)}
const handleTeamOne: (e:any) => void = (e:any) =>{setTeamOne(e.target.value)}
const handlePlayerOne: (e:any) => void = (e:any) =>{setPlayerOne(e.target.value)}


   const handleSubmit: (e:any) => void = (e:any) => {
    e.preventDefault();
    setMatches([...matches, { matchId: Date.now(), nameOne, nameTwo, teams }].sort((a, b) => {
        return b.matchId - a.matchId;}))
        
    };
    
    
  
    const handleAddMatchOverlay: () => void = () => {
    setOverlay(!overlay);}

    return (         
       <section className='home-container'>

        <button onClick={handleAddMatchOverlay}>ADD MATCH</button >
        {overlay && 
        <form className="add-match" onSubmit={handleSubmit}>
            <header>This is AddMatch</header>
            <input type="text" id='nameOne' name='nameOne' placeholder='nameOne' required onChange={(e) => handleNameOneInput(e)} />
            <input type="text" id='nameTwo' name='nameTwo' placeholder='nameTwo' required onChange={(e) => handleNameTwoInput(e)} />

            <input type="text" id='teamOne' name='teamOne' placeholder='teamOne' onChange={(e) => handleTeamOne(e)} />
            <input type="text" id='playerOne' name='playerOne' placeholder='playerOne' onChange={(e) => handlePlayerOne(e)} />

            <input type="submit" />
        </form>
        }         
        
        <Matchlist matches={matches} setMatches={setMatches}  />



        
       


       </section>
    )
};

export default Home


