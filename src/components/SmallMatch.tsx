import { useState } from 'react'
import '../styles/SmallMatch.scss'
import BigMatch from './BigMatch'


function SmallMatch(){
    const [overlay, setOverlay] = useState(false)


    const handleOverlay: () => void = () =>{
        setOverlay(overlay)
        
    }

    
    return(
    <div className='small-match-conatiner' onClick={handleOverlay}>
        <header>this is Small Match</header>

        <BigMatch />
        

    </div>
    )
}
  


    export default SmallMatch