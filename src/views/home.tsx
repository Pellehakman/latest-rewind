
import { useEffect, useState } from 'react';
import AddMatch from '../components/AddMatch';
import Matchlist from '../components/Matchlist'
import '../styles/AddMatch.scss'
import SmallMatch from '../components/SmallMatch';
import { actions as matchActions } from '../features/matchReducer'
import { Match } from '../models/data';
import '../styles/Home.scss'

interface Props {
    match: Match;
    
};

const Home: React.FC<Props> = () => { 
    const [overlay, setOverlay] = useState<boolean>(false);
    // const [match, setMatch] = useState<string>('')
    const [matches, setMatches] = useState<Match[]>([])
       
    const [teamOne, setTeamOne] = useState<string>("")
    const [teamTwo, setTeamTwo] = useState<string>("")
 
    // console.log(match)
    console.log(matches)

   
// DET FUNKAR UTAN MATCH OCH CARD SINGLE


const handleTeamOneInput: (e:any) => void = (e:any) =>{setTeamOne(e.target.value)}
const handleTeamTwoInput: (e:any) => void = (e:any) =>{setTeamTwo(e.target.value)}


   const handleSubmit: (e:any) => void = (e:any) => {
    e.preventDefault();
    // const Card = {
    //     teamOne: teamOne,
    //     teamTwo: teamTwo,
    //     matchId: Date.now()
    // }
   
    // setMatch(JSON.stringify(Card))
    setMatches([...matches, { matchId: Date.now(), teamOne, teamTwo }]);
  
        
  };
  
  
    const handleAddMatchOverlay: () => void = () => {
    setOverlay(!overlay);}

    return (         
       <section className='home-container'>
        {/* <button onClick={sendAll}>SEND IT</button> */}
        

       

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
