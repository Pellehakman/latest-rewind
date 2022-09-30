
import { useState } from 'react';
import '../styles/AddMatch.scss'
import { Match } from '../models/data'
import { useDispatch } from 'react-redux';
import { actions as matchActions } from '../features/matchReducer'

type InProp = {
    setArray: React.SetStateAction<Match[]>
    match: Match[]
    
}
const AddMatch: React.FC<InProp> = () => {
    const dispatch = useDispatch();

    const [addGame, setAddGame] = useState<Match[]>([])
    console.log('shit', addGame)


    const [singleMatch, setSingleMatch] = useState<Match>({teamOne: '', teamTwo: '', matchId:1});
    
  const [teamOne, setTeamOne] = useState<string>('')
  const [teamTwo, setTeamTwo] = useState<string>('')
  const [game, setGame] = useState<Match[]>([])
 



    

 

    const handleSubmit: (e:any) => void = (e:any) => {
        
        
        e.preventDefault();        
        

        const newGame: Match = {
            teamOne: teamOne,
            teamTwo: teamTwo,
            matchId: Date.now(),
           
        };

       
        
      
    };

    const handleInputOne: (e:any) => void = (e) => {
        setTeamOne(e.target.value);
    };
    const handleInputTwo: (e:any) => void = (e) => {
        setTeamTwo(e.target.value);
    };


// function addGame(newGame: Match) {   
    
//     console.log(newGame)
//     const copyGame = [...newGame]
   
    
   
// };









    return(
        <form
            className="add-match-container" onSubmit={handleSubmit}>
            <header>This is AddMatch</header>
            <input type="text" id='teamOne' name='teamOne' placeholder='teamOne' required onChange={(e) => handleInputOne(e)} />
            <input type="text" id='teamTwo' name='teamTwo' placeholder='teamTwo' required onChange={(e) => handleInputTwo(e)} />
            <input type="submit" />
            
        </form>
    )
}
export default AddMatch