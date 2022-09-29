
import { useEffect, useState } from 'react';
import AddMatch from '../components/AddMatch';
import Matchlist from '../components/Matchlist'
import SmallMatch from '../components/SmallMatch';
import { Match } from '../models/data';
import '../styles/Home.scss'


export default function Home() { 
    const [overlay, setOverlay] = useState<boolean>(false);
    const [match, setMatch] = useState<string>("")
    const [matches, setMatches] = useState<Match[]>([])
    const LOCAL_STORAGE_KEY = "matches"


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
        {overlay && <AddMatch match={match} setMatch={setMatch} handleSubmit={handleSubmit} />}         
        <Matchlist matches={matches} setMatches={setMatches}  />



        
       


       </section>
    )
};

