
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import '../styles/MatchList.scss'
import SmallMatch from './SmallMatch'


const MatchList = () =>{


// const matches = useSelector((state: RootState) => state.match)


    return(
        <div className="match-list-container">
        <header>This is Matchlist</header>
        
            <SmallMatch />
        
        
    </div>
  

    )

}


export default MatchList


    
    