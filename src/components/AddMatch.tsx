
import { useRef, useState } from 'react';
import '../styles/AddMatch.scss'
import { Match } from '../models/data'


interface Props {
    match: string;
    setMatch: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
    handleInput: any

};

const AddMatch: React.FC<Props> = ({setMatch, handleSubmit, handleInput}) => {



    return(
        <form
         className="add-match-container" onSubmit={handleSubmit}>
        <header>This is AddMatch</header>


        <input type="text" id='match' name='match' placeholder='match' required onChange={(e) => handleInput(e)} />

        <input type="submit" />




        
    </form>
    )
    
  

    }
 export default AddMatch