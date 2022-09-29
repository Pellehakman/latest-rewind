
import { useRef, useState } from 'react';
import '../styles/AddMatch.scss'
import { Match } from '../models/data'


interface Props {
    match: string;
    setMatch: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
};

const AddMatch: React.FC<Props> = ({match, setMatch, handleSubmit}) => {


    // const handleAddMatchInput: (e:any) => void = (e:any) => {

    // };

    // const handleSubmit: (e:any) => void = (e:any) => {
    //     e.preventDefault()
        

    // }



    return(
        <form
         className="add-match-container" onSubmit={handleSubmit}>
        <header>This is AddMatch</header>


        <input type="text" id='matchName' name='matchName' placeholder='Matchname' required onChange={(e) => setMatch(e.target.value)} />

        <input type="submit" />




        
    </form>
    )
    
  

    }
 export default AddMatch