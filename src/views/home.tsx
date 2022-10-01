
import { useEffect, useState } from 'react';
import AddMatch from '../components/AddMatch';
import Matchlist from '../components/Matchlist'
import '../styles/AddMatch.scss'
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

       
    const [teamOne, setTeamOne] = useState<string>("")
    const [teamTwo, setTeamTwo] = useState<string>("")
 

   



const handleTeamOneInput: (e:any) => void = (e:any) =>{setTeamOne(e.target.value)}
const handleTeamTwoInput: (e:any) => void = (e:any) =>{setTeamTwo(e.target.value)}


   const handleSubmit: (e:any) => void = (e:any) => {
    e.preventDefault();
    setMatches([...matches, { matchId: Date.now(), teamOne, teamTwo }]);
    
  
        
  };
  
  
    const handleAddMatchOverlay: () => void = () => {
    setOverlay(!overlay);}

    return (         
       <section className='home-container'>

        <button onClick={handleAddMatchOverlay}>ADD MATCH</button >
        {overlay && 
        <form
        className="add-match-container" onSubmit={handleSubmit}>
       <header>This is AddMatch</header>


       <input type="text" id='teamOne' name='teamOne' placeholder='teamOne' required onChange={(e) => handleTeamOneInput(e)} />
       <input type="text" id='teamTwo' name='teamTwo' placeholder='teamTwo' required onChange={(e) => handleTeamTwoInput(e)} />
       <input type="submit" />




       
   </form>
        
        
        }         
        
        <Matchlist matches={matches} setMatches={setMatches}  />



        
       


       </section>
    )
};

export default Home

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
