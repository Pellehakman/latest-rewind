
import { useEffect, useState } from 'react';
import AddMatch from '../components/AddMatch';
import Matchlist from '../components/Matchlist'
import SmallMatch from '../components/SmallMatch';
import { Match } from '../models/data';
import '../styles/Home.scss'

// interface Props {
//     matches: string[]
    
// };

const Home: React.FC = () => {
    const [overlay, setOverlay] = useState<boolean>(false);
    const [match, setMatch] = useState<Match[]>([])
    const [matches, setMatches] = useState<Match[]>([])
    
    console.log('match', typeof match)


    const handleInput: (e:any) => void = (e:any) => {
        // const {name, value } = e.target;

        const yo = e.target.value
       
        // setMatch((prevUser: Match) => ({...prevUser,[name]: value}));  
        
        setMatch(yo)

    }





    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (match) {
        setMatches([...matches, { matchId: Date.now(), match, win: false }]);
        setMatch("");
    }
  };
  
  
    const handleAddMatchOverlay: () => void = () => {
    setOverlay(!overlay);}

    return (         
       <section className='home-container'>

        <button onClick={handleAddMatchOverlay}>ADD MATCH</button >
        {overlay && <AddMatch match={match} setMatch={setMatch} handleSubmit={handleSubmit} handleInput={handleInput} />}         
        <Matchlist matches={matches} setMatches={setMatches}  />
        
       </section>
    )
};


export default Home
