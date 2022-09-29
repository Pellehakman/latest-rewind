import { useState } from 'react'
import { Match } from '../models/data';
import '../styles/SmallMatch.scss'
import BigMatch from './BigMatch'

interface MatchCardProps {
    match: Match;
   
};

export default function SmallMatch(props: MatchCardProps) {
    

    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true);

    const handleBigMatchOverlay: () => void = () => {
    setHide(!hide);
    setOverlay(!overlay);
}

    
    return(
        <section className='small-match-conainer' onClick={handleBigMatchOverlay}>

            {hide && <div className='single-match'> 

            
            
            
            
            
            </div>}
            
            {overlay && <BigMatch/>}

        </section>
    )
}
