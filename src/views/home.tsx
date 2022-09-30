
import { useEffect, useState } from 'react';
import AddMatch from '../components/AddMatch';
import Matchlist from '../components/Matchlist'
import SmallMatch from '../components/SmallMatch';
import { Match } from '../models/data';
import '../styles/Home.scss'


export default function Home() { 
    const [overlay, setOverlay] = useState<boolean>(false);
    
  
    const handleAddMatchOverlay: () => void = () => {
    setOverlay(!overlay);}

    return (         
       <section className='home-container'>
        

       

        <button onClick={handleAddMatchOverlay}>ADD MATCH</button >
        {overlay && <AddMatch 
        // match={match} 
        // setMatch={setMatch} 
        // handleSubmit={handleSubmit} 
        // handleInput={handleInput} 
        />}         
        {/* <Matchlist 
        matches={matches} 
        setMatches={setMatches}  
        /> */}
        <Matchlist/>



        
       


       </section>
    )
};