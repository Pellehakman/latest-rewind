
import { ChangeEvent, useRef, useState } from 'react';
import '../styles/inputPlayer.scss'
import { Match } from '../models/data'




const InputPlayer = () => {




    return(
        <form>
            <input type="text" id="playerName" placeholder='Enter player name' />
            <input type="number" id="kills" placeholder='Enter kills' />
            <input type="number" id="deaths" placeholder='Enter deaths' />
        



        
    </form>
    )
    
  

    }
 export default InputPlayer