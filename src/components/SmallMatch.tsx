import { useState } from 'react'
import { AllTimeData, Match } from '../models/data';
import '../styles/SmallMatch.scss'
import { GiExpand } from "react-icons/gi";

type Props = {
    match: Match
    matches: Match[];
    setMatches: React.Dispatch<React.SetStateAction<Match[]>>
    setSendData: any
}
const SmallMatch = ({ match, matches, setMatches, setSendData }: Props) => {

    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true);

    const handleBigMatchOverlay: () => void = () => {setHide(!hide); setOverlay(!overlay)};

    const handleDelete = (matchId: number) => { setMatches(matches.filter((match) => match.matchId !== matchId))}

    const handlePlayerOne: (e: any) => void = (e: any) => {
        let playerOneClick = (e.target.outerText)
        let slotOnePlayer = matches.filter(obj => {
            return obj.players.playerOne === `${playerOneClick}`})
        let slotTwoPlayer = matches.filter(obj => {
            return obj.players.playerTwo === `${playerOneClick}`})
        let playerMatches = slotOnePlayer.concat(slotTwoPlayer).slice(0, 10)
        console.log(playerMatches)


        const playerKills = playerMatches.map((obj) => obj.players.playerOneK);

            let slotOneWin = playerMatches.filter(obj => {
                return obj.playerOneWinner === `WIN`})
                let totalWin = slotOneWin.length

                
                let slotOneLoose = playerMatches.filter(obj => {
                    return obj.playerOneWinner === `LOOSE`})
                    let totalLoose = slotOneLoose.length


                let slotOneDraw = playerMatches.filter(obj => {
                return obj.playerOneWinner === `DRAW`})
                let totalDraw = slotOneDraw.length
                

            
                
                console.log(playerOneClick, 'has won', totalWin, 'times, and lost', totalLoose, 'times, and draw', totalDraw, 'times' )
       function sum(obj: any) {
            let sum = 0;
            for (let kill in obj) {
                if (obj.hasOwnProperty(kill)) {
                    sum += parseFloat(obj[kill]);
                }
            }
            return sum;
        }

        let summed = sum(playerKills);
        
        let allTimeData = [{ 
            allTimeName: playerOneClick, 
            allTimeKills: summed,
            totalWin: totalWin,
            totalDraw: totalDraw,
            totalLoose: totalLoose,
        }]
        setSendData(allTimeData);         
}

const handlePlayerTwo: (e: any) => void = (e: any) => {
    let playerOneClick = (e.target.outerText)
    let slotOnePlayer = matches.filter(obj => {
        return obj.players.playerOne === `${playerOneClick}`})
    let slotTwoPlayer = matches.filter(obj => {
        return obj.players.playerTwo === `${playerOneClick}`})
    let playerMatches = slotOnePlayer.concat(slotTwoPlayer).slice(0, 10)

    const playerKills = playerMatches.map((obj) => obj.players.playerTwoK);

    let slotOneWin = playerMatches.filter(obj => {
        return obj.playerTwoWinner === `WIN`})
        let totalWin = slotOneWin.length

        
        let slotOneLoose = playerMatches.filter(obj => {
            return obj.playerTwoWinner === `LOOSE`})
            let totalLoose = slotOneLoose.length


        let slotOneDraw = playerMatches.filter(obj => {
        return obj.playerTwoWinner === `DRAW`})
        let totalDraw = slotOneDraw.length
        

   function sum(obj: any) {
        let sum = 0;
        for (let kill in obj) {
            if (obj.hasOwnProperty(kill)) {
                sum += parseFloat(obj[kill]);
            }
        }
        return sum;
    }

    let summed = sum(playerKills);
    
    let allTimeData = [{ 
        allTimeName: playerOneClick, 
        allTimeKills: summed,
        totalWin: totalWin,
        totalDraw: totalDraw,
        totalLoose: totalLoose,
    }]
    setSendData(allTimeData);         
}
    return (
        <section className='small-match-conainer' >
            {hide &&
            //---------------//SMALL CARD---------------//
                <div className='small-match'>
                    <div className='small-match-display'>
                        <div className='small-match-time-container'>
                            <span className='small-match-date'>{match.date}</span>

                        </div>
                        <div className='white-divider'></div>

                        <span className='small-match-headerName'>{match.matchName}</span>
                        <div className='white-divider'></div>
                        <span className='small-match-headerWin'>
                            {match.playerOneWinner}
                            
                            </span>
                        <div className='white-divider'></div>
                        <div className='drowdown-container'>

                            <GiExpand className='dropdown' onClick={handleBigMatchOverlay} />
                        </div>

                    </div>

                </div>}

            {overlay &&
                //---------------//BIG CARD---------------//
                <div className='big-match-container'>

                    <header className='team-names-container'>
                        <div className='teamOne-header'onClick={handlePlayerOne}>{match.players.playerOne}</div>
                        <div className='vs'>VS</div>
                        <div className='teamTwo-header'onClick={handlePlayerTwo}>{match.players.playerTwo}</div>
                    </header>
                    <span className='info-box'>To see last 10 games data, click on any player name</span>
                    <div className='team-big-container'>

                        <div className='big-match-team'>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-players"><span>PLAYERS</span></div>
                                    <span className="items" onClick={handlePlayerOne}>{match.players.playerOne}</span>
                                </div>
                            </div>

                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-kills"><span>KILLS</span></div>
                                    <div className="item">{match.players.playerOneK}</div>
                                </div>
                            </div>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-deaths"><span>DEATHS</span></div>
                                    <div className="item">{match.players.playerOneD}</div>
                                </div>
                            </div>
                        </div>

                        <div className='big-divider'></div>

                        <div className='big-match-team'>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-players"><span>PLAYERS</span></div>
                                    <span className="items" onClick={handlePlayerTwo}>{match.players.playerTwo}</span>
                                </div>
                            </div>

                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-kills"><span>KILLS</span></div>
                                    <div className="item">{match.players.playerTwoK}</div>
                                </div>
                            </div>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-deaths"><span>DEATHS</span></div>
                                    <div className="item">{match.players.playerTwoD}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='big-match-btn-container'>  
                        <button className='delete-btn' onClick={() => handleDelete(match.matchId)}>DELETE</button>
                        <button className='close-btn' onClick={handleBigMatchOverlay}>CLOSE</button>
                    </div>
                </div>}
        </section>
    )
}

export default SmallMatch
